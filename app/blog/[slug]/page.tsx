import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { posts } from "@/data/core"

type Props = {
  params: { slug: string }
}

export default function Page({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) return notFound()

  return (
    <div className="min-h-[100dvh] flex flex-col">
      <SiteHeader />
      <main className="container mx-auto px-4 md:px-6 py-10 md:py-14">
        <article className="prose prose-neutral max-w-3xl">
          <h1>{post.title}</h1>
          <p className="text-sm text-muted-foreground">{post.date}</p>
          <div className="mt-6 whitespace-pre-wrap">{post.content}</div>
        </article>
      </main>
      <SiteFooter />
    </div>
  )
}
