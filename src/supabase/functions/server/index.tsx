import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-85e49125/health", (c) => {
  return c.json({ status: "ok" });
});

// Email sending endpoint using Resend
app.post("/make-server-85e49125/send-email", async (c) => {
  try {
    const { to, bcc, subject, html } = await c.req.json();
    
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    
    if (!resendApiKey) {
      console.log("Error: RESEND_API_KEY not found");
      return c.json({ error: "Email service not configured" }, 500);
    }

    const emailPayload: any = {
      from: "Kulcho 💜 <hello@mail.kulcho.com>",
      to: to,
      subject: subject,
      html: html,
    };

    if (bcc) {
      emailPayload.bcc = bcc;
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify(emailPayload),
    });

    const data = await response.json();

    if (!response.ok) {
      console.log("Resend API error:", data);
      return c.json({ error: "Failed to send email", details: data }, response.status);
    }

    console.log("Email sent successfully:", data);
    return c.json({ success: true, data });
  } catch (error) {
    console.log("Error sending email:", error);
    return c.json({ error: "Internal server error", details: error.message }, 500);
  }
});

// Artist waitlist endpoint with multi-step form data
app.post("/make-server-85e49125/send-artist-waitlist", async (c) => {
  try {
    const { 
      email,
      displayName, 
      username,
      country,
      referralSource,
      referralSourceOther,
      appleMusicUrl,
      spotifyUrl,
      youtubeMusicUrl,
      youtubeUrl,
      tiktokUrl,
      instagramUrl,
      facebookUrl
    } = await c.req.json();
    
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    
    if (!resendApiKey) {
      console.log("Error: RESEND_API_KEY not found");
      return c.json({ error: "Email service not configured" }, 500);
    }

    // Build referral source section
    let referralSection = `<p><strong>Source:</strong> ${referralSource || 'Not provided'}</p>`;
    if (referralSourceOther) {
      referralSection += `<p><strong>Detail:</strong> ${referralSourceOther}</p>`;
    }

    // Build HTML email content
    const htmlContent = `
      <h2>New Artist Waitlist Application</h2>
      
      <h3>Profile Information</h3>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Display Name:</strong> ${displayName}</p>
      <p><strong>Username:</strong> ${username}</p>
      <p><strong>Country:</strong> ${country || 'Not provided'}</p>
      ${referralSection}
      
      <h3>Music Streaming Profiles</h3>
      <p><strong>Apple Music:</strong> ${appleMusicUrl || 'Not provided'}</p>
      <p><strong>Spotify:</strong> ${spotifyUrl || 'Not provided'}</p>
      <p><strong>YouTube Music:</strong> ${youtubeMusicUrl || 'Not provided'}</p>
      
      <h3>Social Media Profiles</h3>
      <p><strong>YouTube:</strong> ${youtubeUrl || 'Not provided'}</p>
      <p><strong>TikTok:</strong> ${tiktokUrl || 'Not provided'}</p>
      <p><strong>Instagram:</strong> ${instagramUrl || 'Not provided'}</p>
      <p><strong>Facebook:</strong> ${facebookUrl || 'Not provided'}</p>
    `;

    const emailPayload = {
      from: "Kulcho 💜 <hello@mail.kulcho.com>",
      to: ["david@rez-music.com"],
      bcc: ["sam@kulcho.com"],
      subject: "Rezonate One - New Artist Application",
      html: htmlContent,
    };

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify(emailPayload),
    });

    const data = await response.json();

    if (!response.ok) {
      console.log("Resend API error:", data);
      return c.json({ error: "Failed to send email", details: data }, response.status);
    }

    console.log("Artist waitlist email sent successfully:", data);
    return c.json({ success: true, data });
  } catch (error) {
    console.log("Error sending artist waitlist email:", error);
    return c.json({ error: "Internal server error", details: error.message }, 500);
  }
});

Deno.serve(app.fetch);