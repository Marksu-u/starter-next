import Header from '@/components/shared/header'
import Hero from '@/components/shared/hero'
import Features from '@/components/shared/features'
import Footer from '@/components/shared/footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  )
}

