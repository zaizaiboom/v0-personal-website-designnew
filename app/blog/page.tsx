import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Suspense } from "react"
import { BookOpen, Users, Lightbulb, Globe, Code, Palette } from "lucide-react"

export default function Page() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Suspense fallback={<div className="h-14 bg-background/90 backdrop-blur-md border-b border-border/50" />}>
        <SiteHeader />
      </Suspense>
      <main className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">博客文章</h1>
          <div className="grid gap-6">
            <Card className="border-blue-200/30 shadow-sm bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">从语言到逻辑：一个英语专业生如何成为AI产品经理</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  我曾以为，自己将与莎士比亚和乔伊斯相伴，在文字的世界里探索人类情感的奥秘。然而，在我大学生涯的某个转折点，我发现，"语言"的本质是沟通和洞察，而这正是产品经理最核心的能力。
                </p>
                <Button asChild>
                  <Link href="/blog/from-language-to-logic">
                    全部内容
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-green-200/30 shadow-sm bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">医疗AI：未来的医生助理</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  简单来说，医疗AI就是将人工智能技术应用于医疗领域，解决各种问题。它涵盖的范围很广，主要分为以下几个方向：
                </p>
                <Button asChild>
                  <Link href="/blog/medical-ai">
                    全部内容
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-purple-200/30 shadow-sm bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">AI产品优化：我学到的最重要的一课</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  做AI产品，其实和想象中不太一样。一开始，我觉得这事挺简单的，因为整个逻辑链都在我脑子里：数据进来，模型处理，结果出去，就这么回事。
                </p>
                <Button asChild>
                  <Link href="/blog/ai-product-optimization">
                    全部内容
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
