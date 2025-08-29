import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Suspense } from "react"
import { Calendar, Users, Target, TrendingUp, Lightbulb, Brain, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Suspense fallback={<div className="h-14 bg-background/90 backdrop-blur-md border-b border-border/50" />}>
        <SiteHeader />
      </Suspense>
      <main className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">作品集 · 实战即作品</h1>
        <p className="text-muted-foreground mb-8">通过实际项目展示如何将语言思维转化为AI产品经理的核心竞争力。</p>

        <div className="grid gap-6">
          {/* FutureU 产品 - 重点突出 */}
          <Card className="border-blue-300/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-gradient-to-br from-blue-50/80 to-indigo-50/80 backdrop-blur-sm ring-2 ring-blue-200/30">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Brain className="h-6 w-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-blue-900">FutureU产品：AI产品经理面试助手</h2>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline" className="border-blue-300/50 bg-blue-100 text-blue-800 font-medium">
                    核心产品
                  </Badge>
                  <Badge variant="outline" className="border-green-300/50 bg-green-100 text-green-800">
                    团队协作
                  </Badge>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="h-5 w-5 text-blue-600" />
                    <h3 className="font-semibold text-base">产品定位</h3>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div className="text-sm font-medium text-blue-800 mb-2">核心价值主张</div>
                    <p className="text-sm text-blue-700">您的专属 AI 求职教练，通过数据洞察，精准提升您的面试竞争力。</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div className="text-sm font-medium text-blue-800 mb-2">目标用户</div>
                    <p className="text-sm text-blue-700">主要面向对求职结果有较高期望、愿意投入时间进行系统性准备的 高校学生、应届毕业生和处于职业转型期的专业人士 。他们不仅需要面试练习的机会，更看重通过练习获得专业的、数据驱动的、个性化的指导，以实现能力的实质性提升。</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb className="h-5 w-5 text-blue-600" />
                    <h3 className="font-semibold text-base">核心功能</h3>
                  </div>
                  <ul className="text-muted-foreground list-disc pl-4 space-y-2">
                    <li>
                      <strong className="text-gray-900">智能题库系统</strong>：涵盖产品思维、AI技术理解、用户洞察等维度
                    </li>
                    <li>
                      <strong className="text-gray-900">AI反馈引擎</strong>：实时分析面试表现，提供针对性改进建议
                    </li>
                    <li>
                      <strong className="text-gray-900">模拟面试场景</strong>：还原真实面试环境，提升应试能力
                    </li>
                    <li>
                      <strong className="text-gray-900">学习路径规划</strong>：基于能力评估的个性化提升方案
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="h-5 w-5 text-blue-600" />
                    <h3 className="font-semibold text-base">我的贡献</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                      <div className="text-sm font-medium text-indigo-800 mb-2">产品策略</div>
                      <ul className="text-sm text-indigo-700 list-disc pl-4 space-y-1">
                        <li>用户需求调研与画像构建</li>
                        <li>产品功能规划与优先级排序</li>
                        <li>竞品分析与差异化定位</li>
                      </ul>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                      <div className="text-sm font-medium text-indigo-800 mb-2">AI应用设计</div>
                      <ul className="text-sm text-indigo-700 list-disc pl-4 space-y-1">
                        <li>AI反馈机制逻辑设计</li>
                        <li>题库内容策划与分类体系</li>
                        <li>用户体验流程优化迭代</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-blue-200">
                <h3 className="font-semibold text-base mb-3">AI产品经理核心能力体现</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-300/50 font-medium">
                    AI产品规划
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-300/50 font-medium">
                    用户需求洞察
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-300/50 font-medium">
                    AI技术理解
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-300/50 font-medium">
                    数据驱动决策
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-300/50 font-medium">
                    跨团队协作
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-300/50 font-medium">
                    产品迭代优化
                  </Badge>
                </div>
              </div>
              <div className="mt-6 text-right">
                <Button asChild variant="outline">
                  <a href="https://blog.ofwillow.work/" target="_blank" rel="noopener noreferrer">
                    访问产品网站
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* 校园活动策划与执行 */}
          <Card className="border-orange-200/30 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-orange-600" />
                  <h2 className="text-xl font-semibold">校园活动策划与执行：项目管理实践</h2>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline" className="border-orange-200/50 bg-orange-50 text-orange-700 text-xs">
                    2021.10-2022.6
                  </Badge>
                  <Badge variant="outline" className="border-purple-200/50 bg-purple-50 text-purple-700 text-xs">
                    项目管理
                  </Badge>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="h-4 w-4 text-orange-600" />
                    <h3 className="font-medium text-sm">核心职责</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    担任易班办公室成员，共同完成"追思先烈"和"送祝福"两大校级活动策划执行。
                  </p>
                  <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                    <li>全流程项目管理与团队协作</li>
                    <li>活动现场秩序维护与应急处理</li>
                    <li>策划书撰写（流程、物资、预算）</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-4 w-4 text-orange-600" />
                    <h3 className="font-medium text-sm">创新设计</h3>
                  </div>
                  <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                    <li>
                      <strong>追思先烈</strong>：线上知识普及报名 + 线下纪念仪式
                    </li>
                    <li>
                      <strong>送祝福</strong>：搭建线上祝福墙互动平台
                    </li>
                    <li>成功分流超预期人流，协调环节衔接</li>
                    <li>后期反馈收集与总结报告撰写</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-4 w-4 text-orange-600" />
                    <h3 className="font-medium text-sm">量化成果</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-orange-50 p-3 rounded-lg border border-orange-100">
                      <div className="text-lg font-semibold text-orange-700">800+</div>
                      <div className="text-xs text-orange-600">追思先烈活动参与人数</div>
                      <div className="text-xs text-muted-foreground">获校领导高度评价</div>
                    </div>
                    <div className="bg-orange-50 p-3 rounded-lg border border-orange-100">
                      <div className="text-lg font-semibold text-orange-700">600+ | 80%+</div>
                      <div className="text-xs text-orange-600">送祝福活动参与 | 满意度</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <h3 className="font-medium text-sm mb-2">AI产品经理能力映射</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-orange-50 text-orange-700 border-orange-200/50 text-xs">
                    项目管理
                  </Badge>
                  <Badge variant="secondary" className="bg-orange-50 text-orange-700 border-orange-200/50 text-xs">
                    跨团队协作
                  </Badge>
                  <Badge variant="secondary" className="bg-orange-50 text-orange-700 border-orange-200/50 text-xs">
                    用户体验设计
                  </Badge>
                  <Badge variant="secondary" className="bg-orange-50 text-orange-700 border-orange-200/50 text-xs">
                    数据分析复盘
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 英语教学实践 */}
          <Card className="border-green-200/30 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-green-600" />
                  <h2 className="text-xl font-semibold">英语教学实践：个性化产品设计</h2>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline" className="border-green-200/50 bg-green-50 text-green-700 text-xs">
                    2024.5-6
                  </Badge>
                  <Badge variant="outline" className="border-blue-200/50 bg-blue-50 text-blue-700 text-xs">
                    用户教育
                  </Badge>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="h-4 w-4 text-green-600" />
                    <h3 className="font-medium text-sm">挑战与目标</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    延安大学附属中学初中英语教师，负责两个班级100名学生教学。
                  </p>
                  <div className="bg-red-50 p-3 rounded-lg border border-red-100 mb-3">
                    <div className="text-xs font-medium text-red-700 mb-1">核心挑战</div>
                    <ul className="text-xs text-red-600 list-disc pl-3 space-y-1">
                      <li>学生英语水平参差不齐</li>
                      <li>口语写作能力薄弱、信心不足</li>
                      <li>两个月内全面提升五大模块</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-4 w-4 text-green-600" />
                    <h3 className="font-medium text-sm">创新方法</h3>
                  </div>
                  <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                    <li>
                      <strong>分层教学</strong>：摸底分三层，布置分层作业
                    </li>
                    <li>
                      <strong>混合学习</strong>：组建混合学习小组
                    </li>
                    <li>
                      <strong>互动课堂</strong>：情景模拟、小组讨论
                    </li>
                    <li>
                      <strong>多媒体融合</strong>：游戏化学习资源
                    </li>
                    <li>
                      <strong>个性化辅导</strong>：落后生一对一指导
                    </li>
                    <li>
                      <strong>家校合力</strong>：与家长沟通协作
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <h3 className="font-medium text-sm">显著成果</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                      <div className="text-lg font-semibold text-green-700">+20%</div>
                      <div className="text-xs text-green-600">班级平均分提升</div>
                      <div className="text-xs text-muted-foreground">超越年级平均水平</div>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                      <div className="text-xs font-medium text-green-700 mb-1">能力提升</div>
                      <div className="text-xs text-green-600">课堂参与度↑ 口语自信↑</div>
                      <div className="text-xs text-green-600">写作词汇句式更丰富</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <h3 className="font-medium text-sm mb-2">AI产品经理能力映射</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200/50 text-xs">
                    用户分层运营
                  </Badge>
                  <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200/50 text-xs">
                    个性化推荐
                  </Badge>
                  <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200/50 text-xs">
                    用户教育设计
                  </Badge>
                  <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200/50 text-xs">
                    效果评估优化
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 医疗导诊志愿服务 */}
          <Card className="border-purple-200/30 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-purple-600" />
                  <h2 className="text-xl font-semibold">医疗导诊志愿服务：用户体验优化</h2>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline" className="border-purple-200/50 bg-purple-50 text-purple-700 text-xs">
                    2023.10-12
                  </Badge>
                  <Badge variant="outline" className="border-pink-200/50 bg-pink-50 text-pink-700 text-xs">
                    用户服务
                  </Badge>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="h-4 w-4 text-purple-600" />
                    <h3 className="font-medium text-sm">问题识别</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    延安大学附属医院导医导诊志愿者，协助大量患者完成就医流程。
                  </p>
                  <div className="bg-red-50 p-3 rounded-lg border border-red-100 mb-3">
                    <div className="text-xs font-medium text-red-700 mb-1">核心痛点</div>
                    <ul className="text-xs text-red-600 list-disc pl-3 space-y-1">
                      <li>患者排队时间长，效率低</li>
                      <li>就医流程不熟悉</li>
                      <li>焦虑情绪需要疏导</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-4 w-4 text-purple-600" />
                    <h3 className="font-medium text-sm">服务策略</h3>
                  </div>
                  <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                    <li>
                      <strong>主动服务</strong>：迎候患者并精准指引
                    </li>
                    <li>
                      <strong>流程优化</strong>：详细讲解，协助操作
                    </li>
                    <li>
                      <strong>情感支持</strong>：安抚焦虑，提供心理支持
                    </li>
                    <li>
                      <strong>个性化帮助</strong>：识别特殊需求
                    </li>
                    <li>
                      <strong>应急处理</strong>：协调解决突发问题
                    </li>
                    <li>
                      <strong>持续学习</strong>：主动学习提供准确指导
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-4 w-4 text-purple-600" />
                    <h3 className="font-medium text-sm">服务成果</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-purple-50 p-3 rounded-lg border border-purple-100">
                      <div className="text-lg font-semibold text-purple-700">200+</div>
                      <div className="text-xs text-purple-600">患者服务总数</div>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg border border-purple-100">
                      <div className="text-lg font-semibold text-purple-700">-5min</div>
                      <div className="text-xs text-purple-600">平均缩短就诊时间</div>
                      <div className="text-xs text-muted-foreground">缓解医院拥堵</div>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg border border-purple-100">
                      <div className="text-xs font-medium text-purple-700 mb-1">体验提升</div>
                      <div className="text-xs text-purple-600">患者满意度↑ 抱怨减少</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <h3 className="font-medium text-sm mb-2">AI产品经理能力映射</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-purple-50 text-purple-700 border-purple-200/50 text-xs">
                    用户需求洞察
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-50 text-purple-700 border-purple-200/50 text-xs">
                    服务流程优化
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-50 text-purple-700 border-purple-200/50 text-xs">
                    用户情感理解
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-50 text-purple-700 border-purple-200/50 text-xs">
                    问题解决能力
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
