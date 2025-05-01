import React from 'react'

const Home: React.FC = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-cyan-500'>
      <div className='relative z-10 p-8 text-center'>
        <h1 className='mb-6 animate-pulse text-6xl font-bold tracking-tight text-white md:text-8xl'>
          This is <span className='bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent'>SmartspAI</span>
        </h1>

        <p className='mx-auto max-w-2xl text-xl text-blue-100 opacity-80 md:text-2xl'>
          Your intelligent assistant for smarter conversations
        </p>

        <div className='mt-12'>
          <button className='transform rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 text-lg font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:from-cyan-600 hover:to-blue-600 hover:shadow-lg'>
            Get Started
          </button>
        </div>
      </div>

      {/* Abstract shapes for visual interest */}
      <div className='absolute top-20 left-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl'></div>
      <div className='absolute right-20 bottom-20 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl'></div>
      <div className='absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl'></div>
    </div>
  )
}

export default Home
