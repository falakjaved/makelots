import { blogs } from "../../../data/blogs";

interface Props {
  params: { slug: string };
}

export default function BlogPost({ params }: Props) {
  const blog = blogs.find(b => b.slug === params.slug);

  if (!blog) return <p>Blog not found</p>;

  return (
    <div className="container mx-auto p-6 space-y-4">
      <h1 className="text-3xl font-bold">{blog.title}</h1>
      <p className="text-gray-500">{blog.date}</p>
      <div className="mt-4 whitespace-pre-line">{blog.content}</div>
    </div>
  )
}
