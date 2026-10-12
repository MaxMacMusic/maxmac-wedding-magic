import { useEffect } from "react";

export const SITE_URL = "https://maxmac.org";

type Meta = { title: string; description: string; path: string; jsonLd?: object[] };

const setMeta = (attr: "name" | "property", key: string, value: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = value;
};

/** Sets per-page title, description, canonical, Open Graph and JSON-LD. */
export const usePageMeta = ({ title, description, path, jsonLd = [] }: Meta) => {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    document.head.querySelectorAll("script[data-page-ld]").forEach((s) => s.remove());
    jsonLd.forEach((data) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.dataset.pageLd = "true";
      s.textContent = JSON.stringify(data);
      document.head.appendChild(s);
    });
  }, [title, description, path, jsonLd]);
};

export const breadcrumb = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: `${SITE_URL}${it.path}`,
  })),
});
