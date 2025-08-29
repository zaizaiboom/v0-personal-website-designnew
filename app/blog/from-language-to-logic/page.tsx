import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Suspense } from "react"
import { BookOpen, Users, Lightbulb, Globe, Code, Palette } from "lucide-react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ArticlePage() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Suspense fallback={<div className="h-14 bg-background/90 backdrop-blur-md border-b border-border/50" />}>
        <SiteHeader />
      </Suspense>
      <main className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              返回博客
            </Link>
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">从语言到逻辑：一个英语专业生如何成为AI产品经理</h1>

          <div className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-r from-blue-50/80 to-cyan-50/60 rounded-xl p-6 mb-8 border border-blue-200/30">
              <p className="text-lg leading-relaxed text-slate-700 mb-0">
                我曾以为，自己将与莎士比亚和乔伊斯相伴，在文字的世界里探索人类情感的奥秘。然而，在我大学生涯的某个转折点，我发现，"语言"的本质是沟通和洞察，而这正是产品经理最核心的能力。我开始将我所学的用户洞察力、逻辑分析能力，以及对复杂概念的拆解能力，应用到全新的领域：AI产品管理。
              </p>
            </div>

            <p className="text-muted-foreground text-lg mb-8">
              我的学习旅程并非纸上谈兵，而是通过一系列实践项目逐步构建起来的。
            </p>

            {/* 项目一 */}
            <Card className="mb-8 border-blue-200/30 shadow-sm bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Users className="h-6 w-6 text-blue-600" />
                  项目一：团队协作，打造AI面试助手"FutureU"
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  我的团队共同开发了一款名为"FutureU"的AI产品经理面试助手。这个项目的核心在于解决求职者的痛点：如何获得高质量、个性化的AI产品经理模拟面试服务。我们的核心功能包括：
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong>AI产品经理面试题库：</strong>涵盖产品思维、技术理解和用户洞察等多个维度。
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong>AI智能分析反馈：</strong>不仅给出面试表现，还提供有针对性的改进建议。
                    </span>
                  </li>
                </ul>
                <div className="bg-blue-50/50 rounded-lg p-4 border border-blue-200/30">
                  <p className="text-sm text-slate-700 mb-0">
                    在整个开发过程中，我们使用了V0.dev进行原型设计，Vercel和Github协同部署，Cursor和Trae等工具也成为了我们团队高效开发的利器。这不仅仅是一个产品，更是我们产品思维从概念到落地的完整实践。
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 项目二 */}
            <Card className="mb-8 border-blue-200/30 shadow-sm bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Lightbulb className="h-6 w-6 text-orange-600" />
                  项目二：从分析到洞察，拆解成熟产品
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  为了更好地理解产品成功的底层逻辑，我进行了多项产品分析作业。我深入研究了抖音（TikTok）这款成熟产品，并运用"新体验-旧体验-迁移成本"的产品公式，拆解了它的成功要素。我分析了抖音如何通过AI算法精准推荐内容，解决用户在碎片化时间的娱乐需求，并创造了"痛点、痒点、爽点"模型。
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-4 border border-red-200/30">
                    <h4 className="font-semibold text-red-800 mb-2">抖音分析重点</h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• AI算法精准推荐机制</li>
                      <li>• 碎片化时间娱乐需求</li>
                      <li>• "痛点、痒点、爽点"模型</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200/30">
                    <h4 className="font-semibold text-green-800 mb-2">TalkAI分析重点</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• 智能对话与发音纠正</li>
                      <li>• 便捷性优势分析</li>
                      <li>• 语境真实性局限</li>
                    </ul>
                  </div>
                </div>

                <p className="text-muted-foreground">
                  我还分析了TalkAI这款AI口语练习应用，评估了它的核心功能（如智能对话、发音纠正）及优劣势。作为英语专业的学生，我更能从用户的角度，深入理解其优势（如便捷性）和局限性（如语境的真实性），并提出了具体的改进建议。
                </p>

                <div className="bg-amber-50/50 rounded-lg p-4 border border-amber-200/30">
                  <p className="text-sm text-slate-700 mb-0">
                    <strong>核心洞察：</strong>
                    这些分析让我意识到，优秀的产品并非偶然，而是对用户需求的深刻理解和对技术架构的巧妙运用。
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 项目三 */}
            <Card className="mb-8 border-blue-200/30 shadow-sm bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Globe className="h-6 w-6 text-purple-600" />
                  项目三：个人品牌，用"共情-认知螺旋"讲述产品思维
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  我为自己设计了一个独特的个人品牌网站，主题为"医疗AI产品的跨文化需求解码者"。这个网站本身就是我的"第一个产品"，旨在通过具象化的交互体验，展示我如何将英语专业的背景转化为AI产品经理的独特优势。
                </p>

                <div className="grid gap-4">
                  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-4 border border-purple-200/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="h-4 w-4 text-purple-600" />
                      <h4 className="font-semibold text-purple-800">核心理念</h4>
                    </div>
                    <p className="text-sm text-purple-700">
                      网站的核心设计理念是"共情-认知螺旋（Empathy-Cognition Spiral）"。我将DNA双螺旋结构抽象为"情感理解"与"认知逻辑"的交织系统，用以展示如何在产品设计中平衡人文关怀与技术理性。
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-4 border border-cyan-200/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Palette className="h-4 w-4 text-cyan-600" />
                      <h4 className="font-semibold text-cyan-800">创新交互</h4>
                    </div>
                    <p className="text-sm text-cyan-700">
                      用户进入网站后，会看到一个悬浮在深空背景中的双螺旋结构。用户可以通过滚动或点击节点，动态展开螺旋，探索我的产品思维世界。左侧的"情感链"用温暖的琥珀色表示，右侧的"认知链"则用冷静的蓝光。每个连接点都映射着我的具体经历。
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-4 border border-green-200/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Code className="h-4 w-4 text-green-600" />
                      <h4 className="font-semibold text-green-800">技术与视觉</h4>
                    </div>
                    <p className="text-sm text-green-700">
                      这个网站不仅是一个设计概念，更是技术可行的实践方案。它将采用WebGL技术和Three.js库来渲染动态的螺旋效果，并使用Next.js框架部署在Vercel平台上。视觉上，网站采用深海军蓝为基调，搭配医疗蓝和人文暖橙，营造出"专业可信"与"温度科技"的独特气质。这种精密的视觉和交互设计，旨在让招聘方能够亲手验证我的产品思维，而不仅仅是阅读一份静态简历。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 总结 */}
            <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-6 border border-slate-200/50">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="h-6 w-6 text-slate-600" />
                <h3 className="text-xl font-semibold text-slate-800">从语言到逻辑的转化</h3>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                这段经历让我坚信，英语专业的背景并非是我的短板，而是我洞察用户、理解复杂人性的独特优势。从语言到逻辑，我正在一步步将所学所想转化为真正能解决问题的AI产品。
              </p>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}