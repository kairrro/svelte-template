import { siteURL } from "$lib/scripts/globals/misc";

export async function GET() {
    const headers = {
      'Cache-Control': 'max-age=0, s-maxage=3600',
      'Content-Type': 'application/xml',
    }

    const body = `<?xml version="1.0" encoding="UTF-8" ?>
        <urlset
            xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
            xmlns:xhtml="https://www.w3.org/1999/xhtml"
            xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
            xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
            xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
        >
            <url>
                <loc>${siteURL}/</loc>
                <lastmod>2024-07-04</lastmod>
                <priority>1.00</priority>
            </url>    

            <url>
                <loc>${siteURL}/privacy</loc>
                <lastmod>2024-07-04</lastmod>
                <priority>0.90</priority>
            </url>    

            <url>
                <loc>${siteURL}/tos</loc>
                <lastmod>2024-07-04</lastmod>
                <priority>0.90</priority>
            </url>   
        </urlset>
      `;

    return new Response(body, { headers });
}
