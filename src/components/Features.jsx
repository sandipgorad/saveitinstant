
import { Image, Zap, UserX, MonitorSmartphone } from 'lucide-react'

const FEATURES = [
  { icon: Image, title: 'HD Quality', body: 'Get the highest quality thumbnails.' },
  { icon: Zap, title: 'Lightning Fast', body: 'Get your thumbnails in seconds.' },
  { icon: UserX, title: 'No Account', body: 'No signup required.' },
  { icon: MonitorSmartphone, title: 'Works Everywhere', body: 'Download from any device, any browser.',},
]

export default function Features() {
  return (
    <section className="px-5 sm:px-6 py-[60px] sm:py-[70px] border-t border-line">
      <div className="max-w-content mx-auto">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {FEATURES.map((feature) => {
            const Icon = feature.icon
            return (
              // Added flex and flex-col so the badge can be pushed to the bottom if text heights vary
              <div 
                key={feature.title} 
                className="bg-white rounded-2xl border border-line p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-tool group flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-paper flex items-center justify-center border border-line-soft mb-5 transition-colors group-hover:border-accent group-hover:text-accent">
                  <Icon size={22} className="text-ink-soft group-hover:text-accent transition-colors" />
                </div>
                
                <h3 className="text-[18px] font-medium text-ink">
                  {feature.title}
                </h3>
                
                {/* flex-1 ensures this paragraph takes up available space, pushing the badge down */}
                <p className="mt-2 text-[17px] text-ink-muted leading-relaxed flex-1">
                  {feature.body}
                </p>

                {/* Conditionally render the badge if it exists in the array */}
                {feature.badge && (
                  <div className="mt-6 self-start">
                    <span className="inline-flex items-center rounded-md bg-paper border border-line px-3 py-1 text-[14px] font-medium text-ink-soft">
                      {feature.badge}
                    </span>
                  </div>
                )}
              </div>
            )
          })}
        </div>
        
      </div>
    </section>
  )
}