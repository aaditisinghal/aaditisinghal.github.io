"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/30"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-balance">
              <span className="text-foreground">Hi, I'm </span>
              <span className="text-primary">Aaditi Singhal</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground text-balance">
              Computer Science Student | AI/ML Enthusiast | Full-Stack Developer
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Presidential Scholar at Georgia State University with a passion for building innovative AI solutions and
              winning hackathons. Currently co-founding ProfitWise and creating impactful healthcare technology.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" onClick={scrollToProjects} className="text-lg px-8 py-3">
              View My Projects
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <div className="flex gap-4">
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com/aaditisinghal" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://www.linkedin.com/in/aaditi-singhal-4b30b322b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="mailto:asinghal6@student.gsu.edu">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">4.3</div>
              <div className="text-sm text-muted-foreground">GPA</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">1st</div>
              <div className="text-sm text-muted-foreground">Place HackMIT 2025</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Major Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
