<script setup>
import "../assets/themes.css";
import { Blog, ApiOnePiece, Cofee } from "../assets/index";

const projects = [
  {
    id: 1,
    title: "Blog",
    image: Blog,
    description:
      "A simple and responsive blog built with React — my first project using this framework, focused on learning component structure, props, and basic state management.",
    tags: ["React.Js", "Tailwindcss", "TypeScript", "Vite"],
    link: "https://blog-poject.vercel.app/",
  },
  {
    id: 2,
    title: "One Piece Api",
    image: ApiOnePiece,
    description:
      "One Piece Devil Fruit Encyclopedia is a Vue.js app where fans can browse, search, and explore Devil Fruits by type, powers, and users. With a responsive card UI, live search, and data from the One Piece API, it’s a fun way to discover these iconic fruits.",
    tags: ["Vue", "Tailwindcss", "Javascript", "Vite"],
    link: "https://one-piece-api-one.vercel.app/",
  },
  {
    id: 3,
    title: "Cofee Landing Page",
    img: Cofee,
    description:
      "A modern, responsive landing page for a specialty coffee shop, designed to showcase artisanal coffee, menu items, and the café's cozy atmosphere. ",
    tags: ["HTML5", "CSS", "Javascript"],
    link: "https://sozajostin-sc.github.io/CoffeLandingPage/",
  },
];

const openProject = (project) => {
  if (project?.link && typeof project.link === "string") {
    window.open(project.link, "_blank");
  }
};
</script>

<template>
  <section
    id="Projects"
    class="projects-section"
    aria-labelledby="projects-heading"
  >
    <div class="projects-container">
      <h1 id="projects-heading" class="projects-title">My Projects</h1>

      <div class="projects-grid">
        <article
          v-for="(project, index) in projects"
          :key="project.id"
          class="project-card"
          role="article"
          tabindex="0"
          @click="openProject(project)"
          @keydown.enter="openProject(project)"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div class="project-image-container">
            <img
              :src="project.image"
              :alt="'Preview of ' + project.title"
              class="project-image"
              loading="lazy"
            />
          </div>
          <div class="project-content">
            <h2 class="project-title">{{ project.title }}</h2>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-tags">
              <span v-for="tag in project.tags" :key="tag" class="project-tag">
                {{ tag }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Base Styles */
.projects-section {
  width: 100%;
  padding: 4rem 0;
  background: var(--project-bg);
  font-family: "Courier New", monospace;
}

.projects-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.projects-title {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  color: var(--project-text);
  position: relative;
  text-shadow: 3px 3px 0 rgba(0, 0, 0, 0.2);
}

.projects-title::after {
  content: "";
  display: block;
  width: 80px;
  height: 4px;
  background: var(--project-accent);
  margin: 1rem auto 0;
  box-shadow: 2px 2px 0 #000;
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

.project-card {
  background: var(--project-card-bg);
  border: var(--pixel-border);
  overflow: hidden;
  box-shadow: var(--pixel-shadow);
  transition: var(--project-transition);
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translate(-4px, -4px);
  box-shadow: 3px 3px 0 #000;
}

.project-card:focus {
  outline: var(--pixel-border);
  outline-offset: 2px;
}

/* Project Image */
.project-image-container {
  width: 100%;
  height: 180px;
  overflow: hidden;
  border-bottom: var(--pixel-border);
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--project-transition);
  image-rendering: pixelated;
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

/* Project Content */
.project-content {
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.project-title {
  margin: 0 0 0.5rem 0;
  color: var(--project-text);
  font-size: 1.25rem;
  font-weight: bold;
}

.project-description {
  margin: 0 0 1rem 0;
  color: var(--project-text);
  opacity: 0.8;
  line-height: 1.5;
  flex-grow: 1;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.project-tag {
  background: #dfe6e9;
  color: #636e72;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: bold;
  border: 2px solid #000;
  box-shadow: 2px 2px 0 #000;
  transition: background 0.2s, color 0.2s;
}

.project-tag:hover {
  background: #b2bec3;
  color: #2d3436;
  cursor: default;
}

/* Responsive */
@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .projects-title {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .projects-title {
    font-size: 1.8rem;
  }

  .project-card {
    box-shadow: 4px 4px 0 #000;
  }

  .project-card:hover {
    box-shadow: 2px 2px 0 #000;
  }
}
</style>
