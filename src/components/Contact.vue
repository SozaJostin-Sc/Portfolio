<template>
  <!-- El template se mantiene igual -->
  <section id="Contact" class="pixel-contact">
    <div class="pixel-container">
      <h2 class="pixel-title">
        <span class="pixel-text">CONTACTO</span>
        <span class="pixel-corner top-left"></span>
        <span class="pixel-corner top-right"></span>
        <span class="pixel-corner bottom-left"></span>
        <span class="pixel-corner bottom-right"></span>
      </h2>

      <div class="pixel-form-container">
        <form @submit.prevent="submitForm" class="pixel-form">
          <div class="pixel-input-group">
            <label for="name" class="pixel-label">NOMBRE:</label>
            <input
              type="text"
              id="name"
              v-model="form.name"
              class="pixel-input"
              placeholder="EJ: LINK"
            />
          </div>

          <div class="pixel-input-group">
            <label for="email" class="pixel-label">EMAIL:</label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              class="pixel-input"
              placeholder="EJ: LINK@HYRULE.KINGDOM"
            />
          </div>

          <div class="pixel-input-group">
            <label for="message" class="pixel-label">MENSAJE:</label>
            <textarea
              id="message"
              v-model="form.message"
              class="pixel-textarea"
              placeholder="¡HOLA! NECESITO UN HÉROE..."
            ></textarea>
          </div>

          <button type="submit" class="pixel-button">
            <span class="pixel-button-text">ENVIAR</span>
            <span class="pixel-button-shadow"></span>
          </button>
        </form>

        <div class="pixel-art">
          <div class="pixel-char">
            <div class="pixel-char-head"></div>
            <div class="pixel-char-body"></div>
          </div>
          <p class="pixel-hint">* LOS MENSAJES VIAJAN POR PACKET</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import "../assets/themes.css";
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      console.log("Formulario enviado:", this.form);
      alert(
        `🎮 ${this.form.name.toUpperCase()}, TU MENSAJE FUE ENVIADO (SIMULADO)`
      );
      this.form = { name: "", email: "", message: "" };
    },
  },
};
</script>

<style scoped>
/* Estilos aplicados con las variables */
.pixel-contact {
  background-color: var(--pixel-contact-bg);
  color: var(--pixel-contact-text);
  border: 5px solid var(--pixel-contact-border) !important;
}

.pixel-title {
  background: var(--pixel-contact-title-bg);
  color: var(--pixel-contact-title-text);
  text-shadow: 3px 3px 0 var(--pixel-contact-title-shadow);
  border: 5px solid var(--pixel-contact-border) !important;
}

.pixel-corner {
  background: var(--pixel-contact-corner);
}

.pixel-input,
.pixel-textarea {
  background: var(--pixel-contact-input-bg);
  color: var(--pixel-contact-input-text);
  border: 3px solid var(--pixel-contact-border) !important;
}

.pixel-label {
  color: var(--pixel-contact-label);
}

.pixel-button {
  background: var(--pixel-contact-button-bg);
  color: var(--pixel-contact-button-text);
  border: 5px solid var(--pixel-contact-border) !important;
  box-shadow: 5px 5px 0 var(--pixel-contact-button-shadow);
}

.pixel-char-head {
  background: var(--pixel-contact-head);
  border-color: var(--pixel-contact-border);
}

.pixel-char-body {
  background: var(--pixel-contact-body);
  border-color: var(--pixel-contact-border);
}

.pixel-hint {
  color: var(--pixel-contact-hint);
}

/* El resto del CSS se mantiene igual */
.pixel-contact {
  padding: 2rem;
  font-family: "VT323", monospace;
  border: 4px solid;
  position: relative;
}

.pixel-container {
  max-width: 900px;
  margin: 0 auto;
}

.pixel-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
  padding: 0.5rem 1rem;
  border: 4px solid;
}

.pixel-corner {
  position: absolute;
  width: 8px;
  height: 8px;
}

.top-left {
  top: -4px;
  left: -4px;
}
.top-right {
  top: -4px;
  right: -4px;
}
.bottom-left {
  bottom: -4px;
  left: -4px;
}
.bottom-right {
  bottom: -4px;
  right: -4px;
}

.pixel-form-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.pixel-input,
.pixel-textarea {
  border: 3px solid;
  padding: 0.8rem;
  font-family: "VT323", monospace;
  font-size: 1.2rem;
  width: 100%;
  box-sizing: border-box;
}

.pixel-input:focus,
.pixel-textarea:focus {
  outline: none;
  border-color: #fff;
}

.pixel-textarea {
  min-height: 120px;
  resize: none;
}

.pixel-label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}

.pixel-button {
  position: relative;
  border: none;
  padding: 0.8rem 1.5rem;
  font-family: "VT323", monospace;
  font-size: 1.5rem;
  cursor: pointer;
  margin-top: 1rem;
  border: 3px solid;
  transition: all 0.1s;
}

.pixel-button:hover {
  transform: translate(2px, 2px);
  box-shadow: 3px 3px 0 var(--pixel-contact-button-shadow);
}

.pixel-button:active {
  transform: translate(4px, 4px);
  box-shadow: 1px 1px 0 var(--pixel-contact-button-shadow);
}

.pixel-art {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.pixel-char {
  margin-bottom: 1rem;
}

.pixel-char-head {
  width: 32px;
  height: 32px;
  margin: 0 auto;
  border: 3px solid;
}

.pixel-char-body {
  width: 40px;
  height: 40px;
  margin: 0 auto;
  border: 3px solid;
}

.pixel-hint {
  font-size: 1rem;
  text-align: center;
}

@media (max-width: 768px) {
  .pixel-form-container {
    grid-template-columns: 1fr;
  }

  .pixel-art {
    margin-top: 2rem;
  }
}
</style>
