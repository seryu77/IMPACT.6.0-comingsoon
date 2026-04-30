"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import BlurText from "@/components/blur-text"

export default function ComingSoonPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100)
  }, [])

  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/background.webp"
        alt="Background"
        fill
        priority
        className="object-cover object-center blur-[3.25px] scale-105"
      />

      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Fog layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Fog layer 1 - bottom */}
        <div
          className="absolute bottom-0 left-0 w-[200%] h-[30%] animate-fog-1"
          style={{
            background: "linear-gradient(to top, rgba(100, 120, 140, 0.4) 0%, transparent 100%)",
            filter: "blur(20px)",
          }}
        />
        {/* Fog layer 2 - middle */}
        <div
          className="absolute top-[40%] left-0 w-[200%] h-[25%] animate-fog-2"
          style={{
            background: "linear-gradient(to bottom, transparent 0%, rgba(80, 100, 120, 0.3) 50%, transparent 100%)",
            filter: "blur(30px)",
          }}
        />
        {/* Fog layer 3 - top accent */}
        <div
          className="absolute top-[20%] left-0 w-[200%] h-[20%] animate-fog-3"
          style={{
            background: "linear-gradient(to bottom, transparent 0%, rgba(120, 140, 160, 0.25) 50%, transparent 100%)",
            filter: "blur(25px)",
          }}
        />
      </div>

      {/* Moving clouds */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Cloud 1 - left to right, fast */}
        <div
          className="absolute top-[5%] w-[300px] h-[80px] animate-cloud-ltr-fast opacity-40"
          style={{
            background: "radial-gradient(ellipse at center, rgba(180, 190, 200, 0.6) 0%, rgba(150, 160, 170, 0.3) 40%, transparent 70%)",
            filter: "blur(15px)",
            borderRadius: "50%",
          }}
        />
        {/* Cloud 2 - right to left, fast */}
        <div
          className="absolute top-[15%] w-[400px] h-[100px] animate-cloud-rtl-fast opacity-35"
          style={{
            background: "radial-gradient(ellipse at center, rgba(160, 170, 180, 0.5) 0%, rgba(140, 150, 160, 0.2) 50%, transparent 70%)",
            filter: "blur(20px)",
            borderRadius: "50%",
          }}
        />
        {/* Cloud 3 - left to right, medium */}
        <div
          className="absolute top-[25%] w-[250px] h-[70px] animate-cloud-ltr-medium opacity-35"
          style={{
            background: "radial-gradient(ellipse at center, rgba(170, 180, 190, 0.5) 0%, rgba(150, 160, 170, 0.25) 45%, transparent 70%)",
            filter: "blur(12px)",
            borderRadius: "50%",
            animationDelay: "-5s",
          }}
        />
        {/* Cloud 4 - right to left, medium */}
        <div
          className="absolute top-[8%] w-[350px] h-[90px] animate-cloud-rtl-medium opacity-30"
          style={{
            background: "radial-gradient(ellipse at center, rgba(190, 200, 210, 0.5) 0%, transparent 60%)",
            filter: "blur(18px)",
            borderRadius: "50%",
            animationDelay: "-8s",
          }}
        />
        {/* Cloud 5 - left to right, fast with delay */}
        <div
          className="absolute top-[20%] w-[280px] h-[75px] animate-cloud-ltr-fast opacity-30"
          style={{
            background: "radial-gradient(ellipse at center, rgba(175, 185, 195, 0.5) 0%, transparent 65%)",
            filter: "blur(14px)",
            borderRadius: "50%",
            animationDelay: "-10s",
          }}
        />
      </div>

      {/* Centered container for logo and IMPACT 6.0 */}
      <div className="relative z-10 flex flex-col items-center justify-center -mt-12 md:-mt-24">
        {/* Subtle glow behind logo */}
        <div className="absolute w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-red-500/20 rounded-full blur-3xl" />

        {/* Logo */}
        <div
          className={`relative transition-all duration-1000 ease-out ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-16 opacity-0"
            }`}
        >
          <div className="group cursor-pointer animate-subtle-bounce hover:[animation-play-state:paused]">
            {/* Glow effect - always visible, brighter on hover */}
            <div className="absolute inset-0 bg-red-500/30 rounded-full blur-2xl scale-110 transition-all duration-300 group-hover:bg-red-400/50 group-hover:scale-125" />
            <Image
              src="/images/impact-logo.png"
              alt="IMPACT Logo"
              width={320}
              height={320}
              priority
              className="drop-shadow-[0_0_15px_rgba(185,28,28,0.4)] relative transition-all duration-300 ease-out group-hover:scale-110 group-hover:drop-shadow-[0_0_35px_rgba(185,28,28,0.7)] w-[220px] h-[220px] md:w-[320px] md:h-[320px]"
            />
          </div>
        </div>

        {/* IMPACT 6.0 text - below the main logo */}
        <div
          className={`relative -mt-4 transition-all duration-1000 delay-100 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
            }`}
        >
          {/* Subtle yellow glow behind IMPACT 6.0 */}
          <div className="absolute inset-0 bg-yellow-400/30 rounded-full blur-2xl scale-125" />
          <Image
            src="/images/Impact-teks.PNG"
            alt="IMPACT 6.0"
            width={400}
            height={100}
            priority
            className="relative drop-shadow-[0_0_25px_rgba(234,179,8,0.5)] w-[280px] md:w-[400px] h-auto"
          />
        </div>
      </div>

      {/* Text below logo with BlurText animation */}
      <div
        className={`relative z-10 mt-4 md:mt-8 px-4 transition-all duration-1000 delay-200 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          }`}
      >
        <div className="relative">
          {/* Yellow glow behind text */}
          <div className="absolute inset-0 bg-yellow-500/25 rounded-full blur-2xl scale-125" />
          <BlurText
            text="PREPARE YOURSELF, IT'S COMING!!"
            delay={80}
            animateBy="letters"
            direction="bottom"
            className="relative text-xl sm:text-2xl md:text-4xl font-bold tracking-wider text-[#D4AF37] font-serif text-center drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]"
            stepDuration={0.4}
          />
        </div>
      </div>

      {/* Bottom decorative element */}
      <div
        className={`absolute bottom-8 flex flex-col items-center gap-2 transition-all duration-1000 delay-500 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
      >
        <div className="w-px h-12 bg-gradient-to-b from-red-700/60 to-transparent" />
        <p className="text-white/70 text-sm tracking-widest uppercase font-light">Stay Tuned</p>
      </div>
    </main>
  )
}
