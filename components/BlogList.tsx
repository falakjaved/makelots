import Link from "next/link";

interface Blog {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
}

interface BlogListProps {
  blogs: Blog[];
}

export default function BlogList({ blogs }: BlogListProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {blogs.map(blog => (
        <Link key={blog.slug} href={`/blog/${blog.slug}`} className="p-4 border rounded-lg hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
          <p className="text-sm text-gray-500">{blog.date}</p>
          <p className="mt-2">{blog.excerpt}</p>
        </Link>
      ))}
    </div>
  )
}
