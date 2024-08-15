import { Header } from "@/components/Header"
import { Home } from "@/components/Home"
import Modules from "@/components/Modules"

const modules = [
  { name: "Application Development Processes" },
  { name: "Application Implementation" },
  { name: "Database Design and Implementation" },
  { name: "Develop Enterprise Applications" },
  { name: "Front-End Web Development" },
  { name: "Programming Foundations" },
  { name: "UI Frameworks" },
  { name: "Web Development Foundations" },
  { name: "Web Development using Platforms" },
  { name: "Application Integration" }
];

export default function HomePage() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main>
        <Home />
        <Modules modules={modules.map(module => ({
          title: module.name,
          description: "",
          badge: ""
        }))} />
      </main>
    </div>
  )
}