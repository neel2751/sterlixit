import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogDetailContent } from "@/components/ui/blog-detail-content";
import { blogPosts } from "@/lib/site-data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  return {
    title: post?.title ?? "Blog Post",
    description:
      post?.excerpt ?? "Insights and growth playbooks from the Sterlixit team.",
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post ? `${post.title} | Sterlixit` : "Blog Post | Sterlixit",
      description:
        post?.excerpt ??
        "Insights and growth playbooks from the Sterlixit team.",
      url: `https://sterlixit.co.uk/blog/${slug}`,
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  const readTime = Math.max(
    3,
    Math.round(post.content.join(" ").split(/\s+/).length / 210),
  );

  return (
    <BlogDetailContent post={post} related={related} readTime={readTime} />
  );
}
