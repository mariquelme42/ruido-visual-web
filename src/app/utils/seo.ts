type SeoOptions = {
  title: string;
  description: string;
  path?: string;
  favicon?: string;
  type?: string;
  siteName?: string;
};

const setMeta = (selector: string, attribute: "content" | "href", value: string) => {
  const element = document.head.querySelector(selector);

  if (element) {
    element.setAttribute(attribute, value);
  }
};

export function setPageSeo({
  title,
  description,
  path,
  favicon,
  type = "website",
  siteName = title,
}: SeoOptions) {
  document.title = title;

  const url = path ? new URL(path, window.location.origin).toString() : window.location.href;

  setMeta("meta[name='description']", "content", description);
  setMeta("meta[property='og:title']", "content", title);
  setMeta("meta[property='og:description']", "content", description);
  setMeta("meta[property='og:type']", "content", type);
  setMeta("meta[property='og:url']", "content", url);
  setMeta("meta[property='og:site_name']", "content", siteName);
  setMeta("meta[name='twitter:title']", "content", title);
  setMeta("meta[name='twitter:description']", "content", description);
  setMeta("link[rel='canonical']", "href", url);

  if (favicon) {
    setMeta("link[rel='icon']", "href", favicon);
  }
}
