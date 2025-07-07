import { useState } from "react"
import { cn } from "@/lib/utils"

const skills = [
  // Frontend
  { name: "HTML5", level: 95, category: "frontend" },
  { name: "CSS3", level: 95, category: "frontend" },
  { name: "JavaScript", level: 85, category: "frontend" },
  { name: "ES6+", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "SASS/SCSS", level: 90, category: "frontend" },
  { name: "CSS Variables", level: 90, category: "frontend" },
  { name: "BEM", level: 70, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },
  { name: "SPAs", level: 95, category: "frontend" },
  { name: "CRUD", level: 95, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "PHP", level: 70, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "MySQL", level: 90, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "GraphQL", level: 75, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "AWS", level: 70, category: "tools" },
  { name: "StoryBook", level: 70, category: "tools" },
  { name: "Adobe XD", level: 85, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Stripe", level: 80, category: "tools" },
  { name: "PayPal", level: 75, category: "tools" },
  { name: "ShadCN", level: 80, category: "tools" },

  // Headless CMS
  { name: "CMS", level: 95, category: "wordpress" },
  { name: "Strapi CMS", level: 70, category: "wordpress" },
  { name: "Gatsby CMS", level: 70, category: "wordpress" },
  { name: "Gutenberg Editor", level: 90, category: "wordpress" },
  { name: "Elementor Pro", level: 90, category: "wordpress" },
  { name: "WooCommerce", level: 80, category: "wordpress" },
  { name: "Custom Post Types (CPT)", level: 90, category: "wordpress" },
  { name: "ACF Pro", level: 90, category: "wordpress" },
  { name: "PHP", level: 70, category: "wordpress" },
  { name: "WP_Query", level: 95, category: "wordpress" },
  { name: "Custom Plugins", level: 80, category: "wordpress" },
  { name: "Custom Themes", level: 90, category: "wordpress" },
  { name: "ReactJS", level: 90, category: "wordpress" },
  { name: "JavaScript", level: 85, category: "wordpress" },
  { name: "RESTful API", level: 80, category: "wordpress" },
  { name: "GraphQL", level: 80, category: "wordpress" },
  { name: "Hooks & Filters", level: 70, category: "wordpress" },
  { name: "Contentful CMS", level: 70, category: "wordpress" }
]

const categories = ["all", "frontend", "backend", "tools", "wordpress"]

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  )

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-5xl mb-12 text-center font-thin tracking-wide">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => {
            const [all, frontend, backend, tools, cms] = category
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 rounded-full transition-colors duration-300 uppercase cursor-pointer",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/70 text-foreground hover:bd-secondary"
                )}
              >
                {category}
              </button>
            )
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => {
            const { name, level, category } = skill
            return (
              <div
                key={key}
                className="bg-card p-6 rounded-lg shadow-xs card-hover"
              >
                <div className="text-left mb-4">
                  <h3 className="font-semibold text-lg">{name}</h3>
                </div>
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                    style={{ width: level + "%" }}
                  />
                </div>
                <div className="text-right mt-1">
                  <span className="text-sm text-muted-foreground">
                    {level}%
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
