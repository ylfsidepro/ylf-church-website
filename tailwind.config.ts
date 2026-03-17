import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'divine-purple': '#6b4ba1',
        'holy-gold':     '#f4a535',
        'spirit-blue':   '#4a90e2',
        'deep-indigo':   '#3d2c5c',
        'soft-lavender': '#d6c7e3',
        'lavender-light':'#f0eaf8',
        'cream':         '#fdfaf5',
        'gold-dark':     '#c47e15',
        'purple-light':  '#8b6bbf',
      },
      fontFamily: {
        serif:  ['Playfair Display', 'Georgia', 'serif'],
        display:['Cormorant Garamond', 'Georgia', 'serif'],
        sans:   ['Jost', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up':    'fadeUp 0.7s ease forwards',
        'fade-in':    'fadeIn 0.6s ease forwards',
        'shimmer':    'shimmer 2s ease-in-out infinite',
        'float':      'floatY 4s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease infinite',
        'rotate-slow':'rotateSlow 80s linear infinite',
      },
      keyframes: {
        fadeUp:    { from:{opacity:'0',transform:'translateY(28px)'}, to:{opacity:'1',transform:'translateY(0)'} },
        fadeIn:    { from:{opacity:'0'}, to:{opacity:'1'} },
        shimmer:   { '0%,100%':{opacity:'0.4'},'50%':{opacity:'0.9'} },
        floatY:    { '0%,100%':{transform:'translateY(0)'},'50%':{transform:'translateY(-12px)'} },
        glowPulse: { '0%,100%':{boxShadow:'0 0 20px rgba(244,165,53,0.3)'},'50%':{boxShadow:'0 0 50px rgba(244,165,53,0.7)'} },
        rotateSlow:{ from:{transform:'rotate(0deg)'}, to:{transform:'rotate(360deg)'} },
      },
      backgroundImage: {
        'hero-gradient':   'linear-gradient(145deg, #1a0f30 0%, #3d2c5c 40%, #5c3a8a 70%, #2a1a4a 100%)',
        'purple-gradient': 'linear-gradient(135deg, #6b4ba1, #3d2c5c)',
        'gold-gradient':   'linear-gradient(135deg, #f4a535, #c47e15)',
      },
    },
  },
  plugins: [],
}

export default config
