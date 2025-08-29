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
          <h1 className="text-3xl md:text-4xl font-bold mb-6">AI产品优化：我学到的最重要的一课</h1>

          <div className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-r from-blue-50/80 to-cyan-50/60 rounded-xl p-6 mb-8 border border-blue-200/30">
              <p className="text-lg leading-relaxed text-slate-700 mb-0">
                做AI产品，其实和想象中不太一样。一开始，我觉得这事挺简单的，因为整个逻辑链都在我脑子里：数据进来，模型处理，结果出去，就这么回事。内部测试的时候，效果也很好，我觉得用户使用起来也会很流畅。但后来，现实狠狠地给了我一巴掌。
              </p>
            </div>

            <Card className="mb-8 border-blue-200/30 shadow-sm bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Lightbulb className="h-6 w-6 text-blue-600" />
                  意想不到的问题和心态崩溃
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  产品上线后，问题一个接一个地冒出来。最要命的是，模型效果和我们预想的完全不一样。在手机端和网页端，表现天差地别，用户体验特别差。我们内部测试好的功能，到了用户手里就各种出错，模型识别不准、响应慢，甚至直接崩溃。
                </p>
                <p className="text-muted-foreground">
                  我当时真的有点懵。用户的反馈特别不好，我的自信心也一下子就没了。我开始怀疑自己，觉得自己是不是一开始就想错了。那段时间特别累，人也很沮丧，但没办法，问题摆在眼前，我只能硬着头皮继续干。
                </p>
                <div className="bg-blue-50/50 rounded-lg p-4 border border-blue-200/30">
                  <p className="text-sm text-slate-700 mb-0">
                    核心洞察：这些问题让我意识到，内部测试的局限性。
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8 border-blue-200/30 shadow-sm bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Users className="h-6 w-6 text-orange-600" />
                  解决问题：从单打独斗到团队协作
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  我意识到，光靠自己想是没用的。我得去找人帮忙，和团队一起解决。我找来了我的伙伴们，把所有问题和收到的用户反馈都摆在桌面上，我们一起分析。
                </p>
                <p className="text-muted-foreground">
                  我们开始从头检查，一个环节一个环节地找问题：
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-200/30">
                    <h4 className="font-semibold text-blue-800 mb-2">找专家请教</h4>
                    <p className="text-sm text-blue-700">
                      了解模型在不同设备上的差异，获得专业建议。
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-4 border border-orange-200/30">
                    <h4 className="font-semibold text-orange-800 mb-2">重新梳理数据</h4>
                    <p className="text-sm text-orange-700">
                      修正数据偏差，添加真实场景样本。
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-4 border border-purple-200/30">
                    <h4 className="font-semibold text-purple-800 mb-2">全面排查测试</h4>
                    <p className="text-sm text-purple-700">
                      模拟极端情况，进行大量调试。
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  那段时间，我们经历了无数次的失败，但每找到一个问题，我们都离成功更近了一步。
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8 border-blue-200/30 shadow-sm bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Globe className="h-6 w-6 text-purple-600" />
                  最后的感悟：崩溃是好事
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  这次经历也让我明白：
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200/30">
                    <h4 className="font-semibold text-green-800 mb-2">保持开放心态</h4>
                    <p className="text-sm text-green-700">
                      不要高估或否定自己，持续学习调整。
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-4 border border-red-200/30">
                    <h4 className="font-semibold text-red-800 mb-2">团队的力量</h4>
                    <p className="text-sm text-red-700">
                      集体协作胜过个人奋斗。
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg p-4 border border-amber-200/30">
                    <h4 className="font-semibold text-amber-800 mb-2">关注细节</h4>
                    <p className="text-sm text-amber-700">
                      小问题可能影响大局。
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  做产品的每个环节都会出错，但是人更需要解决错误，想要做出来好的产品首先要经历无数个崩溃瞬间。
                </p>
                <div className="bg-amber-50/50 rounded-lg p-4 border border-amber-200/30">
                  <p className="text-sm text-slate-700 mb-0">
                    <strong>核心感悟：</strong> 崩溃是成长的催化剂。
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-6 border border-slate-200/50">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="h-6 w-6 text-slate-600" />
                <h3 className="text-xl font-semibold text-slate-800">优化感悟总结</h3>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                通过这次AI产品优化的经历，我学会了拥抱失败、借助团队力量，并注重每一个细节。这些教训将成为我未来产品工作的宝贵财富。
              </p>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}