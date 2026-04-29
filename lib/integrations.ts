export const publicIntegrationConfig = {
  liveChatProvider: process.env.NEXT_PUBLIC_LIVE_CHAT_PROVIDER ?? "custom",
  contactPageEmail:
    process.env.NEXT_PUBLIC_CONTACT_PAGE_EMAIL ?? "hello@sterlixit.com",
  contactPagePhone:
    process.env.NEXT_PUBLIC_CONTACT_PAGE_PHONE ?? "+44 20 8004 3327",
  contactPageAddress:
    process.env.NEXT_PUBLIC_CONTACT_PAGE_ADDRESS ??
    "595a Cranbrook Road, Gants Hill, London, IG2 6JZ, United Kingdom",
  footerEmail: process.env.NEXT_PUBLIC_FOOTER_EMAIL ?? "hello@sterlixit.com",
  footerPhone: process.env.NEXT_PUBLIC_FOOTER_PHONE ?? "+44 20 8004 3327",
  footerAddress:
    process.env.NEXT_PUBLIC_FOOTER_ADDRESS ??
    "595a Cranbrook Road, Gants Hill, London, IG2 6JZ, United Kingdom",
  calendlyUrl:
    process.env.NEXT_PUBLIC_CALENDLY_URL ??
    "https://calendly.com/sterlixit-sales",
  googleMapsEmbedUrl:
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ??
    "https://www.google.com/maps?q=595a%20Cranbrook%20Road%2C%20Gants%20Hill%2C%20London%2C%20IG2%206JZ%2C%20United%20Kingdom&output=embed",
  liveChatScriptUrl: process.env.NEXT_PUBLIC_LIVE_CHAT_SCRIPT_URL ?? "",
  liveChatUrl: process.env.NEXT_PUBLIC_LIVE_CHAT_URL ?? "",
  tawkPropertyId: process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID ?? "",
  tawkWidgetId: process.env.NEXT_PUBLIC_TAWK_WIDGET_ID ?? "",
  chatwootBaseUrl:
    process.env.NEXT_PUBLIC_CHATWOOT_BASE_URL ?? "https://app.chatwoot.com",
  chatwootWebsiteToken: process.env.NEXT_PUBLIC_CHATWOOT_WEBSITE_TOKEN ?? "",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  whatsappMessage:
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ??
    "Hi Sterlixit team, I want to discuss my project.",
};

export const serverIntegrationConfig = {
  crmProvider: process.env.CRM_PROVIDER ?? "webhook",
  newsletterProvider: process.env.NEWSLETTER_PROVIDER ?? "webhook",
  crmWebhookUrl: process.env.CRM_WEBHOOK_URL ?? "",
  newsletterWebhookUrl: process.env.NEWSLETTER_WEBHOOK_URL ?? "",
  leadWebhookUrl: process.env.LEAD_WEBHOOK_URL ?? "",
  hubspotPortalId: process.env.HUBSPOT_PORTAL_ID ?? "",
  hubspotFormId: process.env.HUBSPOT_FORM_ID ?? "",
  zohoClientId: process.env.ZOHO_CLIENT_ID ?? "",
  zohoClientSecret: process.env.ZOHO_CLIENT_SECRET ?? "",
  zohoRefreshToken: process.env.ZOHO_REFRESH_TOKEN ?? "",
  zohoAccountsUrl: process.env.ZOHO_ACCOUNTS_URL ?? "https://accounts.zoho.com",
  zohoApiDomain: process.env.ZOHO_API_DOMAIN ?? "https://www.zohoapis.com",
  zohoContactModule: process.env.ZOHO_CONTACT_MODULE ?? "Leads",
  zohoLeadModule: process.env.ZOHO_LEAD_MODULE ?? "Leads",
  mailchimpApiKey: process.env.MAILCHIMP_API_KEY ?? "",
  mailchimpAudienceId: process.env.MAILCHIMP_AUDIENCE_ID ?? "",
};

type ContactSubmission = {
  name: string;
  email: string;
  phone: string;
  company?: string;
  heardAboutUs?: string;
  service: string;
  budget?: string;
  message?: string;
  source?: string;
  tags?: string[];
};

type LeadCapture = {
  resource: string;
  email: string;
  source: string;
  name?: string;
  company?: string;
  message?: string;
};

type NewsletterSubscription = {
  email: string;
  source: string;
  tags: string[];
};

