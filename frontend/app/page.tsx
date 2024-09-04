'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Home() {
  const [quality, setQuality] = useState(50)
  const [promptStrength, setPromptStrength] = useState(0.5)
  const [aspectRatio, setAspectRatio] = useState("16:9")
  const [imageFormat, setImageFormat] = useState("png")
  const [disableSafetyCheck, setDisableSafetyCheck] = useState(false)

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 flex flex-col items-center justify-center p-4">
      <main className="max-w-2xl w-full space-y-8">
        <h1 className="text-4xl font-bold text-center">
          Flux Uncensored Image Generator
        </h1>
        <div className="space-y-4">
          <Textarea 
            placeholder="Enter your prompt" 
            className="bg-zinc-800 border-zinc-700 text-zinc-100"
          />
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label htmlFor="quality-slider" className="block text-sm font-medium">
                Quality
              </label>
              <span className="text-sm font-medium">{quality}</span>
            </div>
            <Slider
              id="quality-slider"
              min={0}
              max={100}
              step={1}
              value={[quality]}
              onValueChange={(value) => setQuality(value[0])}
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label htmlFor="prompt-strength-slider" className="block text-sm font-medium">
                Prompt Strength
              </label>
              <span className="text-sm font-medium">{promptStrength.toFixed(2)}</span>
            </div>
            <Slider
              id="prompt-strength-slider"
              min={0}
              max={1}
              step={0.01}
              value={[promptStrength]}
              onValueChange={(value) => setPromptStrength(value[0])}
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="block text-sm font-medium">Aspect Ratio</label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="h-8 px-3 text-sm">
                    {aspectRatio}
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setAspectRatio("16:9")}>
                    16:9
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setAspectRatio("9:16")}>
                    9:16
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setAspectRatio("1:1")}>
                    1:1
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="block text-sm font-medium">Image Format</label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="h-8 px-3 text-sm">
                    {imageFormat}
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setImageFormat("jpg")}>
                    jpg
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setImageFormat("png")}>
                    png
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setImageFormat("webp")}>
                    webp
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="disable-safety" 
              checked={disableSafetyCheck}
              onCheckedChange={(checked) => setDisableSafetyCheck(checked as boolean)}
            />
            <label
              htmlFor="disable-safety"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Disable Safety Check
            </label>
          </div>
          <Button className="w-full bg-blue-600 hover:bg-blue-700">
            Generate Image
          </Button>
        </div>
        <div className="border-2 border-dashed border-zinc-700 rounded-lg p-4 text-center">
          Generated image will appear here
        </div>
      </main>
    </div>
  )
}
