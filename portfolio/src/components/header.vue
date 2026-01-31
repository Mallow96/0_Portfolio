<script setup>
import Logo from "./logo.vue";
import Settings from "./settings.vue";
</script>

<template>
  <header class="flex justify-between items-center">
    <Logo />
    <nav>
      <ol class="flex justify-between items-center gap-7">
        <li v-for="(item, index) in $tm('navItems')" :key="index">
          {{ $rt(item) }}
        </li>
        <li><Settings /></li>
      </ol>
    </nav>
  </header>
</template>

<style scoped>
header {
  min-height: var(--header-h);
  padding: var(--header-padding-x) var(--header-padding-y);

  background-color: var(--color-bg-header);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid gray;
}
</style>
