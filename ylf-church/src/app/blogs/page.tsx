import Link from 'next/link'
import { blogs } from '@/lib/blog-data'

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-white px-8 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          YLF Blogs
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.slug}
              className="border rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold mb-2">
                {blog.title}
              </h2>

              <p className="text-sm text-gray-500 mb-4">
                By {blog.author}
              </p>

              <p className="text-gray-700 mb-4">
                {blog.excerpt}
              </p>

              <Link
                href={`/blogs/${blog.slug}`}
                className="text-blue-600 font-medium"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}