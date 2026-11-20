import { SEO_CONFIG } from '@/lib/seo/config';
import { BLOG_POSTS } from '@/data/blog';

export async function GET() {
  const baseUrl = SEO_CONFIG.siteUrl;

  const rssItems = BLOG_POSTS.map((post) => {
    const postUrl = `${baseUrl}/blog/${post.slug}`;
    const pubDate = new Date(post.date).toUTCString();
    return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${pubDate}</pubDate>
      <author>${SEO_CONFIG.contact.uk.email} (${post.author})</author>
      <category>${post.category}</category>
    </item>`;
  }).join('');

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SEO_CONFIG.siteName} Insights &amp; Publications</title>
    <link>${baseUrl}/blog</link>
    <description>${SEO_CONFIG.defaultDescription}</description>
    <language>en-gb</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${rssItems}
  </channel>
</rss>`;

  return new Response(rssFeed.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}
