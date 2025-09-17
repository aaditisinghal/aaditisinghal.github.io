import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Users, MapPin } from "lucide-react"

export function AboutSection() {
  const achievements = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Presidential Scholar",
      description: "Georgia State University - 4.3/4.3 GPA",
      date: "2024-2027",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "HackMIT 2025 Winner",
      description: "1st Place & Fast-Track Internship at Infosys",
      date: "September 2025",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Research Excellence",
      description: "1st Place in biotech research presentation",
      date: "Mid-Atlantic Regional Conference",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Leadership",
      description: "Founder & President - Quantitative Computing & Research Society",
      date: "Current",
    },
  ]

  const clubs = [
    "Quantitative Computing & Research Society (Founder & President)",
    "Girls Who Code",
    "Finance Network Club",
    "GSU CS Club",
    "Women's Global Club (Outreach Manager)",
    "Golf Club",
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            I'm a passionate Computer Science student at Georgia State University, dedicated to leveraging AI and
            machine learning to solve real-world problems. With a perfect GPA and multiple hackathon wins, I'm currently
            co-founding ProfitWise while pursuing my Bachelor's degree.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Key Achievements</h3>
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-primary mt-1">{achievement.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                        <Badge variant="secondary" className="text-xs">
                          {achievement.date}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Education</h3>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <GraduationCap className="h-8 w-8 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground text-lg">Georgia State University</h4>
                      <p className="text-primary font-medium">Bachelor in Computer Science</p>
                      <p className="text-sm text-muted-foreground mb-3">
                        <MapPin className="inline h-4 w-4 mr-1" />
                        Atlanta, GA | Expected Graduation: May 2027
                      </p>
                      <div className="space-y-2">
                        <p className="text-sm">
                          <strong>GPA:</strong> 4.3/4.3
                        </p>
                        <p className="text-sm">
                          <strong>Honors:</strong> Presidential Scholar, Honors Student
                        </p>
                        <p className="text-sm">
                          <strong>Coursework:</strong> Data Structures & Algorithms, OOP, Statistics, Linear Algebra,
                          Calculus
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Leadership & Involvement</h3>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {clubs.map((club, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{club}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
