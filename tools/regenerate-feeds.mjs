import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const ROOT_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SITE = {
  baseUrl: "https://sagarbiswas-multihat.github.io",
  title: "Sagar Biswas Portfolio Feed",
  subtitle:
    "Software developer portfolio, programming notebooks, and cybersecurity blog by Sagar Biswas.",
  blogTitle: "Sagar Biswas Blog",
  blogSubtitle:
    "Security awareness posts and software engineering reflections by Sagar Biswas.",
  authorName: "Sagar Biswas",
  authorEmail: "sagarbiswas.multihat@gmail.com",
  language: "en",
  githubUrl: "https://github.com/SagarBiswas-MultiHAT",
  profileImage: "https://sagarbiswas-multihat.github.io/assets/profile-720.jpg",
  defaultOgImage: "https://sagarbiswas-multihat.github.io/assets/og-preview.svg",
  copyright: "Copyright 2026 Sagar Biswas. All rights reserved.",
  notebookUpdatedAt: "2026-03-16T00:00:00Z",
};

const FILES = {
  atom: "feed.xml",
  imageSitemap: "image-sitemap.xml",
  llms: "llms.txt",
  robots: "robots.txt",
  rss: "rss.xml",
  sitemap: "sitemap.xml",
};

const LOCAL_PAGE_CONFIG = [
  {
    atomCategories: ["Portfolio", "Software Development"],
    changefreq: "weekly",
    extraImages: [
      {
        caption: "Portrait of Sagar Biswas",
        title: "Sagar Biswas portrait",
        url: `${SITE.baseUrl}/assets/profile-720.jpg`,
      },
    ],
    label: "Portfolio Home",
    priority: "1.0",
    relPath: "index.html",
    route: "/",
  },
  {
    atomCategories: ["About", "Portfolio"],
    changefreq: "monthly",
    extraImages: [
      {
        caption: "Portrait of Sagar Biswas",
        title: "Sagar Biswas portrait",
        url: `${SITE.baseUrl}/assets/profile-720.jpg`,
      },
    ],
    label: "About",
    priority: "0.8",
    relPath: "about/index.html",
    route: "/about/",
  },
  {
    atomCategories: ["Capabilities", "Skills"],
    changefreq: "monthly",
    label: "Capabilities",
    priority: "0.8",
    relPath: "capabilities/index.html",
    route: "/capabilities/",
  },
  {
    atomCategories: ["Certifications", "Career"],
    changefreq: "monthly",
    label: "Certifications",
    priority: "0.8",
    relPath: "certifications/index.html",
    route: "/certifications/",
  },
  {
    atomCategories: ["Cybersecurity", "Learning"],
    changefreq: "monthly",
    label: "Cybersecurity",
    priority: "0.8",
    relPath: "cybersecurity/index.html",
    route: "/cybersecurity/",
  },
  {
    atomCategories: ["Research", "Notebooks"],
    changefreq: "weekly",
    label: "Notebooks Hub",
    priority: "0.9",
    relPath: "notebooks/index.html",
    route: "/notebooks/",
  },
  {
    atomCategories: ["Projects", "Software Development"],
    changefreq: "monthly",
    label: "Projects",
    priority: "0.8",
    relPath: "projects/index.html",
    route: "/projects/",
  },
  {
    atomCategories: ["Blog", "Cybersecurity"],
    changefreq: "weekly",
    label: "Blog",
    priority: "0.8",
    relPath: "blogs/index.html",
    route: "/blogs/",
  },
  {
    atomCategories: ["Resume", "Career"],
    changefreq: "monthly",
    extraImages: [
      {
        caption: "Resume preview for Sagar Biswas",
        title: "Sagar Biswas resume preview",
        url: `${SITE.baseUrl}/assets/resume/resume-1200.jpg`,
      },
    ],
    label: "Resume",
    priority: "0.7",
    relPath: "resume.html",
    route: "/resume.html",
  },
];

