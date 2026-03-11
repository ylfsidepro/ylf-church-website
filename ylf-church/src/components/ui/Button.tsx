import Link from 'next/link'

interface ButtonProps {
  href?:      string
  onClick?:   () => void
  variant?:   'gold' | 'outline' | 'dark' | 'purple'
  size?:      'sm' | 'md' | 'lg'
  children:   React.ReactNode
  className?: string
  disabled?:  boolean
  type?:      'button' | 'submit' | 'reset'
  external?:  boolean
}

const VARIANTS = {
  gold:   { background:'linear-gradient(135deg,var(--holy-gold),#c47e15)',    color:'var(--deep-indigo)', border:'none' },
  outline:{ background:'transparent', color:'#fff',                           border:'2px solid rgba(255,255,255,0.3)' },
  dark:   { background:'var(--deep-indigo)',                                  color:'#fff', border:'none' },
  purple: { background:'linear-gradient(135deg,var(--divine-purple),var(--deep-indigo))', color:'#fff', border:'none' },
}
const SIZES = {
  sm:  'text-xs px-4 py-2',
  md:  'text-sm px-6 py-3',
  lg:  'text-base px-8 py-4',
}

export function Button({
  href, onClick, variant = 'gold', size = 'md', children, className = '',
  disabled = false, type = 'button', external = false,
}: ButtonProps) {
  const style = VARIANTS[variant]
  const sizeClass = SIZES[size]
  const base = `inline-flex items-center gap-2 font-semibold rounded-xl tracking-wide transition-all duration-300 hover:-translate-y-0.5 ${sizeClass} ${className}`

  if (href) {
    return (
      <Link href={href} target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={base} style={style}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled}
      className={`${base} disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none`}
      style={style}>
      {children}
    </button>
  )
}