function splitFullName(fullName: string) {
  const trimmed = fullName.trim();
  if (!trimmed) {
    return { firstName: "", lastName: "Website Lead" };
  }

  const parts = trimmed.split(/\s+/);
  if (parts.length === 1) {
    return { firstName: "", lastName: parts[0] };
  }

  return {
    firstName: parts.slice(0, -1).join(" "),
    lastName: parts.at(-1) ?? parts[0],
  };
}

export async function postJsonWebhook(url: string, payload: unknown) {
  if (!url) {
    return { skipped: true as const };
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Webhook failed with status ${response.status}`);
  }

  return { skipped: false as const };
}

async function postHubspotForm(fields: Array<{ name: string; value: string }>) {
  const { hubspotPortalId, hubspotFormId } = serverIntegrationConfig;
  if (!hubspotPortalId || !hubspotFormId) {
    return { skipped: true as const };
  }

  const response = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${hubspotPortalId}/${hubspotFormId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fields }),
    },
  );

  if (!response.ok) {
    throw new Error(
      `HubSpot form submission failed with status ${response.status}`,
    );
  }

  return { skipped: false as const };
}

async function getZohoAccessToken() {
  const { zohoAccountsUrl, zohoClientId, zohoClientSecret, zohoRefreshToken } =
    serverIntegrationConfig;

  if (!zohoClientId || !zohoClientSecret || !zohoRefreshToken) {
    return { skipped: true as const, accessToken: "" };
  }

  const response = await fetch(`${zohoAccountsUrl}/oauth/v2/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      refresh_token: zohoRefreshToken,
      client_id: zohoClientId,
      client_secret: zohoClientSecret,
      grant_type: "refresh_token",
    }),
  });

  if (!response.ok) {
    throw new Error(`Zoho token request failed with status ${response.status}`);
  }

  const body = (await response.json()) as {
    access_token?: string;
    error?: string;
    error_description?: string;
  };
  if (!body.access_token) {
    throw new Error(
      `Zoho token response did not include an access token (${body.error ?? "unknown_error"}${body.error_description ? `: ${body.error_description}` : ""})`,
    );
  }

  return { skipped: false as const, accessToken: body.access_token };
}

async function postZohoRecord(
  moduleName: string,
  record: Record<string, string | any[]>,
) {
  const { zohoApiDomain } = serverIntegrationConfig;
  const tokenResult = await getZohoAccessToken();
  if (tokenResult.skipped) {
    return { skipped: true as const };
  }

  const response = await fetch(`${zohoApiDomain}/crm/v2/${moduleName}/upsert`, {
    method: "POST",
    headers: {
      Authorization: `Zoho-oauthtoken ${tokenResult.accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: [record],
      duplicate_check_fields: ["Email"],
      trigger: ["workflow", "assignment_rule"],
    }),
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => "");
    throw new Error(
      `Zoho CRM create failed with status ${response.status}: ${errorText}`,
    );
  }

  return { skipped: false as const };
}

async function createZohoContactSubmission(contact: ContactSubmission) {
  const { firstName, lastName } = splitFullName(contact.name);
  const moduleName = serverIntegrationConfig.zohoContactModule;
  const descriptionLines = [
    `Service: ${contact.service}`,
    `Source: ${contact.source ?? "website_contact_form"}`,
  ];

  if (contact.budget) descriptionLines.push(`Budget: ${contact.budget}`);
  if (contact.message) {
    descriptionLines.push("", "Message:", contact.message);
  }

  if (contact.heardAboutUs) {
    descriptionLines.push(
      "",
      "How did you hear about us?",
      contact.heardAboutUs,
    );
  }

  const defaultTags = [
    "Website Contact Form",
    contact.service ?? "General Inquiry",
    ...(contact.source ? [contact.source] : []),
  ];
  const mergedTags = Array.from(
    new Set([...defaultTags, ...(contact.tags ?? [])]),
  );

  const isContactsModule = moduleName.toLowerCase() === "contacts";
  const baseRecord: Record<string, string | any[]> = {
    First_Name: firstName,
    Last_Name: lastName,
    Email: contact.email,
    Phone: contact.phone,
    Description: descriptionLines.join("\n"),
    Service: contact.service,

    Tag: mergedTags.map((name) => ({ name })),
  };

  if (!isContactsModule) {
    baseRecord.Company = contact.company?.trim() || "Website Enquiry";
    baseRecord.Lead_Source = contact.source ?? "website_contact_form";
  }

  await postZohoRecord(moduleName, baseRecord);
}

async function createZohoLeadCapture(lead: LeadCapture) {
  const { firstName, lastName } = splitFullName(lead.name ?? "Website Lead");
  const moduleName = serverIntegrationConfig.zohoLeadModule;
  const descriptionLines = [
    `Requested resource: ${lead.resource}`,
    `Source: ${lead.source}`,
  ];

  if (lead.message) {
    descriptionLines.push("", "Message:", lead.message);
  }

  const isContactsModule = moduleName.toLowerCase() === "contacts";
  const baseRecord: Record<string, string | any[]> = {
    First_Name: firstName,
    Last_Name: lastName,
    Email: lead.email,
    Description: descriptionLines.join("\n"),
  };

  if (!isContactsModule) {
    baseRecord.Company = lead.company?.trim() || "Lead Capture";
    baseRecord.Lead_Source = lead.source;
  }

  await postZohoRecord(moduleName, baseRecord);
}

async function subscribeMailchimp(payload: NewsletterSubscription) {
  const { mailchimpApiKey, mailchimpAudienceId } = serverIntegrationConfig;
  if (!mailchimpApiKey || !mailchimpAudienceId) {
    return { skipped: true as const };
  }

  const dataCenter = mailchimpApiKey.split("-")[1];
  if (!dataCenter) {
    throw new Error(
      "Mailchimp API key must include a data-center suffix (e.g. us1)",
    );
  }

  const authToken = Buffer.from(`sterlixit:${mailchimpApiKey}`).toString(
    "base64",
  );
  const response = await fetch(
    `https://${dataCenter}.api.mailchimp.com/3.0/lists/${mailchimpAudienceId}/members`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${authToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: payload.email,
        status: "subscribed",
        tags: payload.tags,
        merge_fields: {
          SOURCE: payload.source,
        },
      }),
    },
  );

  if (response.ok) {
    return { skipped: false as const };
  }

  const errorBody = await response.json().catch(() => ({}));
  if (response.status === 400 && errorBody?.title === "Member Exists") {
    return { skipped: false as const };
  }

  throw new Error(`Mailchimp subscribe failed with status ${response.status}`);
}