const NOTEBOOK_SITE_CONFIG = [
  {
    categories: ["Notebook", "Bash Scripting"],
    changefreq: "weekly",
    description:
      "Comprehensive bash scripting tutorial and shell script examples covering Linux command line essentials for beginners and intermediate users.",
    label: "Bash Scripting Tutorial",
    priority: "0.9",
    title: "Bash Scripting Tutorial and Shell Script Examples",
    url: `${SITE.baseUrl}/BashScript-Notebooks/`,
  },
  {
    categories: ["Notebook", "C Programming"],
    changefreq: "weekly",
    description:
      "C programming tutorial and C++ notebook covering headers, projects, tricks, and practical examples for students and beginners.",
    label: "C and C++ Programming",
    priority: "0.9",
    title: "C and C++ Programming Notebook",
    url: `${SITE.baseUrl}/C_Cpp-Notebooks/`,
  },
  {
    categories: ["Notebook", "Cybersecurity"],
    changefreq: "weekly",
    description:
      "Cybersecurity notes and ethical hacking guide covering CTF writeups, network security, and practical defense techniques.",
    label: "Cybersecurity Notes",
    priority: "0.9",
    title: "Cybersecurity Notes and Ethical Hacking Guide",
    url: `${SITE.baseUrl}/Cybersecurity-Notebooks/`,
  },
  {
    categories: ["Notebook", "Git"],
    changefreq: "weekly",
    description:
      "Complete Git commands cheat sheet and GitHub workflow guide for beginners covering branching, merging, pull requests, and collaboration.",
    label: "Git and GitHub Guide",
    priority: "0.9",
    title: "Git Commands Cheat Sheet and GitHub Workflow Guide",
    url: `${SITE.baseUrl}/GIT_and_GitHub-Notebooks/`,
  },
  {
    categories: ["Notebook", "JavaScript"],
    changefreq: "weekly",
    description:
      "JavaScript tutorial and vanilla JS examples notebook covering core language features, DOM manipulation, and practical programming patterns.",
    label: "JavaScript Tutorial",
    priority: "0.9",
    title: "JavaScript Tutorial and Vanilla JS Examples",
    url: `${SITE.baseUrl}/JavaScript-Notebooks/`,
  },
  {
    categories: ["Notebook", "React"],
    changefreq: "weekly",
    description:
      "React tutorial and hooks guide with practical project examples covering components, state management, and modern React patterns for beginners.",
    label: "React Tutorial",
    priority: "0.9",
    title: "React Tutorial and React Hooks Guide",
    url: `${SITE.baseUrl}/React-Notebooks/`,
  },
  {
    categories: ["Notebook", "PHP"],
    changefreq: "weekly",
    description:
      "PHP programming tutorial and example notebook covering server-side scripting, forms, databases, and practical PHP development patterns.",
    label: "PHP Tutorial",
    priority: "0.9",
    title: "PHP Tutorial and PHP Examples Notebook",
    url: `${SITE.baseUrl}/PHP-Notebooks/`,
  },
  {
    categories: ["Notebook", "Python"],
    changefreq: "weekly",
    description:
      "Python programming tutorial and notebook covering core syntax, data structures, scripting, and practical Python examples for beginners.",
    label: "Python Tutorial",
    priority: "0.9",
    title: "Python Tutorial and Python Examples Notebook",
    url: `${SITE.baseUrl}/Python-Notebooks/`,
  },
  {
    categories: ["Notebook", "NestJS"],
    changefreq: "weekly",
    description:
      "NestJS tutorial and project examples notebook covering modules, controllers, services, and scalable Node.js backend patterns.",
    label: "NestJS Tutorial",
    priority: "0.9",
    title: "NestJS Tutorial and NestJS Project Examples",
    url: `${SITE.baseUrl}/NestJS-Notebooks/`,
  },
].map((entry) => ({
  ...entry,
  updatedAt: new Date(SITE.notebookUpdatedAt),
}));

