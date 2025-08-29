"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export function MatchTest() {
  const [q1, setQ1] = useState<string>("")
  const [q2, setQ2] = useState<string>("")
  const [q3, setQ3] = useState<string>("")
  const [score, setScore] = useState<number | null>(null)

  function calc() {
    let s = 0
    if (q1 === "clinical") s += 35
    if (q1 === "patient") s += 30
    if (q2 === "ux") s += 35
    if (q2 === "explainable") s += 30
    if (q3 === "fast") s += 35
    if (q3 === "balanced") s += 30
    setScore(Math.min(100, s))
  }

  return (
    <div className="space-y-5">
      <div>
        <p className="font-medium mb-2">1. 您当前团队的主要关注点是？</p>
        <RadioGroup value={q1} onValueChange={setQ1}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem id="q1a" value="clinical" />
            <Label htmlFor="q1a">临床价值与可用性</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem id="q1b" value="patient" />
            <Label htmlFor="q1b">患者体验与可理解性</Label>
          </div>
        </RadioGroup>
      </div>

      <div>
        <p className="font-medium mb-2">2. 您最需要我在哪方面提供帮助？</p>
        <RadioGroup value={q2} onValueChange={setQ2}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem id="q2a" value="ux" />
            <Label htmlFor="q2a">UX策略与语言解码</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem id="q2b" value="explainable" />
            <Label htmlFor="q2b">可解释性与安全边界</Label>
          </div>
        </RadioGroup>
      </div>

      <div>
        <p className="font-medium mb-2">3. 团队对交付节奏的期望？</p>
        <RadioGroup value={q3} onValueChange={setQ3}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem id="q3a" value="fast" />
            <Label htmlFor="q3a">快速MVP验证</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem id="q3b" value="balanced" />
            <Label htmlFor="q3b">平衡质量与速度</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="flex items-center gap-3">
        <Button onClick={calc}>计算匹配度</Button>
        {score !== null && (
          <p className="text-sm">
            匹配度：<span className="font-semibold">{score}%</span> ——{" "}
            {score >= 80 ? "高度契合" : score >= 60 ? "较为匹配" : "可进一步沟通"}
          </p>
        )}
      </div>
    </div>
  )
}
