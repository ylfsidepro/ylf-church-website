'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface Message {
  id: number
  role: 'bot' | 'user'
  text: string
  link?: { label: string; href: string }
}

const RESPONSES = [
  { keywords:['bible study','bible','scripture','study'], reply:'📖 Bible Study meets weekly on Zoom!', link:{ label:'Learn More', href:'/bible-study' } },
  { keywords:['event','events','upcoming'], reply:'📅 Check out our upcoming events!', link:{ label:'See Events', href:'/events' } },
  { keywords:['prayer','pray'], reply:'🙏 We would love to pray for you!', link:{ label:'Prayer Request', href:'/connect' } },
  { keywords:['hello','hi','hey'], reply:"👋 Hello! Welcome to YLF — how can I help you?" },
]

const FALLBACK = '😊 Please visit Connect page for help. God bless you! 🙏'

function getReply(input: string) {
  const lower = input.toLowerCase()
  for (const r of RESPONSES) {
    if (r.keywords.some(k => lower.includes(k))) return { text: r.reply, link: r.link }
  }
  return { text: FALLBACK, link: { label: 'Connect', href: '/connect' } }
}

let msgId = 0

// ✅ IMAGE ANGEL ICON (FROM PUBLIC FOLDER)
const AngelIcon = () => (
  <Image
    src="/images/angel.jpg"
    alt="Angel Icon"
    width={26}
    height={26}
    className="rounded-full object-cover"
  />
)

export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, role: 'bot', text: "Hello! 👋 Welcome to YLF Assistant" }
  ])
  const [badge, setBadge] = useState(true)

  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  function send() {
    if (!input.trim()) return

    const userMsg: Message = { id: ++msgId, role: 'user', text: input }
    const res = getReply(input)
    const botMsg: Message = { id: ++msgId, role: 'bot', text: res.text, link: res.link }

    setMessages(prev => [...prev, userMsg, botMsg])
    setInput('')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">

      {/* Chat box */}
      {open && (
        <div className="w-[320px] rounded-2xl overflow-hidden shadow-2xl border bg-white">

          {/* Header */}
          <div className="flex items-center gap-3 p-3 text-white"
            style={{ background: 'linear-gradient(135deg,#9b2335,#5a0f1a)' }}>

            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10">
              <AngelIcon />
            </div>

            <div>
              <p className="text-sm font-semibold">YLF Assistant</p>
              <p className="text-xs opacity-70">Loving God · Loving People</p>
            </div>
          </div>

          {/* Messages */}
          <div className="p-3 h-[300px] overflow-y-auto bg-gray-50 flex flex-col gap-2">
            {messages.map(m => (
              <div
                key={m.id}
                className={`text-xs p-2 rounded-lg max-w-[85%] ${
                  m.role === 'user'
                    ? 'ml-auto text-white'
                    : 'bg-white border'
                }`}
                style={m.role === 'user' ? { background: '#9b2335' } : {}}
              >
                <div>{m.text}</div>

                {m.link && m.role === 'bot' && (
                  <Link
                    href={m.link.href}
                    className="text-[11px] font-semibold mt-1 block"
                    style={{ color: '#9b2335' }}
                    onClick={() => setOpen(false)}
                  >
                    {m.link.label} →
                  </Link>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="flex p-2 border-t gap-2">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              className="flex-1 text-xs border rounded px-2 py-1"
              placeholder="Type message..."
            />
            <button
              onClick={send}
              className="px-3 rounded text-white text-xs"
              style={{ background: '#9b2335' }}
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => {
          setOpen(o => !o)
          setBadge(false)
        }}
        className="w-[54px] h-[54px] rounded-2xl flex items-center justify-center text-white relative"
        style={{ background: 'linear-gradient(135deg,#9b2335,#5a0f1a)' }}
      >
        {badge && (
          <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
            1
          </span>
        )}

        {open ? (
          <span className="text-lg">✕</span>
        ) : (
          <AngelIcon />
        )}
      </button>
    </div>
  )
}