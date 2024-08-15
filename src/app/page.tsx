import { Header } from "@/components/Header"
import { Home } from "@/components/Home"
import { AnimatedBeamMultipleOutputDemo } from "@/components/Skills"

export default function HomePage() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main>
        <Home />
        <section className="py-16 px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <AnimatedBeamMultipleOutputDemo className="mb-16" />
        </section>
      </main>
    </div>
  )
}