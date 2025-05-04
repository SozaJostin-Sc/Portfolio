<script setup>
import "../assets/themes.css";
import Card from "../components/Card.vue";
import Navbar from "../components/Navbar.vue";
import {
  linkedin,
  github,
  cv,
  html,
  css,
  js,
  git,
  python,
  linux,
  tailwindcss,
  vue,
  react,
  CV,
  Hi,
} from "../assets/index";
// Datos para hacer el componente más mantenible
const socialLinks = [
  {
    name: "LinkedIn",
    icon: linkedin,
    url: "https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BWS6TNgPbQ0uh3RUgPHsNvQ%3D%3D",
  },
  {
    name: "GitHub",
    icon: github,
    url: "https://github.com/SozaJostin-Sc",
  },
  {
    name: "CV",
    icon: cv,
    url: CV,
    isButton: true,
    download: true,
  },
];

const skills = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: js },
  { name: "Python", icon: python },
  { name: "Git", icon: git },
  { name: "Linux", icon: linux },
];

const learning = [
  { name: "Tailwind CSS", icon: tailwindcss },
  { name: "Vue.js", icon: vue },
  { name: "React", icon: react },
];
</script>

<template>
  <main id="main" class="portfolio-main">
    <Navbar />

    <section class="hero-section" aria-labelledby="hero-heading">
      <Card class="hero-card" />
      <div class="hero-content">
        <h1 id="hero-heading" class="hero-title">
          <span class="hello-inline">
            Hello!
            <span class="hand-wave">
              <img :src="Hi" alt="Hello hand wave" />
            </span>
          </span>
        </h1>

        <p class="hero-description">
          Junior web developer with a focus on clean code, responsive design,
          and continuous learning.
        </p>
        <div class="hero-links">
          <a
            v-for="link in socialLinks"
            :key="link.name"
            :href="link.url"
            class="social-link"
            :class="{ 'social-button': link.isButton }"
            :aria-label="link.name"
            v-bind="link.download ? { download: '' } : {}"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              :src="link.icon"
              :alt="link.name"
              class="social-icon"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </section>

    <section class="skills-section" aria-labelledby="skills-heading">
      <div class="skills-container">
        <h2 id="skills-heading" class="section-title">Skills</h2>
        <ul class="skills-list">
          <li
            v-for="skill in skills"
            :key="skill.name"
            class="skill-item"
            :title="skill.name"
          >
            <img
              :src="skill.icon"
              :alt="skill.name + ' icon'"
              class="skill-icon"
              loading="lazy"
            />
          </li>
        </ul>
      </div>

      <div class="learning-container">
        <h2 class="section-title">Currently Learning</h2>
        <ul class="skills-list">
          <li
            v-for="item in learning"
            :key="item.name"
            class="skill-item"
            :title="item.name"
          >
            <img
              :src="item.icon"
              :alt="item.name + ' icon'"
              class="skill-icon"
              loading="lazy"
            />
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* Base Styles */
.portfolio-main {
  width: 100%;
  min-height: 100vh;
  background: var(--main-bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  color: var(--text-color);
  padding-bottom: 4rem;
  border-bottom: solid 5px black;
}

/* Hero Section */
.hero-section {
  display: flex;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 4rem clamp(20px, 5vw, 4rem);
  gap: 3rem;
}

.hero-card {
  width: 50%;
  flex-shrink: 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--card-shadow);
}

.hero-content {
  width: 50%;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  line-height: 1.2;
  font-weight: 700;
}

.hello-inline {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.hand-wave {
  animation: wave 2s infinite;
  display: inline-block;
  transform-origin: 70% 70%;
}

.hand-wave img {
  width: 40px;
  height: 40px;
  object-fit: cover;
}

@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.hero-description {
  font-size: 1.25rem;
  line-height: 1.6;
  opacity: 0.9;
  max-width: 80%;
}

.hero-links {
  display: flex;
  gap: 1.25rem;
  align-items: center;
}

/* Social Links */
.social-link {
  display: inline-flex;
  width: 56px;
  height: 56px;
  transition: var(--transition);
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background: transparent;
}

.social-link:hover {
  transform: translateY(-4px);
}

.social-icon {
  width: 70%;
  height: 70%;
  object-fit: contain;
}

.social-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

/* Skills Section */
.skills-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 0 2rem;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: var(--accent-color);
  border-radius: 2px;
}

.skills-container,
.learning-container {
  width: 100%;
}

.skills-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 0;
  list-style: none;
  margin: 0 auto;
  max-width: 800px;
}

.skill-item {
  padding: 1rem;
  background: none;
  transition: var(--transition);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.skill-item:hover {
  transform: translateY(-5px);
}

.skill-icon {
  width: 60px;
  height: 60px;
  object-fit: contain;
}

.skill-item::after {
  content: attr(title);
  font-size: 0.875rem;
  color: var(--text-color);
  opacity: 0.8;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-section {
    flex-direction: column;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .hero-card,
  .hero-content {
    width: 100%;
  }

  .hero-content {
    text-align: center;
    align-items: center;
  }

  .hero-description {
    max-width: 100%;
    text-align: center;
  }

  .hero-links {
    justify-content: center;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .skills-list {
    gap: 1rem;
  }

  .skill-icon {
    width: 50px;
    height: 50px;
  }
}
</style>
