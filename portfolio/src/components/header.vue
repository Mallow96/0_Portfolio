<script setup>
import Logo from "./logo.vue";
import Settings from "./settings.vue";
</script>

<template>
  <header class="flex justify-between items-center px-4">
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
  height: var(--header-h);
}
</style>