const BLOG_OVERRIDES = {
  "blogs/vibe-coding-tech-debt.html": {
    description:
      "AI-assisted speed is real, but wrong decisions create compounding complexity. A breakdown of why simple solutions matter more than fast ones.",
    title: "Vibe Coding: Tech Debt Builds Silently",
  },
};

const HTML_ENTITY_MAP = {
  amp: "&",
  apos: "'",
  bull: "•",
  copy: "©",
  gt: ">",
  hellip: "…",
  laquo: "«",
  ldquo: "“",
  lsquo: "‘",
  lt: "<",
  mdash: "—",
  middot: "·",
  nbsp: " ",
  ndash: "–",
  quot: '"',
  raquo: "»",
  rdquo: "”",
  rsquo: "’",
};

function decodeHtmlEntities(value = "") {
  return value.replace(/&(#x?[0-9a-f]+|[a-z][a-z0-9]+);/gi, (match, entity) => {
    if (entity[0] === "#") {
      const isHex = entity[1]?.toLowerCase() === "x";
      const numericValue = Number.parseInt(entity.slice(isHex ? 2 : 1), isHex ? 16 : 10);
      return Number.isFinite(numericValue) ? String.fromCodePoint(numericValue) : match;
    }

    return HTML_ENTITY_MAP[entity.toLowerCase()] ?? match;
  });
}

function normalizeText(value = "") {
  return decodeHtmlEntities(value).replace(/\s+/g, " ").trim();
}

function xmlEscape(value = "") {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function formatDateOnly(dateValue) {
  return toDate(dateValue).toISOString().slice(0, 10);
}

function formatAtomDate(dateValue) {
  return toDate(dateValue).toISOString().replace(/\.\d{3}Z$/, "Z");
}

function formatRssDate(dateValue) {
  return toDate(dateValue).toUTCString();
}

function toDate(value, label = "date") {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) {
    throw new Error(`Invalid ${label}: ${value}`);
  }
  return date;
}

function relativeRootPath(...segments) {
  return path.join(ROOT_DIR, ...segments);
}

function readTextFile(relPath) {
  return fs.readFileSync(relativeRootPath(relPath), "utf8");
}

function findTags(html, tagName) {
  return Array.from(html.matchAll(new RegExp(`<${tagName}\\b[^>]*>`, "gi")), (match) => match[0]);
}

