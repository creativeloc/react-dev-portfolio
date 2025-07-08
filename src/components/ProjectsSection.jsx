import { ArrowBigRight, ExternalLink, Github } from "lucide-react"
import { nanoid } from "nanoid"

const projects = [
  {
    id: nanoid(),
    title: "Saas Landing Page",
    description: "A beautiful landing page app using React and TailwindCSS",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    hostedUrl: "#",
    githubUrl: "#"
  },
  {
    id: nanoid(),
    title: "Orbit Analytics Dashboard",
    description:
      "Interactive dashboard with data visualization and filtering capabilities.",
    image: "/projects/project2.png",
    tags: ["TypeScript", "D3.js", "Next.js"],
    hostedUrl: "#",
    githubUrl: "#"
  },
  {
    id: nanoid(),
    title: "eCommerce Platform",
    description:
      "A Full-Featured eCommerce platform with user authentication and payment processing system",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe"],
    hostedUrl: "#",
    githubUrl: "#"
  }
]

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-5xl mb-4 text-center font-thin tracking-wide">
          Featured <span className="text-primary"> Projects</span>
        </h2>

        <p className="next-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to details, performance, and responsive user
          experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const {
              id,
              title,
              description,
              image,
              tags,
              hostedUrl,
              githubUrl
            } = project
            return (
              <div
                key={id}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-1">
                    {tags.map((tag) => {
                      return (
                        <span
                          key={nanoid()}
                          className="px-2, py-1 text-xs font-medium border rounded-full bg-primary/30 px-2 text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      )
                    })}
                  </div>
                </div>
                <h3 className="text-xl font-thin tracking-wide mb-1">
                  - {title} -
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={hostedUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/creativeloc?tab=repositories"
            target="_blank"
            className="cosmic-button w-fit flex text-center items-center mx-auto gap-2"
          >
            Checkout My GitHub <ArrowBigRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
