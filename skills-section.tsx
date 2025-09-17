import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Brain, Globe, Database, Cloud, Award } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Programming Languages",
      skills: ["Python", "JavaScript/TypeScript", "Java", "C++", "Swift/SwiftUI", "SQL"],
      color: "bg-chart-1",
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI/ML & Data Science",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face", "Transformers", "XGBoost"],
      color: "bg-chart-2",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Web & Full-Stack",
      skills: ["React", "Next.js", "Node.js", "Express", "Flask", "FastAPI", "HTML/CSS"],
      color: "bg-chart-3",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "BigQuery", "Data Warehousing", "ETL Pipelines"],
      color: "bg-chart-4",
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud & DevOps",
      skills: ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Jenkins"],
      color: "bg-chart-5",
    },
  ]

  const certifications = [
    "MIT xPRO Professional Certificate in AI & ML",
    "The Complete Web Development Bootcamp",
    "100 Days of Code – Python Pro Bootcamp",
    "Ducat Android Development Program",
    "Andrew Ng Specialization in Machine and Deep Learning",
    "Mastering Data Structures & Algorithms",
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            A comprehensive toolkit spanning full-stack development, AI/ML, cloud technologies, and modern development
            practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${category.color} text-foreground`}>{category.icon}</div>
                  <CardTitle className="text-lg font-semibold text-foreground">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary text-primary-foreground">
                  <Award className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl font-semibold text-foreground">Certifications & Training</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
