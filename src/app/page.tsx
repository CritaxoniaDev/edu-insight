import { Header } from "@/components/Header"
import { Home } from "@/components/Home"

export default function HomePage() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main>
        <Home />
      </main>
    </div>
  )
}