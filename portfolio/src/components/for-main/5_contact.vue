<script setup></script>

<template>
  <section id="contact">
    <div class="titles">
      <h2>{{ $t("contact.title") }}</h2>
      <h4>{{ $t("contact.subtitle") }}</h4>
    </div>

    <div class="contact-links"></div>
  </section>
</template>

<style scoped>
#contact {
  scroll-margin-top: calc(var(--header-h) + var(--gap-header-main));
}
</style>
