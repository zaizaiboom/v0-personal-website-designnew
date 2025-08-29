"use client"
import { Suspense } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SquareArrowOutUpRight } from "lucide-react"

export default function Page() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Suspense fallback={<div className="h-14 bg-background/90 backdrop-blur-md border-b border-border/50" />}>
        <SiteHeader />
      </Suspense>
      <main className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-5xl mx-auto">
          <Badge className="bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 border-orange-200/50 mb-4">
            联系我
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">一起把"人文温度"注入医疗AI产品</h1>
          <p className="text-muted-foreground mb-8">针对不同受众提供定制化价值主张：招聘经理、产品团队、行业同仁。</p>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <Card className="border-blue-200/30 shadow-sm bg-white/80 backdrop-blur-sm">
              <CardContent className="p-5">
                <h2 className="font-semibold mb-2 text-lg">给招聘经理</h2>
                <p className="text-sm text-muted-foreground">
                  如果您正在寻找能将人文温度注入医疗的AI产品经理，我将以系统化的方法与实战经验帮助团队加速产品价值落地。
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200/30 shadow-sm bg-white/80 backdrop-blur-sm">
              <CardContent className="p-5">
                <h2 className="font-semibold mb-2 text-lg">给产品团队</h2>
                <p className="text-sm text-muted-foreground">
                  如果您认为医疗AI不应只有技术，还应有温度，我可以从用户语言习惯出发，优化可理解性与可用性。
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200/30 shadow-sm bg-white/80 backdrop-blur-sm">
              <CardContent className="p-5">
                <h2 className="font-semibold mb-2 text-lg">给行业同仁</h2>
                <p className="text-sm text-muted-foreground">让我们共同探索医疗AI的人文维度，交流方法论与实践案例。</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-blue-200/30 shadow-sm bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">联系方式</h2>
                <div className="text-center">
                  <p className="text-muted-foreground mb-4">欢迎通过小红书与我交流产品思考与行业见解</p>
                  <Button
                    type="button"
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-md"
                    asChild
                  >
                    <a
                      href="https://www.xiaohongshu.com/user/profile/60ee07d600000000010089d6"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SquareArrowOutUpRight className="mr-2 h-4 w-4" />
                      访问我的小红书主页
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200/30 shadow-sm bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">核心优势</h2>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-sm">跨文化解码能力</h3>
                      <p className="text-xs text-muted-foreground">将语言敏感度转化为用户需求洞察</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-sm">医疗场景理解</h3>
                      <p className="text-xs text-muted-foreground">基于实际志愿服务的深度场景洞察</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-sm">产品思维实践</h3>
                      <p className="text-xs text-muted-foreground">从概念到落地的完整产品开发经验</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-medium text-sm">人文温度注入</h3>
                      <p className="text-xs text-muted-foreground">让AI产品更具可理解性与情感共鸣</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Card className="border-blue-200/30 shadow-sm bg-gradient-to-r from-blue-50/80 to-cyan-50/60 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">期待与您的交流</h3>
                <p className="text-muted-foreground text-sm">
                  无论您是招聘经理、产品团队成员还是行业同仁，我都期待与您探讨如何将人文温度注入医疗AI产品，共同推动行业的人性化发展。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
