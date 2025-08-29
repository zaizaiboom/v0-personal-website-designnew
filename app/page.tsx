import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Handshake, Microscope, Sparkles, SquareArrowOutUpRight } from "lucide-react"
import Link from "next/link"
import { DoubleHelix } from "@/components/double-helix"
import { RadarChart } from "@/components/radar-chart"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { identity, radarData, capabilityPoints } from "@/data/core"
import { ParticleField } from "@/components/particle-field"
import { TechBackground } from "@/components/tech-background"
import { Suspense } from "react"

export default function Page() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Suspense fallback={<div className="h-14 bg-background/90 backdrop-blur-md border-b border-border/50" />}>
        <SiteHeader />
      </Suspense>
      <main>
        {/* Hero with Double Helix */}
        <section className="relative overflow-hidden" aria-label="英雄区：双螺旋价值导航">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-cyan-50/60 to-purple-50/40" />
            <TechBackground />
          </div>

          <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 items-center">
              <div className="space-y-5">
                <Badge
                  className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 border border-blue-200/50 shadow-sm"
                  aria-label="核心定位"
                >
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                    医疗AI产品的跨文化解码器
                  </span>
                </Badge>

                {/* Enhanced content box with subtle tech styling */}
                <div className="relative overflow-hidden rounded-2xl border border-blue-200/30 bg-white/90 shadow-lg backdrop-blur-sm">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400" />

                  <ParticleField
                    className="absolute inset-0"
                    color="#3b82f6"
                    secondaryColor="#06b6d4"
                    count={60}
                    speed={0.2}
                    opacity={0.15}
                  />

                  <div className="relative p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex gap-1">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                      <div className="text-xs text-blue-600 font-mono">AI_DECODER_v2.0</div>
                    </div>

                    <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4 text-slate-800">
                      医疗AI产品的跨文化解码器：将人文温度注入生物医疗智能解决方案
                    </h1>
                    <p className="text-lg md:text-xl leading-relaxed text-slate-600">
                      一位英语专业毕业生如何将语言思维转化为生物医疗AI产品的核心竞争力——不仅是职业转型故事，更是产品思维与人文视角的创新融合。
                    </p>

                    {/* Status indicators */}
                    <div className="flex items-center gap-4 mt-6 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-slate-600">系统在线</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="text-slate-600">AI解码中</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced buttons */}
                <div className="flex flex-wrap gap-3">
                  <Link href="/portfolio" prefetch={false}>
                    <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-md text-white">
                      <Microscope className="mr-2 h-4 w-4" />
                      查看作品集
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="border-blue-200 text-blue-700 hover:bg-blue-50 bg-white/80 backdrop-blur-sm shadow-sm"
                    >
                      <Handshake className="mr-2 h-4 w-4" />
                      预约产品交流
                    </Button>
                  </Link>
                  <Link href="/blog">
                    <Button variant="ghost" className="text-slate-600 hover:bg-blue-50/50">
                      <BookOpen className="mr-2 h-4 w-4" />
                      阅读产品思考
                    </Button>
                  </Link>
                </div>

                {/* Enhanced guidance box */}
                <div className="rounded-xl border border-blue-200/50 bg-gradient-to-r from-blue-50/80 to-cyan-50/60 p-4 backdrop-blur-sm shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-blue-600 font-mono">NAVIGATION_GUIDE</span>
                  </div>
                  <p className="text-sm text-slate-700">
                    选择您的起点：语言解码（人文链）或产品思维（技术链），沿着交织的双螺旋探索能力组合。
                  </p>
                </div>
              </div>

              {/* Helix area with subtle enhancement */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-cyan-100/20 rounded-3xl blur-3xl"></div>
                <div className="scale-[0.95] origin-center relative">
                  <DoubleHelix
                    humanities={capabilityPoints.filter((c) => c.chain === "humanities")}
                    tech={capabilityPoints.filter((c) => c.chain === "tech")}
                    primaryColor="#2C5E92"
                    secondaryColor="#E67E22"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced sections */}
        <section className="container mx-auto px-4 md:px-6 py-10 md:py-14">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <Card className="border-blue-200/30 shadow-md backdrop-blur-sm bg-white/80">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-5 w-5 text-blue-600" />
                  <h2 className="text-xl font-semibold">一句话价值主张</h2>
                </div>
                <p className="text-muted-foreground">{identity.valueStatement}</p>
                <div className="mt-3 grid sm:grid-cols-3 gap-3">
                  <Link href="/about">
                    <Button variant="outline" className="w-full bg-white/50 hover:bg-blue-50 border-blue-200/50">
                      我的转型故事
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button variant="outline" className="w-full bg-white/50 hover:bg-blue-50 border-blue-200/50">
                      产品哲学
                    </Button>
                  </Link>
                  <Link href="/blog">
                    <Button variant="outline" className="w-full bg-white/50 hover:bg-blue-50 border-blue-200/50">
                      产品思考
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200/30 shadow-md backdrop-blur-sm bg-white/80">
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">AI产品经理能力雷达图</h2>
                  <Link
                    href="/portfolio"
                    className="text-sm text-blue-600 inline-flex items-center gap-1 hover:text-blue-500 transition-colors"
                  >
                    能力-项目映射
                    <SquareArrowOutUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
                <div className="mt-4">
                  <RadarChart size={280} axes={radarData} stroke="#2C5E92" fill="#2C5E92" />
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  基于FutureU产品开发、校园活动策划、英语教学实践、医疗导诊服务四大实战项目构建的AI产品经理核心能力体系。
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Enhanced CTA section */}
        <section className="container mx-auto px-4 md:px-6 pb-16">
          <Card className="bg-gradient-to-br from-blue-50/90 to-cyan-50/80 border border-blue-200/40 shadow-lg backdrop-blur-sm">
            <CardContent className="p-6 md:p-7">
              <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-800">AI产品不是技术炫技，而是解决真问题的翻译器</h3>
                  <p className="text-slate-600 mt-2">
                    如果您正在寻找能将人文温度注入医疗AI产品的产品经理，欢迎与我联系。
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/contact">
                    <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 w-full shadow-md text-white">
                      预约沟通
                    </Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button
                      variant="outline"
                      className="border-blue-200/50 text-blue-700 w-full bg-white/50 hover:bg-blue-50"
                    >
                      查看能力图谱
                    </Button>
                  </Link>
                </div>
              </div>
              <p className="mt-5 text-center text-base font-medium text-blue-700">
                医疗AI产品的跨文化解码器——将人文温度注入生物医疗智能解决方案。
              </p>
            </CardContent>
          </Card>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
