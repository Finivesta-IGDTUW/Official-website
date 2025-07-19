const ipinfo = require("ipinfo");
import { Request, Response, NextFunction } from "express";

// Utility to detect zone from IP and log to console (for site load)
export async function logZoneOnSiteLoad(ipRaw?: string) {
  let ip = ipRaw || "";
  if (Array.isArray(ip)) ip = ip[0];
  ip = (typeof ip === "string" ? ip : String(ip)).split(",")[0].trim();

  const token = process.env.IPINFO_TOKEN;
  if (!token) {
    console.warn("IPINFO_TOKEN is not set in environment variables");
    return;
  }

  ipinfo(ip, token, (err: any, data: { country?: string }) => {
    if (!err && data?.country) {
      const zone = mapCountryToZone(data.country);
      console.log("IP:", ip, "Country:", data.country, "Zone:", zone);
    } else {
      console.warn("IP info failed:", err);
    }
  });
}

export function mapCountryToZone(cc: string): string {
  if (cc === "IN") return "IN";
  if (["AE", "SA", "QA"].includes(cc)) return "AE";
  if (["US", "CA"].includes(cc)) return "US";
  if (["DE", "FR", "NL", "IT", "ES"].includes(cc)) return "EU";
  return "ROW";
}

// Example usage: call this when site loads
logZoneOnSiteLoad();
