import Image from 'next/image'
import Navbar from '@/components/Navbar'
import HomeHeader from '@/components/HomeHeader'
import { About } from '@/components/About'
import { Project } from '@/components/Project'
import { Testimonial } from '@/components/Testimonial'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeHeader />
      <About />
      <Project />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  )
}
