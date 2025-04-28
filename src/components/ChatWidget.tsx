import { AnimatePresence, Transition, Variants, motion } from 'framer-motion'
import { Chat, ChatProps } from './Chat'
import React, { useEffect, useState } from 'react'

import { Rnd } from 'react-rnd'
import clsx from 'clsx'
import { createPortal } from 'react-dom'

export interface ChatWidgetProps extends Omit<ChatProps, 'onClose'> {
  portalTarget?: HTMLElement
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({ portalTarget = document.body, ...chatProps }) => {
  const [open, setOpen] = useState(false)
  const [isFull, setFull] = useState(false)

  /* ---------- remember position/size between fullscreen hops ---------- */
  const [size, setSize] = useState(() => {
    const widthRatio = 2.25
    const heightRatio = 1.4

    return {
      width: Math.max(640, window.innerWidth / widthRatio),
      height: Math.max(560, window.innerHeight / heightRatio),
    }
  })

  console.log('size:', size)

  const [pos, setPos] = useState(() => ({
    x: window.innerWidth - size.width - 24,
    y: window.innerHeight - size.height - 96,
  }))

  /* ---------- intro tooltip ---------- */
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    const count = Number(localStorage.getItem('chatTooltipCount') ?? '0')
    if (count < 99999) {
      setShowTooltip(true)
      localStorage.setItem('chatTooltipCount', String(count + 1))
    }
  }, [])

  useEffect(() => {
    if (!showTooltip) return
    const t = setTimeout(() => setShowTooltip(false), 8000)
    return () => clearTimeout(t)
  }, [showTooltip])

  /* ---------- ESC leaves fullscreen ---------- */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setFull(false)
    window.addEventListener('keydown', onKey) // ESC is the canonical exit key
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const toggleFull = () => setFull((v) => !v)

  const panel = (
    <motion.div
      className={clsx('h-full w-full overflow-hidden bg-white shadow-2xl', isFull ? 'border-none' : 'rounded-xl border border-gray-300')}
      layout // <- let Framer animate size/pos changes
      // transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      variants={panelVariants}
      initial='hidden'
      animate='visible'
      exit='exit'>
      <Chat
        {...chatProps}
        isFullScreen={isFull}
        onToggleFullScreen={toggleFull}
        onClose={() => {
          setFull(false)
          setOpen(false)
        }}
      />
    </motion.div>
  )

  return (
    <>
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && !open && (
          <motion.div
            key='chat-tooltip'
            className='fixed right-6 bottom-27 z-[9999] rounded-lg bg-gray-100 px-3 pt-1.5 pb-1 text-sm font-medium text-gray-600/85 select-none'
            initial={{ opacity: 0, y: 10, transition: { duration: 0.3 } }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
            exit={{ opacity: 0, y: 10, transition: { duration: 0.3 } }}
            transition={{ type: 'spring', stiffness: 200, damping: 20, duration: 0.5 }}>
            <span className='ml-1 inline-block [width:0] [animation:typing_2s_steps(28,end)_0.3s_forwards,_blink_1s_step-end_infinite] overflow-hidden border-r-2 border-gray-400/70 whitespace-nowrap'>
              Hello, I’m here to help with any of your scraping requests!
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        type='button'
        aria-label={open ? 'Close chat' : 'Open chat'}
        onClick={() => setOpen((v) => !v)}
        className='fixed right-6 bottom-6 z-[9999] flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg focus:outline-none'
        variants={fabVariants}
        animate={open ? 'open' : 'closed'}
        whileTap={{ scale: 0.9 }}>
        {open ? (
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='h-8 w-8'>
            <path d='M18 6L6 18M6 6l12 12' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
          </svg>
        ) : (
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='h-8 w-8'>
            <path
              d='M2 12a9.985 9.985 0 0110-10 9.985 9.985 0 019.95 11.112A9.996 9.996 0 0112 22h-.877L6 24l1.938-4.875A9.995 9.995 0 012 12z'
              fill='currentColor'
            />
          </svg>
        )}
      </motion.button>

      {createPortal(
        <AnimatePresence>
          {open && (
            <Rnd
              bounds='window'
              disableDragging={isFull}
              enableResizing={isFull ? {} : resizeHandles}
              size={isFull ? { width: '100vw', height: '100vh' } : size}
              position={isFull ? { x: 0, y: 0 } : pos}
              onDragStop={(_, d) => setPos({ x: d.x, y: d.y })}
              onResizeStop={(_, __, ref, ___, p) => {
                setSize({ width: ref.offsetWidth, height: ref.offsetHeight })
                setPos(p)
              }}
              className={clsx('fixed', isFull ? 'z-[9999]' : 'z-[9998]')}
              style={{ borderRadius: isFull ? 0 : '0.75rem' }}
              dragHandleClassName='chat-drag-handle'>
              {panel}
            </Rnd>
          )}
        </AnimatePresence>,
        portalTarget
      )}
    </>
  )
}

export default ChatWidget

/* ---------- typed helper ---------- */
const loopY: Transition = {
  duration: 2.1,
  repeat: Infinity,
  repeatType: 'loop',
  ease: 'easeInOut',
} /* repeats only on properties that reference it

/* ---------- Variants ---------- */
const fabVariants: Variants = {
  closed: {
    y: [0, -4, 0],
    scale: 1,
    transition: { y: loopY }, // <— only y loops
  },
  open: {
    y: 0,
    scale: 0.8,
    originX: 1,
    originY: 1,
    transition: { type: 'spring', stiffness: 400, damping: 30 },
  },
}

const panelVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 30, originX: 1, originY: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 25 },
  },
  exit: { opacity: 0, scale: 0.75, y: -24, transition: { duration: 0.25 } },
}

const resizeHandles = {
  top: true,
  left: true,
  right: true,
  bottom: true,
  topLeft: true,
  topRight: true,
  bottomLeft: true,
  bottomRight: true,
}
