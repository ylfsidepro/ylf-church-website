interface CardProps {
  children:    React.ReactNode
  className?:  string
  hover?:      boolean
  accentColor?:string
}

export function Card({ children, className = '', hover = true, accentColor }: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl p-6 border border-[rgba(107,75,161,0.1)] transition-all duration-300 relative overflow-hidden ${hover ? 'hover:-translate-y-1 cursor-default' : ''} ${className}`}
      style={{ boxShadow:'0 2px 20px rgba(107,75,161,0.07)' }}
    >
      {/* Bottom accent line on hover */}
      {accentColor && (
        <div className="absolute bottom-0 left-0 right-0 h-[3px] transition-transform duration-300 origin-left scale-x-0 hover:scale-x-100"
          style={{ background: accentColor }} />
      )}
      {children}
    </div>
  )
}