export async function submitContactToCrm(contact: ContactSubmission) {
  const payload = {
    type: "contact_submission",
    submittedAt: new Date().toISOString(),
    source: contact.source ?? "website_contact_form",
    data: contact,
  };

  if (serverIntegrationConfig.crmProvider === "hubspot") {
    await postHubspotForm([
      { name: "firstname", value: contact.name },
      { name: "email", value: contact.email },
      { name: "phone", value: contact.phone },
      { name: "company", value: contact.company ?? "" },
      { name: "heard_about_us", value: contact.heardAboutUs ?? "" },
      { name: "service_interest", value: contact.service },
      { name: "budget_range", value: contact.budget ?? "" },
      { name: "message", value: contact.message ?? "" },
      { name: "lead_source", value: contact.source ?? "website_contact_form" },
    ]);
  }

  if (serverIntegrationConfig.crmProvider === "zoho") {
    await createZohoContactSubmission(contact);
  }

  await postJsonWebhook(serverIntegrationConfig.crmWebhookUrl, payload).catch(
    (error) => {
      console.warn("CRM webhook failed for contact submission", error);
    },
  );
}

export async function submitLeadToCrm(lead: LeadCapture) {
  const payload = {
    type: "lead_magnet_request",
    submittedAt: new Date().toISOString(),
    source: lead.source,
    data: lead,
  };

  if (serverIntegrationConfig.crmProvider === "hubspot") {
    const fields = [
      { name: "email", value: lead.email },
      { name: "lead_source", value: lead.source },
      { name: "requested_resource", value: lead.resource },
      { name: "firstname", value: lead.name ?? "" },
      { name: "company", value: lead.company ?? "" },
      { name: "message", value: lead.message ?? "" },
    ];

    await postHubspotForm(fields);
  }

  if (serverIntegrationConfig.crmProvider === "zoho") {
    await createZohoLeadCapture(lead);
  }

  await postJsonWebhook(serverIntegrationConfig.leadWebhookUrl, payload).catch(
    (error) => {
      console.warn("Lead webhook failed", error);
    },
  );
}

export async function subscribeToNewsletter(
  subscription: NewsletterSubscription,
) {
  const payload = {
    type: "newsletter_subscription",
    submittedAt: new Date().toISOString(),
    source: subscription.source,
    data: {
      email: subscription.email,
      tags: subscription.tags,
    },
  };

  if (serverIntegrationConfig.newsletterProvider === "mailchimp") {
    await subscribeMailchimp(subscription);
  }

  await postJsonWebhook(
    serverIntegrationConfig.newsletterWebhookUrl,
    payload,
  ).catch((error) => {
    console.warn("Newsletter webhook failed", error);
  });
}
