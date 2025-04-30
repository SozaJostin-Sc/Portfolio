<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useThemeStore } from "../stores/theme";
import { Avatar, AvatarLight } from "../assets/index";

const themeStore = useThemeStore();

const text = `Hi,\nI'm a frontend developer\nspecialized in Vue.js`;
const speed = 50;
const dialogueText = ref("");
const showCursor = ref(true);
const isTyping = ref(true);

const avatarSrc = computed(() =>
  themeStore.isDarkMode ? AvatarLight : Avatar
);

let i = 0;
let typingTimeout;

function typeWriter() {
  if (i < text.length) {
    const char = text[i] === "\n" ? "<br>" : text[i];
    dialogueText.value += char;
    i++;
    typingTimeout = setTimeout(typeWriter, speed);
  } else {
    isTyping.value = false;
    let blinkCount = 0;
    const blinkInterval = setInterval(() => {
      showCursor.value = !showCursor.value;
      blinkCount++;
      if (blinkCount >= 6) {
        clearInterval(blinkInterval);
        showCursor.value = false;
      }
    }, 300);
  }
}

onMounted(() => {
  typeWriter();
});

onUnmounted(() => {
  clearTimeout(typingTimeout);
});
</script>

<template>
  <div class="pixel-dialogue">
    <img class="pixel-character" :src="avatarSrc" alt="Pixel character" />
    <div class="pixel-textbox">
      <div class="pixel-name">Jostin Soza</div>
      <div
        class="pixel-dialogue-text"
        v-html="dialogueText"
        :class="{ 'pixel-cursor': showCursor }"
      ></div>
    </div>
  </div>
</template>

<style scoped>
/* Estilo principal */
.pixel-dialogue {
  border: var(--pixel-card-border);
  padding: 12px;
  background-color: var(--pixel-card-bg);
  max-width: 320px;
  box-shadow: var(--pixel-card-shadow);
  font-family: "Courier New", monospace;
  position: relative;
  margin: 20px;
}

/* Personaje */
.pixel-character {
  width: 100%;
  border: var(--pixel-card-border);
  margin-bottom: 12px;
  image-rendering: pixelated;
  transition: transform 0.2s ease;
}

.pixel-character:hover {
  transform: scale(1.02);
}

/* Caja de texto */
.pixel-textbox {
  background-color: var(--pixel-textbox-card-bg);
  border: var(--pixel-card-border);
  padding: 10px;
  position: relative;
}

/* Nombre */
.pixel-name {
  font-weight: bold;
  background: var(--pixel-card-name-bg);
  display: inline-block;
  padding: 4px 8px;
  border: var(--pixel-card-border);
  margin-bottom: 8px;
  font-family: "Press Start 2P", cursive;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Texto del diálogo */
.pixel-dialogue-text {
  margin-top: 8px;
  font-size: 0.9rem;
  line-height: 1.5;
  min-height: 4.5em;
  white-space: pre-wrap;
}

/* Cursor */
.pixel-cursor::after {
  content: "▋";
  color: var(--pixel-card-accent);
  animation: blink 0.7s steps(1) infinite;
  font-weight: bold;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

/* Efecto de máquina de escribir */
@keyframes typewriter {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* Responsive */
@media (max-width: 480px) {
  .pixel-dialogue {
    max-width: 280px;
    margin: 10px;
  }

  .pixel-name {
    font-size: 0.7rem;
  }

  .pixel-dialogue-text {
    font-size: 0.8rem;
  }
}
</style>
