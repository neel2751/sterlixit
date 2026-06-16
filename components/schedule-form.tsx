"use client";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const CAL_NAMESPACE = "IT Service Discovery Call (30 Minutes)";
const CAL_LINK = "sterlixit/discovery";
const CAL_EMBED_JS_URL = "https://cal.eu/embed.js";
const CAL_ORIGIN = "https://www.cal.eu";

export default function CalForm() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({
        namespace: CAL_NAMESPACE,
        embedJsUrl: CAL_EMBED_JS_URL,
      });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <Cal
      namespace={CAL_NAMESPACE}
      calLink={CAL_LINK}
      calOrigin={CAL_ORIGIN}
      embedJsUrl={CAL_EMBED_JS_URL}
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view" }}
    />
  );
}
