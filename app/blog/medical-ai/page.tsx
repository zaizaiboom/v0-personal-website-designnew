import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Suspense } from "react"
import { Stethoscope } from "lucide-react"

export default function MedicalAIPage() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Suspense fallback={<div className="h-14 bg-background/90 backdrop-blur-md border-b border-border/50" />}>
        <SiteHeader />
      </Suspense>
      <main className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/blog">← 返回博客</Link>
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">医疗AI：未来的医生助理</h1>
          <div className="prose prose-lg max-w-none">
            <Card className="mb-8 border-blue-200/30 shadow-sm bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Stethoscope className="h-6 w-6 text-blue-600" />
                  什么是医疗AI？
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  简单来说，医疗AI就是将人工智能技术应用于医疗领域，解决各种问题。它涵盖的范围很广，主要分为以下几个方向：
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li><strong>辅助诊断：</strong> AI系统可以分析医学影像（如X光片、CT、MRI）或病理切片，快速识别出肉眼难以察觉的微小病变。例如，AI可以帮助医生更早地发现肺部结节或乳腺癌，大大提高诊断的准确性和效率。</li>
                  <li><strong>个性化治疗：</strong> AI可以分析大量的患者数据，包括基因信息、病史和生活方式等，为每个患者推荐最合适的治疗方案。这使得治疗更加精准，减少不必要的副作用，从而提升治疗效果。</li>
                  <li><strong>药物研发：</strong> 研发新药是一项耗时且成本高昂的工作。AI可以模拟分子结构，预测药物的潜在效果和毒性，从而加速新药的筛选过程，让更多有前景的药物更快地进入临床试验。</li>
                  <li><strong>医疗管理：</strong> AI也可以帮助医院优化管理流程，比如预测患者的住院时间、安排手术室排期、优化医疗资源分配等，从而提高医院的运营效率。</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="mb-8 border-blue-200/30 shadow-sm bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Stethoscope className="h-6 w-6 text-blue-600" />
                  医疗AI能取代医生吗？
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  这是一个很多人都会问的问题，答案是：不能，至少在可预见的未来是如此。
                </p>
                <p className="text-muted-foreground">
                  医疗AI是医生的强大助理，而不是替代者。AI擅长处理重复性、高数据量的工作，比如快速扫描成千上万张医学影像，从中找出可疑的模式。然而，医疗工作不仅仅是数据分析，它更关乎人。
                </p>
                <p className="text-muted-foreground">
                  医生需要与患者沟通，理解他们的担忧，提供情感上的支持，并在复杂的情况下做出综合性的判断。这些都需要同理心、批判性思维和丰富的临床经验，而这些是目前AI所不具备的。
                </p>
                <p className="text-muted-foreground">
                  医疗AI的目标是让医生有更多时间专注于与患者的交流和那些需要人类智慧的决策，而不是被繁重的数据分析工作所束缚。
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