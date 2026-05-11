'use client'

import { useState } from 'react'
import type { ConnectFormData, ConnectFormResponse } from '@/types'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function ConnectForm() {
  const [status,  setStatus]  = useState<Status>('idle')
  const [message, setMessage] = useState('')
  const [form,    setForm]    = useState<ConnectFormData>({
    name: '', location: '', contact: '', prayerRequest: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    try {
      const res  = await fetch('/api/connect', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      })
      const data: ConnectFormResponse = await res.json()

      if (data.success) {
        setStatus('success')
        setMessage(data.message ?? 'Your message has been received!')
        setForm({ name:'', location:'', contact:'', prayerRequest:'' })
      } else {
        setStatus('error')
        setMessage(data.error ?? 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setMessage('Network error. Please check your connection and try again.')
    }
  }

  // Shared input styles
  const inputStyle: React.CSSProperties = {
    width:'100%', background:'rgba(255,255,255,0.08)',
    border:'1px solid rgba(255,255,255,0.15)', borderRadius:'10px',
    padding:'.75rem 1rem', color:'#fff', fontSize:'.9rem', fontFamily:'inherit', outline:'none',
  }
  const labelStyle: React.CSSProperties = {
    display:'block', fontSize:'.75rem', fontWeight:600,
    letterSpacing:'.05em', textTransform:'uppercase', color:'rgba(255,255,255,0.65)',
    marginBottom:'.4rem',
  }

  return (
    <div className="rounded-2xl p-8 border"
      style={{ background:'rgba(255,255,255,0.07)', backdropFilter:'blur(10px)', borderColor:'rgba(255,255,255,0.14)' }}>
      <h2 className="font-serif text-2xl font-bold text-white mb-1">Send Us a Message</h2>
      <p className="text-sm text-white/55 mb-7">Prayer requests, questions, or just saying hello — we welcome all.</p>

      {status === 'success' ? (
        <div className="rounded-xl p-5 text-center" style={{ background:'rgba(0,208,132,0.15)', border:'1px solid rgba(0,208,132,0.3)' }}>
          <div className="text-3xl mb-3">🙏</div>
          <p className="font-semibold text-white mb-1">Message Received!</p>
          <p className="text-sm" style={{ color:'rgba(0,208,132,0.9)' }}>{message}</p>
          <button
            className="mt-5 px-5 py-2 rounded-lg text-sm font-medium text-white/70 border border-white/20 hover:border-white/40 transition-colors"
            onClick={() => setStatus('idle')}>
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          {/* Row: Name + Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" style={labelStyle}>Full Name *</label>
              <input
                id="name" name="name" type="text" required
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
            <div>
              <label htmlFor="location" style={labelStyle}>Location *</label>
              <input
                id="location" name="location" type="text" required
                placeholder="Your city / area"
                value={form.location}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
          </div>

          {/* Contact */}
          <div className="mb-4">
            <label htmlFor="contact" style={labelStyle}>Contact Number *</label>
            <input
              id="contact" name="contact" type="tel" required
              placeholder="+91 XXXXX XXXXX"
              value={form.contact}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          {/* Prayer Request */}
          <div className="mb-5">
            <label htmlFor="prayerRequest" style={labelStyle}>
              Prayer Request <span className="opacity-40 font-normal normal-case">(optional)</span>
            </label>
            <textarea
              id="prayerRequest" name="prayerRequest"
              placeholder="Share your prayer request — we will intercede for you..."
              rows={4}
              value={form.prayerRequest}
              onChange={handleChange}
              style={{ ...inputStyle, resize:'vertical', minHeight:'100px' }}
            />
          </div>

          {/* Error message */}
          {status === 'error' && (
            <div className="rounded-lg px-4 py-3 mb-4 text-sm" style={{ background:'rgba(239,68,68,0.15)', border:'1px solid rgba(239,68,68,0.3)', color:'#fca5a5' }}>
              {message}
            </div>
          )}

          <p className="text-xs text-white/30 mb-4">
            * Required fields. Your details are kept private and used only to connect with you.
          </p>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
            style={{ background:'linear-gradient(135deg,var(--holy-gold),#c47e15)', color:'var(--deep-indigo)', fontFamily:'inherit' }}>
            {status === 'loading' ? 'Sending…' : 'Send Message & Prayer Request'}
          </button>
        </form>
      )}
    </div>
  )
}
