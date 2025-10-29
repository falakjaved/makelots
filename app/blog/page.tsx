import Link from "next/link";
import { blogs } from "../../data/blogs";

export default function Blog() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Blog</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <Link key={blog.slug} href={`/blog/${blog.slug}`} className="p-4 border rounded-lg hover:shadow-lg transition">
            <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
            <p className="text-sm text-gray-500">{blog.date}</p>
            <p className="mt-2">{blog.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
