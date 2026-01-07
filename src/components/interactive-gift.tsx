"use client"

import { Button } from "./ui/button"
import { Gift } from "lucide-react"
import Letter from "./letter"
import type { InteractiveGiftProps } from "../types/birthday"

export default function InteractiveGift({ giftOpened, showLetter, onGiftClick }: Readonly<InteractiveGiftProps>) {
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      {!giftOpened ? (
        <GiftBox onGiftClick={onGiftClick} />
      ) : (
        <div className="w-full max-w-2xl">{showLetter && <Letter />}</div>
      )}
    </div>
  )
}

function GiftBox({ onGiftClick }: Readonly<{ onGiftClick: () => void }>) {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-4xl md:text-6xl font-bold text-white animate-pulse">🎂 Happy Birthday Sneha! 🎂</h1>
      <p className="text-xl text-white/90">Click the gift to open your surprise!</p>
      <Button
        onClick={onGiftClick}
        className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-8 py-6 text-xl rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 animate-bounce"
      >
        <Gift className="w-8 h-8 mr-3" />
        Open Your Gift!
      </Button>
    </div>
  )
}
