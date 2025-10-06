import { z } from "zod"

export const promptSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  content: z.string(),
})

export type Prompt = z.infer<typeof promptSchema>

export const modelSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  strengths: z.string(),
})

export type Model = z.infer<typeof modelSchema>

export const presetSchema = z.object({
  id: z.string(),
  name: z.string(),
})

export type Preset = z.infer<typeof presetSchema>

export type ModelType = "text" | "chat"

export const models: Model[] = [
  {
    id: "c3cf1a07-8519-4592-a65c-1a82a057aa51",
    name: "GPT-4",
    description: "The most powerful model from OpenAI.",
    strengths: "Complex reasoning, understanding, and generation.",
  },
  {
    id: "c3cf1a07-8519-4592-a65c-1a82a057aa52",
    name: "GPT-3.5-turbo",
    description: "The fastest model from OpenAI.",
    strengths: "Speed, efficiency, and cost-effectiveness.",
  },
]

export const presets: Preset[] = [
  {
    id: "c3cf1a07-8519-4592-a65c-1a82a057aa51",
    name: "Default",
  },
  {
    id: "c3cf1a07-8519-4592-a65c-1a82a057aa52",
    name: "Custom",
  },
]