<script setup>
import { ref } from "vue";

const copied = ref(false);

const copyEmail = async () => {
  const email = "mencheliu@gmail.com";
  try {
    await navigator.clipboard.writeText(email);
    copied.value = true;

    setTimeout(() => {
      copied.value = false;
    }, 1500);
  } catch (err) {
    console.error("無法複製", err);
  }
};
</script>

<template>
  <section id="contact" class="main-section">
    <div class="container">
      <div class="titles flex flex-col gap-8">
        <h2>{{ $t("contact.title") }}</h2>
        <h4>{{ $t("contact.subtitle") }}</h4>
      </div>

      <div class="contact-links flex justify-center items-center gap-20">
        <button id="email-btn" class="contact-btn" @click="copyEmail">
          <i class="fa-solid fa-envelope"></i>
          <p>{{ $t("contact.email") }}</p>
        </button>
        <a
          id="linkedin-btn"
          class="contact-btn"
          href="https://www.linkedin.com/in/men-che-liu-417b2b227"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-linkedin"></i>
          <p>{{ $t("contact.linkedin") }}</p>
        </a>
      </div>
    </div>
  </section>

  <transition name="fade">
    <span v-if="copied" class="copy-tooltip">{{ $t("contact.copied") }}</span>
  </transition>
</template>

<style scoped>
#contact {
  scroll-margin-top: calc(var(--header-h) + var(--gap-header-main));
  background-color: rgba(21, 93, 251, 0.1);
}

.container {
  gap: 3rem;
}

.contact-btn {
  display: block;
  width: 18.75rem;
  height: 4.5rem;
  border: 1px solid gray;
  border-radius: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
}

.contact-btn i {
  font-size: 1.5rem;
  color: rgb(79, 149, 255);
}

.copy-tooltip {
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  background: #42b983;
  color: white;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 0.8rem;
  white-space: nowrap;
}

/* Transition 動畫 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translate(-50%, 10px);
}
</style>
