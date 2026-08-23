import React from 'react'
import { ArrowRight, ArrowDown } from 'lucide-react'

const STEPS = [
  { title: 'Copy the YouTube link', body: 'From the app, the browser bar, or the share menu.' },
  { title: 'Paste it above', body: 'The link is checked as soon as you paste it.' },
  { title: 'Download the thumbnail', body: 'Pick a quality and save it.' },
]

export default function HowItWorks() {
  return (
    // Scaled padding up to perfectly match the 1.25x layout (py-[60px] and py-[70px])
    <section id="how-it-works" className="px-5 sm:px-6 py-[60px] sm:py-[70px] border-t border-line">
      <div className="max-w-content mx-auto">
        
        {/* Scaled section heading from 13px to 16px */}
        <h2 className="text-[16px] font-medium text-ink-muted uppercase tracking-wide mb-10">
          How it works
        </h2>

        {/* Switched to flex to easily inject the arrows between elements */}
        <div className="flex flex-col sm:flex-row sm:items-start w-full">
          {STEPS.map((step, index) => (
            <React.Fragment key={index}>
              
              {/* Interactive Step Block */}
              <div className="flex-1 group cursor-default">
                {/* Scaled title to 19px. Added a smooth hover transition to the accent color */}
                <h3 className="text-[19px] font-medium text-ink transition-colors duration-300 group-hover:text-accent">
                  {step.title}
                </h3>
                {/* Scaled body text to 17.5px */}
                <p className="mt-2.5 text-[17.5px] text-ink-muted leading-relaxed">
                  {step.body}
                </p>
              </div>

              {/* Flow Arrows replacing the numbers */}
              {index < STEPS.length - 1 && (
                <>
                  {/* Right-pointing arrow for Desktop layout */}
                  <div className="hidden sm:flex shrink-0 items-start justify-center px-6 lg:px-12 pt-1.5">
                    <ArrowRight size={24} strokeWidth={2} className="text-ink-faint opacity-50" />
                  </div>
                  
                  {/* Down-pointing arrow for Mobile layout */}
                  <div className="flex sm:hidden py-6">
                    <ArrowDown size={24} strokeWidth={2} className="text-ink-faint opacity-50" />
                  </div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
        
      </div>
    </section>
  )
}