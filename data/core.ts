export type Capability = {
  id: string
  name: string
  chain: "humanities" | "tech"
  source: string
  transform: string
  level: number
  relatedProjectIds: string[]
  metrics?: string[]
  blogExcerpt?: string
  decodeViz?: string
  core?: boolean
}

export type Project = {
  id: string
  title: string
  summary: string
  details: string[]
  outcomes: string[]
  date?: string
  type: "概念设计" | "流程优化" | "研究分析" | "文档示例"
  cover: string
  relatedCapabilities: string[]
}

export type Post = {
  slug: string
  title: string
  summary: string
  date: string
  tags: string[]
  content: string
}

export const identity = {
  valueStatement:
    "英语专业背景带来的语言敏感度与跨文化沟通能力，转化为医疗AI产品中的用户需求解码与可理解性设计，打造有温度的智能体验。",
  slogan: "AI产品不是技术炫技，而是解决真问题的翻译器",
  tags: ["逻辑者", "细节控", "实干家", "人文温度倡导者"],
  radar: [90, 85, 75],
  contact: {
    email: "yifan.wang@example.com",
  },
}

export const radarData = [
  { label: "AI产品规划", value: 90 },
  { label: "用户需求洞察", value: 85 },
  { label: "跨团队协作", value: 88 },
]

export const capabilityPoints: Capability[] = [
  // Humanities chain
  {
    id: "c1",
    name: "跨文化沟通→用户需求洞察",
    chain: "humanities",
    source: "英语专业训练",
    transform: "识别不同背景用户的语言习惯与暗含意图，转化为清晰的用户需求与任务。",
    level: 90,
    relatedProjectIds: ["p1", "p2"],
    core: true,
  },
  {
    id: "c2",
    name: "语言精准度→需求文档撰写",
    chain: "humanities",
    source: "语言规范与修辞",
    transform: "将模糊表述转译为结构化、可执行的PRD与验收标准。",
    level: 85,
    relatedProjectIds: ["p2", "p3"],
  },
  {
    id: "c3",
    name: "文学分析→用户心理捕捉",
    chain: "humanities",
    source: "文本分析方法",
    transform: "从用户话术中识别焦虑与关注点，优化交互语气与信息组织。",
    level: 82,
    relatedProjectIds: ["p1"],
  },
  {
    id: "c4",
    name: "语言习惯敏感度→产品本地化",
    chain: "humanities",
    source: "跨文化语用",
    transform: "将专业术语用用户语言重述，提升可理解性与可获得性。",
    level: 80,
    relatedProjectIds: ["p3"],
  },
  {
    id: "c5",
    name: "英语教学→用户教育设计",
    chain: "humanities",
    source: "教学分层",
    transform: "分层教育策略用于新手引导与说明内容设计。",
    level: 78,
    relatedProjectIds: ["p2"],
  },

  // Tech chain
  {
    id: "t1",
    name: "用户旅程设计→流程优化",
    chain: "tech",
    source: "CX/UX 方法",
    transform: "端到端旅程图识别瓶颈，提出可落地的流程与界面优化。",
    level: 85,
    relatedProjectIds: ["p1"],
    core: true,
  },
  {
    id: "t2",
    name: "需求优先级→MVP设计",
    chain: "tech",
    source: "Kano/ICE",
    transform: "以影响与可行性排序，快速构建可验证的MVP。",
    level: 80,
    relatedProjectIds: ["p3"],
  },
  {
    id: "t3",
    name: "医疗场景理解→边界设定",
    chain: "tech",
    source: "临床流程",
    transform: "对风险场景设定清晰的AI使用边界与转人工策略。",
    level: 83,
    relatedProjectIds: ["p1"],
  },
  {
    id: "t4",
    name: "技术可行性评估→方案选择",
    chain: "tech",
    source: "AI基础",
    transform: "在体验目标与技术约束间做合理折衷，选择合适模型与实现。",
    level: 75,
    relatedProjectIds: ["p2"],
  },
  {
    id: "t5",
    name: "数据驱动思维→产品迭代",
    chain: "tech",
    source: "指标体系",
    transform: "以可解释性、可用性与安全性指标指导迭代。",
    level: 78,
    relatedProjectIds: ["p3"],
  },
]