function parseAttributes(tag) {
  const body = tag.replace(/^<\w+\s*/u, "").replace(/\s*\/?>$/u, "");
  const attributes = {};
  const attributePattern =
    /([^\s=\/]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/gu;

  for (const match of body.matchAll(attributePattern)) {
    const name = match[1].toLowerCase();
    const rawValue = match[2] ?? match[3] ?? match[4] ?? "";
    attributes[name] = normalizeText(rawValue);
  }

  return attributes;
}

function getMetaTags(html) {
  return findTags(html, "meta").map(parseAttributes);
}

function getLinkTags(html) {
  return findTags(html, "link").map(parseAttributes);
}

function extractTitle(html) {
  const match = html.match(/<title[^>]*>([\s\S]*?)<\/title>/iu);
  return match ? normalizeText(match[1]) : null;
}

function extractMetaContent(metaTags, attrName, attrValue) {
  const loweredName = attrName.toLowerCase();
  const loweredValue = attrValue.toLowerCase();
  const tag = metaTags.find((item) => (item[loweredName] ?? "").toLowerCase() === loweredValue);
  return tag?.content ? normalizeText(tag.content) : null;
}

function extractMetaContents(metaTags, attrName, attrValue) {
  const loweredName = attrName.toLowerCase();
  const loweredValue = attrValue.toLowerCase();

  return metaTags
    .filter((item) => (item[loweredName] ?? "").toLowerCase() === loweredValue)
    .map((item) => normalizeText(item.content))
    .filter(Boolean);
}

function extractLinkHref(linkTags, relValue) {
  const loweredRel = relValue.toLowerCase();
  const tag = linkTags.find((item) => {
    const rel = (item.rel ?? "").toLowerCase().split(/\s+/u);
    return rel.includes(loweredRel);
  });

  return tag?.href ? normalizeText(tag.href) : null;
}

function toAbsoluteUrl(value, baseUrl = SITE.baseUrl) {
  return new URL(value, baseUrl).toString();
}

function ensureWithinSiteBase(url, label) {
  const expectedOrigin = new URL(SITE.baseUrl).origin;
  const parsed = new URL(url);
  if (parsed.origin !== expectedOrigin) {
    throw new Error(`${label} must stay within ${SITE.baseUrl}: ${url}`);
  }
}

function toLocalFilePathFromSiteUrl(url) {
  const parsed = new URL(url);
  const siteOrigin = new URL(SITE.baseUrl).origin;
  if (parsed.origin !== siteOrigin) {
    return null;
  }

  return relativeRootPath(...parsed.pathname.replace(/^\/+/u, "").split("/"));
}

function ensureLocalAssetExists(url, label) {
  const localPath = toLocalFilePathFromSiteUrl(url);
  if (!localPath) {
    return;
  }

  if (!fs.existsSync(localPath)) {
    throw new Error(`${label} points to a missing local asset: ${url}`);
  }
}

function hasWorkingTreeChanges(relPath) {
  try {
    const status = execFileSync("git", ["status", "--porcelain", "--", relPath], {
      cwd: ROOT_DIR,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    return status.length > 0;
  } catch {
    return true;
  }
}

function getGitCommitDate(relPath) {
  try {
    const output = execFileSync("git", ["log", "-1", "--format=%cI", "--", relPath], {
      cwd: ROOT_DIR,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();

    return output ? toDate(output, `git commit date for ${relPath}`) : null;
  } catch {
    return null;
  }
}

function getTrackedLastModified(relPath) {
  const filePath = relativeRootPath(relPath);
  const fileStats = fs.statSync(filePath);

  if (hasWorkingTreeChanges(relPath)) {
    return fileStats.mtime;
  }

  return getGitCommitDate(relPath) ?? fileStats.mtime;
}

function uniqueValues(values) {
  return Array.from(new Set(values.filter(Boolean)));
}

function sortByNewest(entries, selector) {
  return [...entries].sort((left, right) => {
    const leftTime = toDate(selector(left)).getTime();
    const rightTime = toDate(selector(right)).getTime();
    if (leftTime !== rightTime) {
      return rightTime - leftTime;
    }
    return left.title.localeCompare(right.title);
  });
}

function buildImageEntries(primaryImage, extraImages = []) {
  const images = [];

  if (primaryImage?.url) {
    images.push({
      caption: primaryImage.caption ?? primaryImage.title,
      title: primaryImage.title,
      url: primaryImage.url,
    });
  }

  for (const image of extraImages) {
    images.push({
      caption: image.caption ?? image.title,
      title: image.title,
      url: image.url,
    });
  }

  const deduped = [];
  const seen = new Set();
  for (const image of images) {
    if (!image.url || seen.has(image.url)) {
      continue;
    }
    seen.add(image.url);
    deduped.push(image);
  }

  return deduped;
}

function validateUniqueUrls(entries, label) {
  const seen = new Set();
  for (const entry of entries) {
    if (seen.has(entry.url)) {
      throw new Error(`Duplicate ${label} URL detected: ${entry.url}`);
    }
    seen.add(entry.url);
  }
}

function loadLocalPage(config) {
  const html = readTextFile(config.relPath);
  const metaTags = getMetaTags(html);
  const linkTags = getLinkTags(html);
  const expectedUrl = toAbsoluteUrl(config.route, SITE.baseUrl);
  const url = toAbsoluteUrl(extractLinkHref(linkTags, "canonical") || config.route, expectedUrl);

  if (url !== expectedUrl) {
    throw new Error(`Canonical URL mismatch in ${config.relPath}: expected ${expectedUrl}, received ${url}`);
  }

  const title =
    extractMetaContent(metaTags, "property", "og:title") ||
    extractTitle(html) ||
    config.label;
  const description =
    extractMetaContent(metaTags, "name", "description") ||
    extractMetaContent(metaTags, "property", "og:description");
  if (!description) {
    throw new Error(`Missing description metadata in ${config.relPath}`);
  }

  const ogImageUrl = toAbsoluteUrl(
    extractMetaContent(metaTags, "property", "og:image") || SITE.defaultOgImage,
    url
  );
  const ogImageAlt =
    extractMetaContent(metaTags, "property", "og:image:alt") || title;

  ensureWithinSiteBase(url, `Canonical URL for ${config.relPath}`);
  ensureWithinSiteBase(ogImageUrl, `OG image URL for ${config.relPath}`);
  ensureLocalAssetExists(ogImageUrl, `OG image in ${config.relPath}`);

  const primaryImage = {
    caption: ogImageAlt,
    title: ogImageAlt,
    url: ogImageUrl,
  };

  for (const image of config.extraImages ?? []) {
    ensureWithinSiteBase(image.url, `Extra image URL for ${config.relPath}`);
    ensureLocalAssetExists(image.url, `Extra image in ${config.relPath}`);
  }

  return {
    atomCategories: config.atomCategories,
    changefreq: config.changefreq,
    description,
    images: buildImageEntries(primaryImage, config.extraImages),
    label: config.label,
    priority: config.priority,
    relPath: config.relPath,
    title,
    updatedAt: getTrackedLastModified(config.relPath),
    url,
  };
}

function loadBlogPosts() {
  const blogDir = relativeRootPath("blogs");
  const filenames = fs
    .readdirSync(blogDir)
    .filter((name) => name.endsWith(".html") && name !== "index.html")
    .sort();

  return filenames
    .map((name) => {
      const relPath = path.posix.join("blogs", name);
      const html = readTextFile(relPath);
      const metaTags = getMetaTags(html);
      const linkTags = getLinkTags(html);
      const url = toAbsoluteUrl(
        extractLinkHref(linkTags, "canonical") || `/blogs/${name}`,
        `${SITE.baseUrl}/blogs/`
      );
      const title =
        extractMetaContent(metaTags, "property", "og:title") ||
        extractTitle(html) ||
        name.replace(/\.html$/u, "");
      const description =
        extractMetaContent(metaTags, "name", "description") ||
        extractMetaContent(metaTags, "property", "og:description");
      const publishedValue = extractMetaContent(
        metaTags,
        "property",
        "article:published_time"
      );
      const modifiedValue =
        extractMetaContent(metaTags, "property", "article:modified_time") ||
        publishedValue;
      const section =
        extractMetaContent(metaTags, "property", "article:section") || "Blog";
      const tags = extractMetaContents(metaTags, "property", "article:tag");
      const imageUrl = toAbsoluteUrl(
        extractMetaContent(metaTags, "property", "og:image") || SITE.defaultOgImage,
        url
      );
      const imageAlt =
        extractMetaContent(metaTags, "property", "og:image:alt") || title;

      if (!description) {
        throw new Error(`Missing description metadata in ${relPath}`);
      }

      if (!publishedValue) {
        throw new Error(`Missing article:published_time in ${relPath}`);
      }

      ensureWithinSiteBase(url, `Canonical URL for ${relPath}`);
      ensureWithinSiteBase(imageUrl, `OG image URL for ${relPath}`);
      ensureLocalAssetExists(imageUrl, `OG image in ${relPath}`);

      const overrides = BLOG_OVERRIDES[relPath] ?? {};

      return {
        categories: uniqueValues([section, ...tags]),
        description: overrides.description || description,
        image: {
          caption: imageAlt,
          title: imageAlt,
          url: imageUrl,
        },
        publishedAt: toDate(publishedValue, `published date for ${relPath}`),
        relPath,
        title: overrides.title || title,
        updatedAt: toDate(modifiedValue, `modified date for ${relPath}`),
        url,
      };
    })
    .sort((left, right) => right.publishedAt.getTime() - left.publishedAt.getTime());
}

function buildRss(posts) {
  const latestPost = sortByNewest(posts, (post) => post.updatedAt)[0];
  const items = posts
    .map((post) => {
      const categories = post.categories
        .map((category) => `      <category>${xmlEscape(category)}</category>`)
        .join("\n");

      return [
        "    <item>",
        `      <title>${xmlEscape(post.title)}</title>`,
        `      <link>${xmlEscape(post.url)}</link>`,
        `      <guid isPermaLink="true">${xmlEscape(post.url)}</guid>`,
        `      <pubDate>${formatRssDate(post.publishedAt)}</pubDate>`,
        `      <author>${xmlEscape(`${SITE.authorEmail} (${SITE.authorName})`)}</author>`,
        categories,
        `      <description>${xmlEscape(post.description)}</description>`,
        "    </item>",
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    "  <channel>",
    `    <title>${xmlEscape(SITE.blogTitle)}</title>`,
    `    <link>${xmlEscape(`${SITE.baseUrl}/blogs/`)}</link>`,
    `    <description>${xmlEscape(SITE.blogSubtitle)}</description>`,
    `    <language>${xmlEscape(SITE.language)}</language>`,
    `    <lastBuildDate>${formatRssDate(latestPost.updatedAt)}</lastBuildDate>`,
    `    <managingEditor>${xmlEscape(`${SITE.authorEmail} (${SITE.authorName})`)}</managingEditor>`,
    `    <webMaster>${xmlEscape(`${SITE.authorEmail} (${SITE.authorName})`)}</webMaster>`,
    `    <copyright>${xmlEscape(SITE.copyright)}</copyright>`,
    "    <ttl>1440</ttl>",
    "    <docs>https://www.rssboard.org/rss-specification</docs>",
    `    <generator>${xmlEscape("tools/regenerate-feeds.mjs")}</generator>`,
    `    <atom:link href="${xmlEscape(`${SITE.baseUrl}/${FILES.rss}`)}" rel="self" type="application/rss+xml" />`,
    "    <image>",
    `      <url>${xmlEscape(SITE.profileImage)}</url>`,
    `      <title>${xmlEscape(SITE.blogTitle)}</title>`,
    `      <link>${xmlEscape(`${SITE.baseUrl}/blogs/`)}</link>`,
    "      <width>144</width>",
    "      <height>144</height>",
    `      <description>${xmlEscape("Sagar Biswas - Software Developer and Cybersecurity Enthusiast")}</description>`,
    "    </image>",
    "",
    items,
    "  </channel>",
    "</rss>",
  ].join("\n");
}

function buildAtom(localPages, notebookSites, posts) {
  const entries = sortByNewest(
    [
      ...localPages.map((page) => ({
        categories: page.atomCategories,
        description: page.description,
        publishedAt: null,
        title: page.title,
        updatedAt: page.updatedAt,
        url: page.url,
      })),
      ...notebookSites.map((site) => ({
        categories: site.categories,
        description: site.description,
        publishedAt: null,
        title: site.title,
        updatedAt: site.updatedAt,
        url: site.url,
      })),
      ...posts.map((post) => ({
        categories: post.categories,
        description: post.description,
        publishedAt: post.publishedAt,
        title: post.title,
        updatedAt: post.updatedAt,
        url: post.url,
      })),
    ],
    (entry) => entry.updatedAt
  );

  const updatedAt = entries[0]?.updatedAt ?? new Date();
  const xmlEntries = entries
    .map((entry) => {
      const categories = entry.categories
        .map((category) => `    <category term="${xmlEscape(category)}" />`)
        .join("\n");
      const published = entry.publishedAt
        ? `    <published>${formatAtomDate(entry.publishedAt)}</published>`
        : null;

      return [
        "  <entry>",
        `    <title>${xmlEscape(entry.title)}</title>`,
        `    <id>${xmlEscape(entry.url)}</id>`,
        `    <link href="${xmlEscape(entry.url)}" rel="alternate" type="text/html" />`,
        `    <updated>${formatAtomDate(entry.updatedAt)}</updated>`,
        published,
        categories,
        `    <summary>${xmlEscape(entry.description)}</summary>`,
        "  </entry>",
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    `<feed xmlns="http://www.w3.org/2005/Atom" xml:lang="${xmlEscape(SITE.language)}">`,
    `  <title>${xmlEscape(SITE.title)}</title>`,
    `  <subtitle>${xmlEscape(SITE.subtitle)}</subtitle>`,
    `  <id>${xmlEscape(`${SITE.baseUrl}/${FILES.atom}`)}</id>`,
    `  <updated>${formatAtomDate(updatedAt)}</updated>`,
    `  <link href="${xmlEscape(`${SITE.baseUrl}/${FILES.atom}`)}" rel="self" type="application/atom+xml" />`,
    `  <link href="${xmlEscape(`${SITE.baseUrl}/`)}" rel="alternate" type="text/html" />`,
    `  <rights>${xmlEscape(SITE.copyright)}</rights>`,
    `  <generator>${xmlEscape("tools/regenerate-feeds.mjs")}</generator>`,
    `  <icon>${xmlEscape(SITE.profileImage)}</icon>`,
    `  <logo>${xmlEscape(SITE.defaultOgImage)}</logo>`,
    "  <author>",
    `    <name>${xmlEscape(SITE.authorName)}</name>`,
    `    <email>${xmlEscape(SITE.authorEmail)}</email>`,
    `    <uri>${xmlEscape(`${SITE.baseUrl}/`)}</uri>`,
    "  </author>",
    "",
    xmlEntries,
    "</feed>",
  ].join("\n");
}

function buildSitemap(localPages, notebookSites, posts) {
  const entries = [
    ...localPages.map((page) => ({
      changefreq: page.changefreq,
      lastmod: formatDateOnly(page.updatedAt),
      priority: page.priority,
      url: page.url,
    })),
    ...notebookSites.map((site) => ({
      changefreq: site.changefreq,
      lastmod: formatDateOnly(site.updatedAt),
      priority: site.priority,
      url: site.url,
    })),
    ...posts.map((post) => ({
      changefreq: "monthly",
      lastmod: formatDateOnly(post.updatedAt),
      priority: "0.9",
      url: post.url,
    })),
  ];

  validateUniqueUrls(entries, "sitemap");

  const xmlEntries = entries
    .map(
      (entry) => [
        "  <url>",
        `    <loc>${xmlEscape(entry.url)}</loc>`,
        `    <lastmod>${entry.lastmod}</lastmod>`,
        `    <changefreq>${entry.changefreq}</changefreq>`,
        `    <priority>${entry.priority}</priority>`,
        "  </url>",
      ].join("\n")
    )
    .join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    xmlEntries,
    "</urlset>",
  ].join("\n");
}

function buildImageSitemap(localPages, posts) {
  const entries = [
    ...localPages
      .filter((page) => page.images.length > 0)
      .map((page) => ({
        images: page.images,
        url: page.url,
      })),
    ...posts.map((post) => ({
      images: [post.image],
      url: post.url,
    })),
  ];

  validateUniqueUrls(entries, "image sitemap");

  const xmlEntries = entries
    .map((entry) => {
      const images = entry.images
        .map((image) =>
          [
            "    <image:image>",
            `      <image:loc>${xmlEscape(image.url)}</image:loc>`,
            `      <image:title>${xmlEscape(image.title)}</image:title>`,
            `      <image:caption>${xmlEscape(image.caption)}</image:caption>`,
            "    </image:image>",
          ].join("\n")
        )
        .join("\n");

      return ["  <url>", `    <loc>${xmlEscape(entry.url)}</loc>`, images, "  </url>"].join("\n");
    })
    .join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    xmlEntries,
    "</urlset>",
  ].join("\n");
}

function buildRobotsTxt() {
  return [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${SITE.baseUrl}/${FILES.sitemap}`,
    `Sitemap: ${SITE.baseUrl}/${FILES.imageSitemap}`,
  ].join("\n");
}

function buildLlmsTxt(localPages, notebookSites, posts) {
  const primaryPages = localPages
    .map((page) => `- ${page.label}: ${page.url}`)
    .join("\n");
  const notebookPages = notebookSites
    .map((site) => `- ${site.label}: ${site.url}`)
    .join("\n");
  const blogPosts = posts.map((post) => `- ${post.title}: ${post.url}`).join("\n");

  return [
    "# Sagar Biswas - Software Developer Portfolio",
    "",
    "> Personal portfolio and education hub by Sagar Biswas.",
    "> Focus: software development, cybersecurity awareness, programming notebooks, and technical blogging.",
    "> Languages: English, Bengali",
    "",
    `Site: ${SITE.baseUrl}/`,
    `Contact: ${SITE.authorEmail}`,
    `GitHub: ${SITE.githubUrl}`,
    "Crawl: Allowed",
    "Preferred Source: Canonical HTML pages over feed summaries whenever both are available.",
    "",
    `Sitemap: ${SITE.baseUrl}/${FILES.sitemap}`,
    `Image-Sitemap: ${SITE.baseUrl}/${FILES.imageSitemap}`,
    `Atom-Feed: ${SITE.baseUrl}/${FILES.atom}`,
    `RSS-Feed: ${SITE.baseUrl}/${FILES.rss}`,
    "",
    "## Primary Pages",
    primaryPages,
    "",
    "## Programming Notebooks",
    notebookPages,
    "",
    "## Blog Posts",
    blogPosts,
  ].join("\n");
}

function writeFileIfChanged(relPath, content) {
  const filePath = relativeRootPath(relPath);
  const normalizedContent = content.endsWith("\n") ? content : `${content}\n`;
  const currentContent = fs.existsSync(filePath) ? fs.readFileSync(filePath, "utf8") : null;

  if (currentContent === normalizedContent) {
    console.log(`Unchanged ${relPath}`);
    return false;
  }

  const tempPath = `${filePath}.tmp`;
  fs.writeFileSync(tempPath, normalizedContent, "utf8");
  fs.renameSync(tempPath, filePath);
  console.log(`Updated ${relPath}`);
  return true;
}

function main() {
  const localPages = LOCAL_PAGE_CONFIG.map(loadLocalPage);
  const blogPosts = loadBlogPosts();

  validateUniqueUrls(localPages, "local page");
  validateUniqueUrls(blogPosts, "blog post");
  validateUniqueUrls(NOTEBOOK_SITE_CONFIG, "notebook site");

  const outputs = [
    [FILES.atom, buildAtom(localPages, NOTEBOOK_SITE_CONFIG, blogPosts)],
    [FILES.rss, buildRss(blogPosts)],
    [FILES.sitemap, buildSitemap(localPages, NOTEBOOK_SITE_CONFIG, blogPosts)],
    [FILES.imageSitemap, buildImageSitemap(localPages, blogPosts)],
    [FILES.robots, buildRobotsTxt()],
    [FILES.llms, buildLlmsTxt(localPages, NOTEBOOK_SITE_CONFIG, blogPosts)],
  ];

  let changedFiles = 0;
  for (const [relPath, content] of outputs) {
    if (writeFileIfChanged(relPath, content)) {
      changedFiles += 1;
    }
  }

  console.log(
    `Generated ${outputs.length} SEO/feed artifacts (${changedFiles} changed, ${blogPosts.length} blog posts, ${localPages.length} local pages, ${NOTEBOOK_SITE_CONFIG.length} notebook links).`
  );
}

try {
  main();
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
}
