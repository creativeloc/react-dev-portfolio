import { Briefcase, Code, Database, User } from "lucide-react"

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-5xl mb-12 text-center font-thin tracking-wide">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-thin tracking-wider text-left">
              <ul>
                <h3>I am A:</h3>
                <li>&ndash; FrontEnd Developer, Designer</li>
                <li>&ndash; WordPress/Gutenberg Developer</li>
              </ul>
            </h3>
            <p className="text-muted-foreground text-left">
              With over 15 years of experience in web development, I specialize
              in creating responsive and performant websites using modern
              technologies that are compliant with accessibility guidelines,
            </p>

            <p className="text-muted-foreground text-left">
              I am passionate about FrontEnd UI Development with React/NextJS,
              as well as WordPress site Development utilizing Gutenberg and
              Elementor technologies utilizing React, JavaScript and PHP, with
              the ability to implement Headless CMS, RESTful and GraphQL API
              technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="link to resume" // add link to download cv here
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-white/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-thin text-primary text-lg tracking-widest">
                    Web Development
                  </h4>
                  <p className="text-muted-foreground">
                    Create responsive websites and web applications using modern
                    libraries, frameworks, and design and styling techniques
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-thin text-primary text-lg tracking-widest">
                    UI/UX Design
                  </h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces to enhance seamless user
                    experiences
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-thin text-primary text-lg tracking-widest">
                    Project Management
                  </h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion utilizing
                    Ajile Methodologies
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-thin text-primary text-lg tracking-widest">
                    Database Manipulation
                  </h4>
                  <p className="text-muted-foreground">
                    Interacting with SQL and NoSQL databases via fetch or axios
                    to generate JSON data through RESTful and GraphQL APIs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
