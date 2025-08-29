import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Suspense } from "react"
import Link from "next/link"
import { Globe, Languages, Zap, Shield, CheckCircle, AlertCircle, Lightbulb, Target, HelpCircle, Package, Cpu, XCircle, TrendingUp, ArrowLeft, Users, BarChart3 } from "lucide-react"

export default function DeepLAnalysis() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Suspense fallback={<div className="h-14 bg-background/90 backdrop-blur-md border-b border-border/50" />}>
        <SiteHeader />
      </Suspense>
      <main className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="mb-6">
          <Link href="/product-analysis">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              返回产品分析
            </Button>
          </Link>
        </div>
      
        <div className="mb-8">
          <Badge className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 border-blue-200/50 mb-4">
            产品分析
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">DeepL 翻译产品分析</h1>
          <p className="text-muted-foreground text-lg">全面解析DeepL翻译产品的技术架构、功能模块与用户体验设计，探讨AI翻译产品的创新方向与优化策略。</p>
        </div>
      
        <Card className="mb-8 shadow-lg border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Package className="h-5 w-5 text-blue-600" />
              产品概览
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground mb-4">
              DeepL由德国公司DeepL GmbH开发，前身是神经网络翻译项目Linguee。其核心产品包括：
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200/50">
                <h4 className="font-semibold text-blue-900 mb-2">DeepL Translate</h4>
                <p className="text-sm text-blue-700">面向个人用户的免费与付费翻译服务（网页/桌面/移动应用）</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200/50">
                <h4 className="font-semibold text-green-900 mb-2">DeepL Pro</h4>
                <p className="text-sm text-green-700">面向企业用户的订阅服务，提供更高翻译额度、文档翻译、API访问等</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-4 rounded-lg border border-purple-200/50">
                <h4 className="font-semibold text-purple-900 mb-2">DeepL API</h4>
                <p className="text-sm text-purple-700">供开发者集成至应用程序、网站或工作流中的翻译接口</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 rounded-lg border border-orange-200/50">
                <h4 className="font-semibold text-orange-900 mb-2">DeepL Write</h4>
                <p className="text-sm text-orange-700">基于AI的文本润色与重写工具（2022年推出），扩展了语言处理能力</p>
              </div>
            </div>
          </CardContent>
        </Card>
      
        {/* 产品概览 */}
        <Card className="mb-8 shadow-lg border-l-4 border-l-green-500">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Globe className="h-6 w-6 text-green-600" />
              产品概览
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Languages className="h-5 w-5 text-blue-600" />
                功能模块
              </h3>
              <p className="text-muted-foreground mb-4">DeepL作为领先的AI翻译服务，提供多层次的翻译解决方案：</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200/50">
                  <h4 className="font-semibold text-green-900 mb-2">文本翻译</h4>
                  <p className="text-sm text-green-700">支持31种语言的高质量文本翻译，采用神经网络技术，提供接近人工翻译的准确度和流畅度。</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-200/50">
                  <h4 className="font-semibold text-blue-900 mb-2">文档翻译</h4>
                  <p className="text-sm text-blue-700">支持PDF、Word、PowerPoint等多种格式的文档翻译，保持原有格式和排版，适合商务和学术用途。</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-4 rounded-lg border border-purple-200/50">
                  <h4 className="font-semibold text-purple-900 mb-2">API服务</h4>
                  <p className="text-sm text-purple-700">为开发者和企业提供强大的翻译API，支持批量处理、实时翻译等多种集成方案。</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 rounded-lg border border-orange-200/50">
                  <h4 className="font-semibold text-orange-900 mb-2">浏览器插件</h4>
                  <p className="text-sm text-orange-700">Chrome、Firefox等浏览器插件，实现网页内容的即时翻译，提升用户浏览体验。</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Cpu className="h-5 w-5 text-purple-600" />
                技术架构
              </h3>
              <p className="text-muted-foreground mb-4">DeepL采用先进的神经网络翻译技术，构建了高效的翻译引擎：</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Package className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">神经网络引擎</h4>
                  <p className="text-sm text-muted-foreground">基于Transformer架构的翻译模型</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Cpu className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">大规模训练</h4>
                  <p className="text-sm text-muted-foreground">数十亿句对的多语言训练数据</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Zap className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">实时优化</h4>
                  <p className="text-sm text-muted-foreground">持续学习和模型更新机制</p>
                </div>
              </div>
            </section>
          </CardContent>
        </Card>

        {/* 优点与缺点 */}
        <Card className="mb-8 shadow-lg border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <BarChart3 className="h-6 w-6 text-blue-600" />
              优点与缺点分析
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-green-700 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  产品优点
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>翻译质量极高，接近人工翻译水准</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>支持多种文档格式，保持原有排版</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>API服务稳定，适合企业级应用</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>用户界面简洁直观，易于使用</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>数据安全保护措施完善</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-red-700 flex items-center gap-2">
                  <XCircle className="h-5 w-5" />
                  产品缺点
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>支持语言数量相对有限（31种）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>免费版本功能限制较多</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>对于特定领域术语的处理有待提升</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>缺乏实时语音翻译功能</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>价格相对较高，中小企业负担较重</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 用户体验分析 */}
        <Card className="mb-8 shadow-lg border-l-4 border-l-purple-500">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Users className="h-6 w-6 text-purple-600" />
              用户体验分析
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Target className="h-5 w-5 text-blue-600" />
                痛点-痒点-爽点分析
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-red-700 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" />
                    痛点
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>传统翻译工具质量不稳定</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>文档翻译后格式混乱</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>专业术语翻译不准确</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-yellow-700 flex items-center gap-2">
                    <HelpCircle className="h-5 w-5" />
                    痒点
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <TrendingUp className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span>希望翻译结果更加自然流畅</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span>需要批量处理大量文档</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span>期望更好的数据安全保障</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-green-700 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5" />
                    爽点
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>极高的翻译质量和准确度</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>完美保持文档原有格式</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>简洁高效的用户界面</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </CardContent>
        </Card>

        {/* 改进方向与建议 */}
        <Card className="mb-8 shadow-lg border-l-4 border-l-orange-500">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Lightbulb className="h-6 w-6 text-orange-600" />
              改进方向与建议
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-blue-700">功能扩展</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>增加实时语音翻译功能</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>扩展支持更多小语种</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>开发移动端原生应用</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>增强专业领域术语库</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-green-700">体验优化</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>提供更灵活的定价方案</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>增加协作翻译功能</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>优化批量处理性能</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>增强用户自定义词典功能</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <SiteFooter />
    </div>
  )
}