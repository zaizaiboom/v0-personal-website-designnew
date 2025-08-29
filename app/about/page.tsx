import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import {
  Lightbulb,
  Workflow,
  Brain,
  AlertTriangle,
  Users,
  Target,
  BarChart3,
  MessageSquare,
  Shield,
} from "lucide-react"
import { Suspense } from "react"
import type React from "react"

function TechTag({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="w-full text-center relative inline-flex items-center justify-center rounded-full px-4 py-2.5 text-base md:text-lg font-medium
      text-slate-700 bg-gradient-to-r from-blue-50/80 via-white/60 to-cyan-50/80
      border border-blue-200/40 ring-1 ring-inset ring-blue-200/20
      shadow-sm backdrop-blur-sm hover:shadow-md transition-all duration-200"
      aria-label="特色标签"
    >
      {children}
    </div>
  )
}

export default function Page() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Suspense fallback={<div className="h-14 bg-background/90 backdrop-blur-md border-b border-border/50" />}>
        <SiteHeader />
      </Suspense>
      <main className="container mx-auto px-4 md:px-6 py-10 md:py-14">
        {/* 关于我部分 */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-8">
            <div className="mb-5">
              <Badge className="bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 border-orange-200/50">
                关于我
              </Badge>
              <h1 className="mt-3 text-3xl md:text-4xl font-bold">从语言解码到产品解码</h1>
              <p className="mt-3 text-muted-foreground">
                我是王怡凡，一位致力于让医疗AI产品更有人文温度的产品思考者。英语专业背景让我对语言习惯与认知差异异常敏感，
                这成为我在医疗AI产品中解码用户需求的关键优势。我相信：精准与温度同样重要。
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="border-blue-200/30 shadow-sm bg-white/80 backdrop-blur-sm">
                <CardContent className="p-5">
                  <h2 className="text-lg font-semibold mb-1.5">语言解码：从文本分析到用户洞察</h2>
                  <p className="text-sm text-muted-foreground">
                    英语专业训练的跨文化沟通、语义分析能力，直接转化为AI产品的用户需求解码、信息架构设计和多语言适配能力。
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-200/30 shadow-sm bg-white/80 backdrop-blur-sm">
                <CardContent className="p-5">
                  <h2 className="text-lg font-semibold mb-1.5">实战验证：FutureU AI面试助手</h2>
                  <p className="text-sm text-muted-foreground">
                    团队协作开发AI产品经理面试助手，从用户调研到功能规划，完整体验产品0-1构建过程，验证AI产品设计思维。
                  </p>
                </CardContent>
              </Card>

              <Card className="border-purple-200/30 shadow-sm bg-white/80 backdrop-blur-sm">
                <CardContent className="p-5">
                  <h2 className="text-lg font-semibold mb-1.5">产品分析：深度拆解成熟AI产品</h2>
                  <p className="text-sm text-muted-foreground">
                    系统分析TalkAI、DeepL等AI产品，运用"痛点-痒点-爽点"模型，深入理解AI产品的技术架构与用户体验设计逻辑。
                  </p>
                </CardContent>
              </Card>

              <Card className="border-orange-200/30 shadow-sm bg-white/80 backdrop-blur-sm">
                <CardContent className="p-5">
                  <h2 className="text-lg font-semibold mb-1.5">场景实践：教学与医疗服务优化</h2>
                  <p className="text-sm text-muted-foreground">
                    通过英语教学的个性化分层、医院导诊的流程优化，积累用户分层运营、服务体验设计的实战经验。
                  </p>
                </CardContent>
              </Card>

              <Card className="border-cyan-200/30 shadow-sm bg-white/80 backdrop-blur-sm">
                <CardContent className="p-5">
                  <h2 className="text-lg font-semibold mb-1.5">项目管理：从活动策划到产品迭代</h2>
                  <p className="text-sm text-muted-foreground">
                    校园活动全流程策划执行经验，培养跨团队协作、项目管理、数据驱动决策等AI产品经理核心技能。
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-200/30 shadow-sm bg-white/80 backdrop-blur-sm">
                <CardContent className="p-5">
                  <h2 className="text-lg font-semibold mb-1.5">思维升级：构建AI产品方法论</h2>
                  <p className="text-sm text-muted-foreground">
                    整合语言敏感度、用户洞察、技术理解，形成"共情-认知螺旋"产品思维，专注医疗AI的人文温度与技术精度平衡。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-4">
            <Card className="border-blue-200/30 shadow-sm bg-white/80 backdrop-blur-sm">
              <CardContent className="p-4 md:p-5">
                <h3 className="text-sm font-semibold mb-3">个性标签</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <TechTag>细节控制</TechTag>
                  <TechTag>逻辑者</TechTag>
                  <div className="md:col-span-2">
                    <TechTag>实干家</TechTag>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200/30 shadow-sm bg-white/80 backdrop-blur-sm">
              <CardContent className="p-4 md:p-5">
                <h3 className="text-sm font-semibold mb-3">我的方法速览</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• 语言解码驱动的用户洞察与信息架构</li>
                  <li>• 医疗场景可信与可理解性的平衡</li>
                  <li>• MVP验证优先，安全边界清晰</li>
                  <li>• 数据与可解释性指标指导迭代</li>
                </ul>
              </CardContent>
            </Card>
          </aside>
        </div>
        {/* AI产品案例分析模块已移除 */}
      </main>
      <SiteFooter />
    </div>
  )
}
