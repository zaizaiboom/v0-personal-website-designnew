"use client"

import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { cn } from "@/lib/utils"
import { Switch } from "@/components/ui/switch"
import { useState, useEffect } from "react"

const nav = [
  { href: "/", label: "首页" },
  { href: "/about", label: "关于我" },
  { href: "/portfolio", label: "作品集" },
  { href: "/blog", label: "博客" },
  { href: "/product-analysis", label: "产品分析" },
  { href: "/contact", label: "联系我" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const search = useSearchParams()
  const [recruiter, setRecruiter] = useState(false)

  useEffect(() => {
    if (search.get("mode") === "recruiter") setRecruiter(true)
  }, [search])

  return (
    <header className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 h-14 flex items-center gap-4">
        <Link href="/" prefetch={false} className="font-semibold text-foreground hover:text-primary transition-colors">
          王怡凡 · 医疗AI产品经理
        </Link>
        <nav className="ml-auto hidden md:flex items-center gap-5">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              prefetch={false}
              className={cn(
                "text-sm hover:underline underline-offset-4 transition-colors",
                pathname === item.href ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">招聘经理模式</span>
            <Switch checked={recruiter} onCheckedChange={setRecruiter} />
          </div>
        </nav>
      </div>
      {recruiter && (
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
          <div className="container mx-auto px-4 md:px-6 py-2 text-sm text-center">
            招聘经理模式已开启：快速查看
            <Link href="/portfolio" prefetch={false} className="underline mx-1 underline-offset-4">
              能力-项目映射
            </Link>
            或
            <Link href="/contact" prefetch={false} className="underline ml-1 underline-offset-4">
              预约沟通
            </Link>
          </div>
        </div>
      )}
      <div className="md:hidden border-t border-border/50">
        <div className="container mx-auto px-4 py-2 flex flex-wrap gap-3">
          {nav.slice(0, 4).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              prefetch={false}
              className={cn(
                "text-sm transition-colors",
                pathname === item.href ? "text-primary font-medium" : "text-muted-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
