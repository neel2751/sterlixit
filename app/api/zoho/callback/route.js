export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  const response = await fetch("https://accounts.zoho.in/oauth/v2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      client_id: process.env.ZOHO_CLIENT_ID,
      client_secret: process.env.ZOHO_CLIENT_SECRET,
      redirect_uri: "http://localhost:3000/api/zoho/callback",
      code,
    }),
  });

  const data = await response.json();

  return Response.json(data);
}
