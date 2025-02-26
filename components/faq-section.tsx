"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "Can I use the image on multiple projects?",
    answer:
      "The ability to use an image on multiple projects depends on the license you purchase. Standard licenses typically allow use on multiple projects, while exclusive licenses may have more restrictions.",
  },
  {
    question: "Can I modify the image?",
    answer:
      "Minor modifications such as cropping, resizing, and color adjustments are generally allowed under most licenses. However, drastic alterations or using the image as part of a logo or trademark may not be permitted.",
  },
  {
    question: "Do I need to credit the photographer?",
    answer:
      "For standard licenses, crediting the photographer is appreciated but not required. For extended or exclusive licenses, crediting is typically not necessary. Always refer to your specific license agreement for attribution requirements.",
  },
  {
    question: "How do I get exclusive rights?",
    answer:
      "To obtain exclusive rights, press the 'Get Started' button, select the esclusive option and fill out the form. I will remove the image from my archive after an exclusive purchase. Once completed, the image will no longer be available for others to license.",
  },
  {
    question: "What happens if someone misuses an image?",
    answer:
      "I take copyright protection seriously. If you suspect misuse of an image, report it to us immediately. I have a dedicated team that investigates potential infringements and takes appropriate action, which may include issuing takedown notices, seeking damages, or pursuing legal action against the infringing party.",
  },
]

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <div className="w-full max-w-6xl mx-auto space-y-4 mt-20">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <Collapsible
          key={index}
          open={openItems.includes(index)}
          onOpenChange={() => toggleItem(index)}
          className="border rounded-xl border-neutral-800"
        >
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="flex items-center justify-between w-full p-4 text-left">
              <span className="font-bold text-lg">{item.question}</span>
              <ChevronDown
                className={`w-6 h-6 transition-transform duration-200 ${
                  openItems.includes(index) ? "transform rotate-180" : ""
                }`}
              />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="p-4 pt-4 text-md text-left text-neutral-500">{item.answer}</CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  )
}

