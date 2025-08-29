import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6 py-6 text-sm text-muted-foreground flex flex-col sm:flex-row items-center gap-3">
        <p>&copy; {new Date().getFullYear()} 王怡凡 · 医疗AI产品经理. All rights reserved.</p>
        <nav className="sm:ml-auto flex items-center gap-4">
          <Link href="/contact" prefetch={false} className="hover:underline underline-offset-4 hover:text-primary transition-colors">
            联系
          </Link>
          <Link href="/blog" prefetch={false} className="hover:underline underline-offset-4 hover:text-primary transition-colors">
            博客
          </Link>
          <Link href="/portfolio" prefetch={false} className="hover:underline underline-offset-4 hover:text-primary transition-colors">
            作品集
          </Link>
        </nav>
      </div>
    </footer>
  )
}
