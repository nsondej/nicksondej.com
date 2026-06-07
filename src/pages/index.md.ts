import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const markdownContent = `# Nick Sondej (@nsondej)

Tools, thoughts, and experiments — from a long-time mechanical engineer still figuring out what he wants to be when he grows up.

## Navigation

- [About](/about.md)
- [Recent Posts](/posts.md)
- [Archives](/archives.md)
- [RSS Feed](/rss.xml)

## Links

- Twitter: [@nsondej](https://x.com/nsondej)
- GitHub: [@nsondej](https://github.com/nsondej)
- LinkedIn: [nick-sondej](https://www.linkedin.com/in/nick-sondej/)
- Email: hi@nicksondej.com

---

*This is the markdown-only version of nicksondej.com. Visit [nicksondej.com](https://nicksondej.com) for the full experience.*`;

  return new Response(markdownContent, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