export const projects: Project[] = [
  {
    id: "p1",
    title: "医疗场景中的用户痛点解码：从语言习惯到流程优化",
    summary: "在导医志愿服务中，构建患者语言→系统语言映射，提出等候引导与信息提示优化，缩短平均等待时间约5分钟/人。",
    details: ["建立患者常见话术库并标注意图与情绪", "重构就诊指引文案与动线标识", "提出转人工与分流策略"],
    outcomes: ["200+患者服务", "平均等待时间缩短≈5分钟/人"],
    type: "流程优化",
    cover: "/hospital-navigation-improvement.png",
    relatedCapabilities: ["c1", "c3", "t1", "t3"],
  },
  {
    id: "p2",
    title: "分层教学思维在产品设计中的应用：识别不同用户需求",
    summary: "将教学分层策略迁移到产品新手引导与帮助体系，提升用户理解与参与度。",
    details: ["基于能力分层设计引导路径", "撰写高精度PRD与验收条款", "建立术语卡与风险提示模版"],
    outcomes: ["平均分提升20%", "参与度显著提升"],
    type: "概念设计",
    cover: "/education-product-design-onboarding.png",
    relatedCapabilities: ["c2", "c5", "t4"],
  },
  {
    id: "p3",
    title: "校园活动策划与执行：从项目管理到产品思维实践",
    summary: "担任易班办公室成员期间，独立主导追思先烈送祝福两大校级活动，运用产品思维进行全流程项目管理。",
    details: [
      "线上线下融合设计：追思先烈采用线上知识普及+线下纪念仪式，送祝福搭建线上祝福墙",
      "全流程项目管理：撰写详细策划书（含流程、物资、预算），协调团队确定主题形式",
      "现场执行与应变：负责活动现场秩序维护、流程管控及突发状况应对，成功分流超预期人流",
      "数据收集与复盘：后期收集用户反馈，参与总结报告撰写，形成可复用的活动模板",
    ],
    outcomes: [
      "追思先烈活动：800+学生参与，获校领导高度评价",
      "送祝福活动：600+学生参与，满意度超80%",
      "个人能力提升：活动策划、组织协调、团队协作及现场应变能力显著提升",
    ],
    date: "2021-10-2022-06",
    type: "研究分析",
    cover: "/hybrid-event-design-mvp.png",
    relatedCapabilities: ["t2", "t5", "c4"],
  },
]

export const posts: Post[] = [
  {
    slug: "ai-product-as-translator",
    title: "AI产品是技术与用户的翻译器",
    summary: "从语言学视角看AI产品：把模型能力翻译成用户可理解的价值。",
    date: "2025-08-01",
    tags: ["产品思考", "人文视角"],
    content: `在英语学习中，我们不断进行意义的转译。AI产品亦然：把复杂的模型能力转译成用户可理解、可信任、可操作的体验……`,
  },
  {
    slug: "human-warmth-in-med-ai",
    title: "医疗AI需要的人文温度",
    summary: "为什么准确性之外，还需要同理心与可解释性。",
    date: "2025-07-18",
    tags: ["医疗AI", "可解释性"],
    content: `在导医志愿者经历中，我感受到语言如何影响患者决策与情绪。将其转化为产品设计，就是把术语过载转译为层级化解释……`,
  },
  {
    slug: "mvp-in-healthcare",
    title: "医疗场景里的MVP思维",
    summary: "用MVP验证真需求，而不是堆砌功能。",
    date: "2025-07-02",
    tags: ["MVP", "流程"],
    content: `医疗产品的MVP需要兼顾安全与有效性。我的做法是从高风险触点退避，优先验证可解释与可用性……`,
  },
]
