import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Suspense } from "react"
import Link from "next/link"
import { MessageSquare, Mic, BarChart3, Users, CheckCircle, AlertCircle, Lightbulb, Globe, Target, HelpCircle, Package, Cpu, XCircle, TrendingUp, ArrowRight } from "lucide-react"

export default function ProductAnalysis() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Suspense fallback={<div className="h-14 bg-background/90 backdrop-blur-md border-b border-border/50" />}>
        <SiteHeader />
      </Suspense>
      <main className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="mb-8">
          <Badge className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 border-blue-200/50 mb-4">
            产品分析
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">AI产品深度分析</h1>
          <p className="text-muted-foreground text-lg">深度分析AI驱动的产品，探索其功能设计、技术架构与用户体验优化方向。</p>
        </div>

        {/* 文章预览模块 */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* TalkAI 文章预览 */}
          <Card className="shadow-lg border-l-4 border-l-blue-500 hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-blue-600" />
                Talk AI 练口语产品分析
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-sm">
                深度分析AI驱动的口语学习产品，探索智能对话练习、语法词汇反馈、发音评估等核心功能的设计逻辑与技术实现。
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>智能对话练习系统</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>实时语音识别与反馈</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>个性化学习路径推荐</span>
                </div>
              </div>
              <div className="flex justify-end">
                <Link href="/product-analysis/talkai">
                  <Button variant="outline" className="flex items-center gap-2">
                    详细内容
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* DeepL 文章预览 */}
          <Card className="shadow-lg border-l-4 border-l-green-500 hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Globe className="h-5 w-5 text-green-600" />
                DeepL 翻译产品分析
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-sm">
                全面解析DeepL翻译产品的技术架构、功能模块与用户体验设计，探讨AI翻译产品的创新方向与优化策略。
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>神经网络翻译引擎</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>多语言支持与优化</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>企业级API服务</span>
                </div>
              </div>
              <div className="flex justify-end">
                <Link href="/product-analysis/deepl">
                  <Button variant="outline" className="flex items-center gap-2">
                    详细内容
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}