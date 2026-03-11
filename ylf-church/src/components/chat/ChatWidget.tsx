'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

interface Message {
  id:   number
  role: 'bot' | 'user'
  text: string
  link?: { label: string; href: string }
}

// Keyword → response map
const RESPONSES: { keywords: string[]; reply: string; link?: { label: string; href: string } }[] = [
  { keywords:['bible study','bible','scripture','study'],  reply:'📖 Bible Study meets weekly on Zoom! Join us as we dig into the Word together.', link:{ label:'Learn More', href:'/bible-study' } },
  { keywords:['event','events','upcoming'],               reply:'📅 Check out our upcoming events — worship nights, retreats and more!',           link:{ label:'See Events', href:'/events' } },
  { keywords:['prayer','pray','intercession','request'],  reply:'🙏 We would be honoured to pray for you! Share your request on the Connect page and our team will cover you.',  link:{ label:'Prayer Request', href:'/connect' } },
  { keywords:['open home','open homes'],                  reply:'🏠 Open Homes are warm, intimate Zoom gatherings where connections thrive.',       link:{ label:'Discover More', href:'/activity-groups' } },
  { keywords:['five fold','apostle','prophet','evangel'], reply:'✨ The Five Fold — Apostle, Prophet, Evangelist, Pastor, Teacher.',               link:{ label:'Explore Ministry', href:'/five-fold' } },
  { keywords:['broadcast','sermon','watch','video','youtube'], reply:'📺 Watch our sermons & worship on the Broadcasting Ministry page.',          link:{ label:'Watch Now', href:'/activity-groups/broadcasting' } },
  { keywords:['join','how to join','membership','member'],reply:'❤️ We\'d love to have you! Fill out our Connect form and we\'ll be in touch.',      link:{ label:'Join YLF', href:'/connect' } },
  { keywords:['activity','group','groups','activities'],  reply:'🎯 We have 11 activity groups — Music, Worship, Intercession, Skit and more!',    link:{ label:'All Groups', href:'/activity-groups' } },
  { keywords:['worship'],                                 reply:'🎵 Worship is at the heart of YLF! Join our worship group and weekly sessions.',   link:{ label:'Activities', href:'/activity-groups' } },
  { keywords:['zoom'],                                    reply:'💻 Most gatherings are on Zoom — Bible Study, Open Homes & Activity Groups.',      link:{ label:'Register', href:'/connect' } },
  { keywords:['contact','email','phone','location'],      reply:'📬 Reach us via the Connect page or email: connect@ylfjamshedpur.com',             link:{ label:'Contact Us', href:'/connect' } },
  { keywords:['hi','hello','hey','greetings'],            reply:'👋 Hello! Welcome to Yeshua\'s Love Family — how can I help you today?' },
]

const FALLBACK = '😊 For more help, please visit our Connect page or email us at connect@ylfjamshedpur.com. God bless you! 🙏'

function getReply(input: string): Message['link'] extends undefined ? Omit<Message,'id'|'role'> : Omit<Message,'id'|'role'> {
  const lower = input.toLowerCase()
  for (const { keywords, reply, link } of RESPONSES) {
    if (keywords.some(k => lower.includes(k))) {
      return { text: reply, link }
    }
  }
  return { text: FALLBACK, link: { label: 'Connect Page', href: '/connect' } }
}

let msgCounter = 10

export function ChatWidget() {
  const [open,     setOpen]     = useState(false)
  const [input,    setInput]    = useState('')
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, role:'bot', text:"Hello! 👋 Welcome to Yeshua's Love Family. How can I help you today? Try asking about: Bible study, events, prayer, open homes, broadcasting…" },
  ])
  const [badge, setBadge] = useState(true)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior:'smooth' })
  }, [messages])

  function send() {
    const text = input.trim()
    if (!text) return
    const userMsg: Message = { id: ++msgCounter, role:'user', text }
    const { text: replyText, link } = getReply(text)
    const botMsg: Message  = { id: ++msgCounter, role:'bot', text: replyText, link }
    setMessages(prev => [...prev, userMsg, botMsg])
    setInput('')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Panel */}
      {open && (
        <div className="absolute bottom-[70px] right-0 w-[310px] rounded-2xl overflow-hidden flex flex-col shadow-2xl border"
          style={{ background:'#fff', borderColor:'rgba(107,75,161,0.15)', maxHeight:'420px', animation:'slideIn .3s ease' }}>

          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3"
            style={{ background:'linear-gradient(135deg,var(--divine-purple),var(--deep-indigo))' }}>
            <div className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{ background:'rgba(255,255,255,0.15)' }}>
              <svg width="18" height="18" viewBox="0 0 28 28" fill="none">
                <path d="M14 2L14 26M5 11L23 11" stroke="#f4a535" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">YLF Assistant</p>
              <p className="text-white/55 text-xs">Here to guide you ✦</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-3 py-3 flex flex-col gap-2"
            style={{ background:'var(--cream)' }}>
            {messages.map(msg => (
              <div key={msg.id}
                className={`max-w-[86%] px-3 py-2.5 rounded-xl text-xs leading-relaxed ${
                  msg.role === 'user'
                    ? 'self-end text-white rounded-tr-sm'
                    : 'self-start bg-white border rounded-tl-sm shadow-sm'
                }`}
                style={msg.role === 'user'
                  ? { background:'linear-gradient(135deg,var(--divine-purple),var(--deep-indigo))', borderColor:'transparent' }
                  : { borderColor:'rgba(107,75,161,0.12)' }}>
                <p>{msg.text}</p>
                {msg.role === 'bot' && msg.link && (
                  <Link href={msg.link.href}
                    className="inline-block mt-1.5 font-semibold no-underline text-xs"
                    style={{ color:'var(--divine-purple)' }}
                    onClick={() => setOpen(false)}>
                    {msg.link.label} →
                  </Link>
                )}
              </div>
            ))}
            <div ref={bottomRef}/>
          </div>

          {/* Input */}
          <div className="flex gap-2 p-2.5 border-t bg-white" style={{ borderColor:'rgba(107,75,161,0.1)' }}>
            <input
              className="flex-1 rounded-lg border px-3 py-2 text-xs outline-none"
              style={{ borderColor:'rgba(107,75,161,0.2)', fontFamily:'inherit' }}
              placeholder="Type a message…"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
            />
            <button
              onClick={send}
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors"
              style={{ background:'var(--divine-purple)' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => { setOpen(o => !o); setBadge(false) }}
        className="w-[54px] h-[54px] rounded-2xl flex items-center justify-center relative border-none cursor-pointer transition-all duration-300 hover:scale-105"
        style={{ background:'linear-gradient(135deg,var(--divine-purple),var(--deep-indigo))', boxShadow:'0 8px 30px rgba(107,75,161,0.45)' }}
        aria-label="Chat Assistant">
        {badge && (
          <span className="absolute -top-1.5 -right-1.5 w-4.5 h-4.5 rounded-full flex items-center justify-center text-[0.55rem] font-bold"
            style={{ background:'var(--holy-gold)', color:'var(--deep-indigo)', width:'18px', height:'18px' }}>1</span>
        )}
        {open
          ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          : <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
        }
      </button>

      <style>{`@keyframes slideIn{from{opacity:0;transform:translateX(20px)}to{opacity:1;transform:translateX(0)}}`}</style>
    </div>
  )
}
