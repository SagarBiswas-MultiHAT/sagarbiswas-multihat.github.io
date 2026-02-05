import fs from 'fs';
import path from 'path';

const SITE_BASE = 'https://sagarbiswas-multihat.github.io';
const BLOG_DIR = path.join(process.cwd(), 'blog');
const ROOT_DIR = process.cwd();
const RSS_FILE = path.join(ROOT_DIR, 'rss.xml');
const SITEMAP_FILE = path.join(ROOT_DIR, 'sitemap.xml');
const IMAGE_SITEMAP_FILE = path.join(ROOT_DIR, 'image-sitemap.xml');

const rootImages = [
    `${SITE_BASE}/assets/og-preview.svg`,
    `${SITE_BASE}/assets/profile-480.jpg`,
    `${SITE_BASE}/assets/profile-360.jpg`,
];

const blogHomeImages = [`${SITE_BASE}/assets/og-preview.svg`];

const staticSitemapTargets = [
    { loc: `${SITE_BASE}/`, path: 'index.html', changefreq: 'weekly', priority: '1.0' },
    { loc: `${SITE_BASE}/blog/`, path: 'blog/index.html', changefreq: 'weekly', priority: '0.8' },
    { loc: `${SITE_BASE}/resume.html`, path: 'resume.html', changefreq: 'monthly', priority: '0.7' },
];

function escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&');
}

function escapeForCdata(value = '') {
    return `<![CDATA[${value.replace(/]]>/g, ']]]]><![CDATA[>')}]]>`;
}

function formatIsoDate(date) {
    return date.toISOString().split('T')[0];
}

function extractTagContent(html, tagName) {
    const pattern = new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`, 'i');
    const match = html.match(pattern);
    return match ? match[1].trim() : null;
}

function extractMeta(html, attrName, attrValue) {
    const attribute = `${attrName}="${escapeRegExp(attrValue)}"`;
    const patterns = [
        new RegExp(`<meta[^>]*${attribute}[^>]*content="([^"\\r\\n]+)"[^>]*>`, 'i'),
        new RegExp(`<meta[^>]*content="([^"\\r\\n]+)"[^>]*${attribute}[^>]*>`, 'i'),
    ];
    for (const pattern of patterns) {
        const match = html.match(pattern);
        if (match && match[1]) {
            return match[1].trim();
        }
    }
    return null;
}

function extractLinkHref(html, relValue) {
    const pattern = new RegExp(`<link[^>]*rel="${escapeRegExp(relValue)}"[^>]*href="([^"\\r\\n]+)"[^>]*>`, 'i');
    const match = html.match(pattern);
    return match ? match[1].trim() : null;
}

function fileLastModified(relPath) {
    try {
        const absolute = path.join(ROOT_DIR, relPath);
        const stats = fs.statSync(absolute);
        return formatIsoDate(stats.mtime);
    } catch (error) {
        return null;
    }
}

function parseBlogPosts() {
    const files = fs
        .readdirSync(BLOG_DIR)
        .filter((name) => name.endsWith('.html') && name !== 'index.html')
        .sort();

    return files
        .map((name) => {
            const filePath = path.join(BLOG_DIR, name);
            const html = fs.readFileSync(filePath, 'utf8');
            const canonical = extractLinkHref(html, 'canonical');
            const url = canonical || `${SITE_BASE}/blog/${name}`;
            const title = extractTagContent(html, 'title') || 'Untitled';
            const description =
                extractMeta(html, 'name', 'description') ||
                extractMeta(html, 'property', 'og:description') ||
                'Security awareness post from Sagar Biswas.';
            const published = extractMeta(html, 'property', 'article:published_time');
            if (!published) {
                console.warn(`→ Skipping ${name}: missing published metadata`);
                return null;
            }
            const publishedDate = new Date(published);
            if (Number.isNaN(publishedDate.getTime())) {
                console.warn(`→ Skipping ${name}: invalid published date`);
                return null;
            }
            const modified = extractMeta(html, 'property', 'article:modified_time') || published;
            const modifiedDate = new Date(modified);
            const image =
                extractMeta(html, 'property', 'og:image') ||
                extractMeta(html, 'property', 'twitter:image') ||
                `${SITE_BASE}/assets/og-preview.svg`;
            const imageAlt = extractMeta(html, 'property', 'og:image:alt') || title;

            return {
                url,
                title,
                description,
                publishedDate,
                modifiedDate: Number.isNaN(modifiedDate.getTime()) ? publishedDate : modifiedDate,
                image,
                imageAlt,
            };
        })
        .filter(Boolean)
        .sort((a, b) => b.publishedDate - a.publishedDate);
}

function buildRss(posts) {
    const lastBuildDate = new Date().toUTCString();
    const items = posts
        .map((post) => {
            return `    <item>\n      <title>${escapeForCdata(post.title)}</title>\n      <link>${post.url}</link>\n      <guid isPermaLink="true">${post.url}</guid>\n      <pubDate>${post.publishedDate.toUTCString()}</pubDate>\n      <description>${escapeForCdata(post.description)}</description>\n    </item>`;
        })
        .join('\n');

    return `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n  <channel>\n    <title>Sagar Biswas Blog</title>\n    <link>${SITE_BASE}/blog/</link>\n    <description>Security awareness posts and engineering reflections by Sagar Biswas.</description>\n    <language>en</language>\n    <lastBuildDate>${lastBuildDate}</lastBuildDate>\n${items}\n  </channel>\n</rss>`;
}

function buildSitemap(posts) {
    const staticSections = staticSitemapTargets.map((entry) => ({
        ...entry,
        lastmod: fileLastModified(entry.path) || formatIsoDate(new Date()),
    }));

    const postEntries = posts.map((post) => ({
        loc: post.url,
        lastmod: formatIsoDate(post.modifiedDate),
        changefreq: 'monthly',
        priority: '0.9',
    }));

    const allEntries = staticSections.concat(postEntries);
    const xmlEntries = allEntries
        .map((entry) => {
            return `  <url>\n    <loc>${entry.loc}</loc>\n    <lastmod>${entry.lastmod}</lastmod>\n    <changefreq>${entry.changefreq}</changefreq>\n    <priority>${entry.priority}</priority>\n  </url>`;
        })
        .join('\n');

    return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${xmlEntries}\n</urlset>`;
}

function buildImageSitemap(posts) {
    const entries = [
        { loc: `${SITE_BASE}/`, images: rootImages },
        { loc: `${SITE_BASE}/blog/`, images: blogHomeImages },
        ...posts.map((post) => ({ loc: post.url, images: [post.image] })),
    ];

    const xmlEntries = entries
        .map((entry) => {
            const images = entry.images
                .map(
                    (imageUrl) => `    <image:image>\n      <image:loc>${imageUrl}</image:loc>\n    </image:image>`
                )
                .join('\n');
            return `  <url>\n    <loc>${entry.loc}</loc>\n${images}\n  </url>`;
        })
        .join('\n');

    return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${xmlEntries}\n</urlset>`;
}

function writeFile(filePath, content) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Written ${path.relative(ROOT_DIR, filePath)}`);
}

function main() {
    const posts = parseBlogPosts();
    if (!posts.length) {
        console.warn('No blog posts found. Aborting feed generation.');
        return;
    }

    writeFile(RSS_FILE, buildRss(posts));
    writeFile(SITEMAP_FILE, buildSitemap(posts));
    writeFile(IMAGE_SITEMAP_FILE, buildImageSitemap(posts));
}

main();
