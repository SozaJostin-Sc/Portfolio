<script setup>
import { useThemeStore } from "../stores/theme";
import { ref, computed } from "vue";
import "../assets/themes.css";
import { Cat, CatWhite, Moon, Sun } from "../assets/index";

const themeStore = useThemeStore();
const isMenuOpen = ref(false);

const navLinks = [
  { name: "Home", path: "#main" },
  { name: "Projects", path: "#Projects" },
  { name: "Contact", path: "#Contact" },
];

// Imágenes reactivas al tema
const bannerSrc = computed(() => (themeStore.isDarkMode ? Cat : CatWhite));

const imgSrc = computed(() => (themeStore.isDarkMode ? Sun : Moon));

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <header class="pixel-navbar">
    <nav>
      <div class="logo-container">
        <img
          :src="bannerSrc"
          alt="Logo"
          class="pixel-logo"
          @click="$router.push('/')"
        />
      </div>

      <div class="nav-links" :class="{ active: isMenuOpen }">
        <ul>
          <li v-for="link in navLinks" :key="link.name">
            <a :href="link.path" class="pixel-link" @click="isMenuOpen = false">
              {{ link.name }}
            </a>
          </li>
        </ul>
      </div>

      <div class="nav-actions">
        <div class="action-buttons">
          <button
            class="theme-toggle"
            @click="themeStore.toggleTheme"
            aria-label="Toggle theme"
          >
            <img :src="imgSrc" alt="Theme icon" class="theme-icon" />
          </button>

          <button
            class="menu-toggle"
            @click="toggleMenu"
            aria-label="Toggle menu"
          >
            <span class="pixel-bar"></span>
            <span class="pixel-bar"></span>
            <span class="pixel-bar"></span>
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
/* Base Styles */
.pixel-navbar {
  position: sticky;
  top: 0;
  width: 100%;
  height: 80px;
  background: var(--pixel-bg);
  border-bottom: var(--pixel-border);
  box-shadow: 0 4px 0 rgba(0, 0, 0, 0.2);
  z-index: 100;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Logo */
.logo-container {
  height: 100%;
  display: flex;
  align-items: center;
}

.pixel-logo {
  width: 100px;
  height: 100px;
  object-fit: contain;
  transition: all 0.3s ease;
  cursor: pointer;
}

.pixel-logo:hover {
  transform: scale(1.1);
}

/* Action Buttons Container */
.action-buttons {
  display: flex;
  gap: 1rem;
  align-items: center;
}

/* Theme Icon */
.theme-icon {
  width: 60px;
  height: 60px;
  object-fit: contain;
  filter: grayscale(100%) brightness(100%);
  transition: all 0.3s ease;
}

.theme-toggle {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

.theme-toggle:hover .theme-icon {
  filter: grayscale(0%) brightness(100%);
  transform: scale(1.1);
}

/* Menu Toggle */
.menu-toggle {
  display: none;
  background: none;
  border: var(--pixel-border);
  padding: 0.5rem;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-around;
  width: 40px;
  height: 40px;
}

.pixel-bar {
  display: block;
  width: 100%;
  height: 3px;
  background: #000;
  transition: all 0.3s ease;
}

/* Navigation Links */
.nav-links ul {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.pixel-link {
  color: var(--pixel-text);
  text-decoration: none;
  font-family: "Press Start 2P", cursive;
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  border: var(--pixel-border);
  background: rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
  display: inline-block;
}

.pixel-link:hover {
  background: var(--pixel-accent);
  color: #000;
  transform: translate(-2px, -2px);
  box-shadow: var(--pixel-shadow);
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-links {
    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    background: var(--pixel-bg);
    border-bottom: var(--pixel-border);
    box-shadow: 0 4px 0 rgba(0, 0, 0, 0.2);
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    transition: clip-path 0.4s ease;
  }

  .nav-links.active {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }

  .nav-links ul {
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
    gap: 1rem;
  }

  .menu-toggle {
    display: flex;
  }

  .menu-toggle.active .pixel-bar:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .menu-toggle.active .pixel-bar:nth-child(2) {
    opacity: 0;
  }

  .menu-toggle.active .pixel-bar:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -8px);
  }
}
</style>
