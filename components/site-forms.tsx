"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );

  if (state === "done") {
    return (
      <p className="text-sm text-muted-foreground">Thanks for subscribing.</p>
    );
  }

  return (
    <form
      className="flex w-full max-w-md gap-2"
      onSubmit={async (e) => {
        e.preventDefault();
        setState("loading");

        const response = await fetch("/api/newsletter", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            source: "homepage_newsletter",
            tags: ["newsletter"],
          }),
        });

        if (response.ok) {
          setState("done");
          return;
        }

        setState("error");
      }}
    >
      <Input
        type="email"
        placeholder="Enter email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button type="submit" disabled={state === "loading"}>
        {state === "loading" ? "Submitting..." : "Subscribe"}
      </Button>
      {state === "error" ? (
        <p className="text-sm text-destructive">
          Unable to subscribe. Please try again.
        </p>
      ) : null}
    </form>
  );
}

export function DetailedContactForm({
  source = "contact_page",
}: {
  source?: string;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const incomingName = params.get("name")?.trim() ?? "";
    const incomingEmail = params.get("email")?.trim() ?? "";

    if (!incomingName && !incomingEmail) return;

    setForm((prev) => ({
      ...prev,
      name: prev.name || incomingName,
      email: prev.email || incomingEmail,
    }));
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        source,
      }),
    });

    setIsSubmitting(false);
    setSubmitted(response.ok);
    setSubmitError(!response.ok);
  };

  const update = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  if (submitted) {
    <p className="text-sm text-muted-foreground">Thanks for subscribing.</p>;
    return (
      <p className="text-sm text-muted-foreground">
        Thanks. We’ll contact you shortly.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 md:grid-cols-2">
      <Input
        placeholder="Name"
        required
        value={form.name}
        onChange={(e) => update("name", e.target.value)}
      />
      <Input
        type="email"
        placeholder="Email"
        required
        value={form.email}
        onChange={(e) => update("email", e.target.value)}
      />
      <Input
        placeholder="Phone"
        required
        value={form.phone}
        onChange={(e) => update("phone", e.target.value)}
      />
      <Input
        placeholder="Company"
        value={form.company}
        onChange={(e) => update("company", e.target.value)}
      />

      <Select
        onValueChange={(value) => update("service", value)}
        value={form.service}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Service Interested In" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="graphics-branding">Graphics & Branding</SelectItem>
          <SelectItem value="web-design-development">
            Web Design & Development
          </SelectItem>
          <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
          <SelectItem value="custom-saas-it-solutions">
            Custom SaaS / IT
          </SelectItem>
          <SelectItem value="support-maintenance">
            Support & Maintenance
          </SelectItem>
        </SelectContent>
      </Select>

      <Select
        onValueChange={(value) => update("budget", value)}
        value={form.budget}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Budget Range" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="under-5k">Under £5k</SelectItem>
          <SelectItem value="5k-15k">£5k - £15k</SelectItem>
          <SelectItem value="15k-50k">£15k - £50k</SelectItem>
          <SelectItem value="50k-plus">£50k+</SelectItem>
        </SelectContent>
      </Select>

      <div className="md:col-span-2">
        <Textarea
          placeholder="Tell us about your goals"
          required
          rows={5}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
        />
      </div>
      <div className="md:col-span-2">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Submit Inquiry"}
        </Button>
        {submitError ? (
          <p className="mt-2 text-sm text-destructive">
            Submission failed. Please try again.
          </p>
        ) : null}
      </div>
    </form>
  );
}

export function SimpleLeadMagnetForm({
  title,
  description,
  source = "resources_page",
}: {
  title: string;
  description: string;
  source?: string;
}) {
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );

  return (
    <div className="rounded-lg border p-5">
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      {state === "done" ? (
        <p className="mt-3 text-sm text-muted-foreground">
          Request received. Check your inbox.
        </p>
      ) : (
        <form
          className="mt-4 flex gap-2"
          onSubmit={async (e) => {
            e.preventDefault();
            setState("loading");
            const formData = new FormData(e.currentTarget);
            const response = await fetch("/api/lead", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                resource: title,
                email: formData.get("email"),
                source,
              }),
            });
            if (response.ok) {
              setState("done");
              return;
            }
            setState("error");
          }}
        >
          <Input type="email" name="email" placeholder="Work email" required />
          <Button type="submit" disabled={state === "loading"}>
            {state === "loading" ? "Sending..." : "Get Resource"}
          </Button>
        </form>
      )}
      {state === "error" ? (
        <p className="mt-3 text-sm text-destructive">
          Unable to submit. Please try again.
        </p>
      ) : null}
    </div>
  );
}
