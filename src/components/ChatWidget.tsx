import { AnimatePresence, motion } from 'framer-motion'
import { Chat, ChatProps } from './Chat'
import React, { useState } from 'react'

import { createPortal } from 'react-dom'

export interface ChatWidgetProps extends Omit<ChatProps, 'onClose'> {
  /** Optional container (defaults to document.body) */
  portalTarget?: HTMLElement
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({ portalTarget = document.body, ...chatProps }) => {
  const [open, setOpen] = useState(false)

  /* ---------- Animation presets ---------- */
  const fabVariants = { idle: { y: [0, -4, 0] } }

  const panelVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30, originX: 1, originY: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 25 },
    },
    exit: { opacity: 0, scale: 0.8, y: 30, transition: { duration: 0.2 } },
  }

  return (
    <>
      <motion.button
        type='button'
        aria-label={open ? 'Close chat' : 'Open chat'}
        onClick={() => setOpen((v) => !v)}
        className='fixed right-6 bottom-6 z-[9999] flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg focus:outline-none'
        variants={fabVariants}
        animate='idle'
        transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
        whileTap={{ scale: 0.9 }}>
        {open ? (
          /* “×” icon */
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='h-8 w-8'>
            <path d='M18 6L6 18M6 6l12 12' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
          </svg>
        ) : (
          /* Chat bubble icon */
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
            <motion.div
              key='panel'
              className='fixed right-6 bottom-24 z-[9998] h-[560px] w-[640px] overflow-hidden rounded-xl border border-gray-300 bg-white shadow-2xl'
              initial='hidden'
              animate='visible'
              exit='exit'
              variants={panelVariants}
              layoutId='chatBubble'>
              <Chat {...chatProps} onClose={() => setOpen(false)} />
            </motion.div>
          )}
        </AnimatePresence>,
        portalTarget
      )}
    </>
  )
}
