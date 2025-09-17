import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Award, Calendar, MapPin } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "EcoAI - Carbon-Conscious SDK",
      description:
        "Winner of HackMIT 2025 (1st Place) - Cut AI carbon emissions by 20-40% and token usage by 45% through intelligent prompt compression and GPU optimization.",
      achievements: [
        "Enhanced GPU efficiency by 15-75% with Zeus-inspired framework",
        "Built production-ready dashboard with Flask, React, PostgreSQL",
        "Preserved ≥95% semantic quality with deep learning compression",
        "Real-time tracking of CO₂ savings for enterprises",
      ],
      technologies: ["Python", "Flask", "React", "PostgreSQL", "Chart.js", "TensorFlow", "GPU Optimization"],
      link: "https://plume.hackmit.org/project/shoar-towhu-gjzbg-ksubb",
      award: "1st Place HackMIT 2025",
      location: "MIT, Boston",
      date: "September 2025",
    },
    {
      title: "MetabolX - AI Healthcare Analytics",
      description:
        "AI-driven metabolite analysis platform for predictive healthcare, achieving 97.2% accuracy in disease risk prediction from clinical samples.",
      achievements: [
        "Trained models on 20,000 clinical metabolite samples",
        "Early detection of Alzheimer's and cancer from 49 biomarkers",
        "Generated personalized medication plans in <2 seconds",
        "HIPAA-compliant digital-twin dashboard with 99.9% uptime",
      ],
      technologies: ["TensorFlow", "XGBoost", "Scikit-learn", "GPT-4", "Flask", "Docker", "Kubernetes"],
      link: "https://devpost.com/software/metabolx",
      location: "Princeton University, NJ",
      date: "March - June 2025",
    },
    {
      title: "NutriLens AR - Nutrition Assistant",
      description:
        "Hands-free AR nutrition scanner using Snap Spectacles with real-time calorie analysis and personalized diet coaching.",
      achievements: [
        "Built in 36-hour hackathon with <200ms latency",
        "Real-time calorie & macro breakdowns in AR lens",
        "Bi-directional sync with web dashboard and iOS app",
        "Won Verbal Mention in SNAP AR sponsor track",
      ],
      technologies: ["Snap Spectacles", "Lens Studio", "GPT-4", "Node.js", "WebSockets", "MongoDB", "Heroku"],
      link: "https://devpost.com/software/nutrilens-ar",
      award: "Verbal Mention - SNAP AR Track",
      location: "Georgia Tech, Atlanta",
      date: "April 2025",
    },
    {
      title: "AAROLIC - AI Healthcare iOS App",
      description:
        "AI-driven iOS app for pre-diagnosis and e-prescriptions, developed in collaboration with doctors for clinical use.",
      achievements: [
        "Collaborated with 7 doctors for prototype testing",
        "Built with Swift, SwiftUI, and OpenAI APIs",
        "Focused on UI/UX and product-market fit",
        "Serial updates based on medical professional feedback",
      ],
      technologies: ["Swift", "SwiftUI", "OpenAI APIs", "Python", "Objective-C", "Figma"],
      link: "https://devpost.com/software/aa-x395vj",
      location: "Georgia Tech, Atlanta",
      date: "February - May 2025",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            A showcase of my most impactful projects, from award-winning hackathon solutions to production-ready
            applications that solve real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  {project.award && (
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      <Award className="h-3 w-3 mr-1" />
                      {project.award}
                    </Badge>
                  )}
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {project.date}
                  </div>
                </div>

                <p className="text-muted-foreground text-pretty">{project.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button asChild size="sm">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
