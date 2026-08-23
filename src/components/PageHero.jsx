export default function PageHero({ eyebrow, title, intro, children }) {
  return (
    // Scaled up vertical padding slightly to match the larger 1.25x layout
    <section className="px-5 sm:px-6 pt-12 sm:pt-[70px] pb-[50px] sm:pb-[60px]">
      <div className="max-w-content mx-auto">
        
        {/* Scaled inner wrapper from 720px to 900px to match the homepage Hero */}
        <div className="max-w-[900px]">
          
          {eyebrow && (
            // Scaled eyebrow text from 13px to 16px and bumped margin
            <p className="text-[16px] font-medium text-accent uppercase tracking-wide mb-3">
              {eyebrow}
            </p>
          )}
          
          {/* h1 automatically inherits the larger sizes we set in tailwind.config.js */}
          <h1 className="text-h1-mobile sm:text-h1 font-semibold text-ink">
            {title}
          </h1>
          
          {intro && (
            // Scaled text from 15.5px to 19px, and sm:text-base to sm:text-[20px]
            <p className="mt-4 text-[19px] sm:text-[20px] text-ink-muted leading-relaxed">
              {intro}
            </p>
          )}
          
          {children}
        </div>
      </div>
    </section>
  )
}