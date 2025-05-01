<script setup>
import "../assets/themes.css";
import { AvatarLight } from "../assets";
//SECRET FUNCTION
function showSecret() {
  alert("¡UNLOCKED SECRET! +10 POINTS");
}
</script>

<template>
  <!-- El template se mantiene igual -->
  <footer class="pixel-footer">
    <div class="pixel-container">
      <div class="pixel-divider"></div>

      <div class="pixel-footer-content">
        <div class="pixel-social">
          <h3 class="pixel-subtitle">Find me on:</h3>
          <div class="pixel-social-icons">
            <a
              href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BWS6TNgPbQ0uh3RUgPHsNvQ%3D%3D"
              class="pixel-icon"
              target="_blank"
            >
              <span class="pixel-icon-inner"
                ><img src="../assets/social_media/linkedin.svg" alt="Linkedin"
              /></span>
              <span class="pixel-tooltip">Linkedin</span>
            </a>
            <a
              href="https://github.com/SozaJostin-Sc"
              class="pixel-icon"
              target="_blank"
            >
              <span class="pixel-icon-inner"
                ><img src="../assets/skills/github.svg" alt="Githud"
              /></span>
              <span class="pixel-tooltip">GitHub</span>
            </a>
          </div>
        </div>

        <div class="pixel-brand">
          <img :src="AvatarLight" alt="Avatar" />
          <p class="pixel-copyright">© 2024 - LEVEL 1 COMPLETED</p>
        </div>

        <div class="pixel-links">
          <h3 class="pixel-subtitle">POWER-UPS:</h3>
          <ul class="pixel-menu">
            <li>
              <a href="#main" class="pixel-link">START</a>
            </li>
            <li>
              <a href="#Projects" class="pixel-link">PROJECTS</a>
            </li>
            <li>
              <a href="#Contact" class="pixel-link">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="pixel-secret" @click="showSecret">
        <p class="pixel-credits">↑ ↑ ↓ ↓ ← → ← → B A</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Variables CSS para el footer */
.pixel-footer {
  /* Estilos aplicados */
  background-color: var(--pixel-footer-bg);
  border-top: 4px solid var(--pixel-footer-border);
  color: var(--pixel-footer-text);
}

.pixel-divider {
  background: linear-gradient(
    to right,
    var(--pixel-footer-divider-red) 20%,
    var(--pixel-footer-divider-blue) 20% 40%,
    var(--pixel-footer-divider-yellow) 40% 60%,
    var(--pixel-footer-divider-green) 60% 80%,
    var(--pixel-footer-divider-pink) 80%
  );
}

.pixel-subtitle {
  color: var(--pixel-footer-subtitle);
  text-shadow: 2px 2px 0 var(--pixel-footer-subtitle-shadow);
}

.pixel-icon {
  background: var(--pixel-footer-icon-bg);
  border: 3px solid var(--pixel-footer-border);
}

.pixel-icon:hover {
  background: var(--pixel-footer-icon-hover);
}

.pixel-tooltip {
  background: var(--pixel-footer-tooltip-bg);
  color: var(--pixel-footer-tooltip-text);
}

.red {
  background: var(--pixel-footer-logo-red);
}
.green {
  background: var(--pixel-footer-logo-green);
}
.blue {
  background: var(--pixel-footer-logo-blue);
}
.yellow {
  background: var(--pixel-footer-logo-yellow);
}

.pixel-copyright {
  color: var(--pixel-footer-copyright);
}

.pixel-link {
  color: var(--pixel-footer-link);
}

.pixel-link:hover {
  color: var(--pixel-footer-link-hover);
}
.pixel-secret {
  color: var(--pixel-footer-bg);
}
.pixel-secret:hover .pixel-credits {
  color: var(--pixel-footer-secret);
}

.pixel-footer {
  padding: 2rem 1rem;
  font-family: "VT323", monospace;
  position: relative;
}

.pixel-container {
  max-width: 1200px;
  margin: 0 auto;
}

.pixel-divider {
  height: 4px;
  margin-bottom: 2rem;
}

.pixel-footer-content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  text-align: center;
}

.pixel-subtitle {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.pixel-social-icons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.pixel-icon:nth-child(2) {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  position: relative;
  cursor: pointer;
  background: white;
  border-radius: 15px;
}

.pixel-icon:first-child {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  position: relative;
  cursor: pointer;
  border: none;
  border-radius: 15px;
}
.pixel-icon-inner img {
  width: 40px;
  height: 40px;
  object-fit: contain;
}
.pixel-icon:hover {
  transform: translateY(-3px);
}

.pixel-tooltip {
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.2rem 0.5rem;
  font-size: 0.9rem;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s;
}

.pixel-icon:hover .pixel-tooltip {
  opacity: 1;
}

.pixel-copyright {
  font-size: 1rem;
}

.pixel-menu {
  list-style: none;
  padding: 0;
}

.pixel-link {
  text-decoration: none;
  font-size: 1.2rem;
  display: block;
  margin-bottom: 0.5rem;
}

.pixel-link:hover {
  text-decoration: underline;
}

.pixel-secret {
  cursor: pointer;
  margin-top: 1rem;
  text-align: center;
}

.pixel-credits {
  font-size: 0.8rem;
  user-select: none;
}

@media (max-width: 768px) {
  .pixel-footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.pixel-brand img {
  width: 80px;
  height: 80px;
  object-fit: contain;
}
</style>
