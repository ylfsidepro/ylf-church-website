import { blogs } from '@/lib/blog-data'
import { notFound } from 'next/navigation'

interface Props {
  params: {
    slug: string
  }
}

export default function BlogDetailPage({ params }: Props) {
  const blog = blogs.find((b) => b.slug === params.slug)

  if (!blog) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-[#fafafa] px-6 py-20">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-10 md:p-16">
        
        <p className="text-sm uppercase tracking-[4px] text-blue-600 font-semibold mb-3">
          YLF Blog
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
          {blog.title}
        </h1>

        <p className="text-lg text-gray-500 mb-10 italic">
          By {blog.author}
        </p>

        <article
          className="
            whitespace-pre-line
            text-lg
            leading-9
            text-gray-800
            font-light
            tracking-wide
            space-y-6
          "
        >
          {blog.content}
        </article>
      </div>
    </main>
  )
}