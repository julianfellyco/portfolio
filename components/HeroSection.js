import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function HeroSection() {
  const textRef = useRef()

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { text: '' },
      {
        duration: 2,
        text: "Hi, I'm Julian — Web & Mobile Developer",
        ease: 'power1.inOut',
        delay: 0.5,
      }
    )
  }, [])

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center px-4">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6" ref={textRef}></h1>
      <button className="mt-4 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 transition rounded">
        View Projects
      </button>
    </section>
  )
}
