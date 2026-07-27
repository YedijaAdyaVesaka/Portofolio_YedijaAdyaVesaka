import { siteConfig } from "@/lib/site";

/** Serialize a schema.org object for a JSON-LD <script> tag. */
export function jsonLd(data: Record<string, unknown>) {
  return { __html: JSON.stringify(data) };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/icon.svg`,
  description: siteConfig.description,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Menara Astra, Jl. Jend. Sudirman Kav. 5",
    addressLocality: "Jakarta",
    postalCode: "10220",
    addressCountry: "ID",
  },
  sameAs: siteConfig.socials.map((s) => s.href),
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
};
