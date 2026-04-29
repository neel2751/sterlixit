"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type CareerApplicationFormProps = {
  roleTitle: string;
  roleSlug: string;
};

export function CareerApplicationForm({
  roleTitle,
  roleSlug,
}: CareerApplicationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    portfolio: "",
    linkedin: "",
    message: "",
  });

  const update = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const composedMessage = [
      `Role: ${roleTitle}`,
      `Role Slug: ${roleSlug}`,
      form.portfolio ? `Portfolio: ${form.portfolio}` : "",
      form.linkedin ? `LinkedIn: ${form.linkedin}` : "",
      "",
      "Candidate Note:",
      form.message,
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          service: "careers-application",
          source: "careers_detail_application",
          message: composedMessage,
        }),
      });

      if (!response.ok) {
        throw new Error("Application submission failed");
      }

      setIsSubmitted(true);
    } catch {
      setSubmitError(
        "Could not submit application right now. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <p className="text-sm leading-relaxed text-muted-foreground">
        Application received. Our team will review your profile and contact you
        if there is a strong fit for this role.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3">
      <Input
        placeholder="Full name"
        value={form.name}
        onChange={(event) => update("name", event.target.value)}
        required
      />
      <Input
        type="email"
        placeholder="Work email"
        value={form.email}
        onChange={(event) => update("email", event.target.value)}
        required
      />
      <Input
        placeholder="Phone"
        value={form.phone}
        onChange={(event) => update("phone", event.target.value)}
        required
      />
      <Input
        placeholder="Current company (optional)"
        value={form.company}
        onChange={(event) => update("company", event.target.value)}
      />
      <Input
        type="url"
        placeholder="Portfolio URL (optional)"
        value={form.portfolio}
        onChange={(event) => update("portfolio", event.target.value)}
      />
      <Input
        type="url"
        placeholder="LinkedIn URL (optional)"
        value={form.linkedin}
        onChange={(event) => update("linkedin", event.target.value)}
      />
      <Textarea
        rows={4}
        placeholder="Share your experience and why you are a strong fit for this role."
        value={form.message}
        onChange={(event) => update("message", event.target.value)}
        required
      />
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </Button>
      {submitError ? (
        <p className="text-sm text-destructive">{submitError}</p>
      ) : null}
    </form>
  );
}
