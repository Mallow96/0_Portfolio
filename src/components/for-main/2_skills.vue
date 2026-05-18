<script setup></script>

<template>
  <section id="skills" class="main-section">
    <div class="container gap-13">
      <h3>{{ $t("skills.skillsTitle") }}</h3>

      <div class="card-group grid grid-cols-3 gap-4 w-full">
        <div
          class="card"
          v-for="(item, index) in $tm('skills.mySkills')"
          :key="index"
        >
          <div class="icon">
            <span class="icon-wrap">
              <span class="material-symbols-outlined">
                {{ $rt(item.iconName) }}
              </span>
            </span>
          </div>
          <div class="card-title">
            <h4 class="font-semibold">{{ $rt(item.name) }}</h4>
          </div>
          <div class="card-content">
            <ul>
              <li
                v-for="(i, index) in $tm(
                  `skills.mySkills.${index}.description`,
                )"
                :key="index"
              >
                {{ $rt(i) }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#skills {
  background-color: var(--color-bg-home-skills);
}

ul {
  list-style-type: disc;
  padding-left: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.card {
  border: 1px solid var(--color-border-home-skills);
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: border-color 0.3s ease;

  border: 1px solid var(--color-secondary-gray);
}

.card:hover {
  border: 1px solid var(--color-dark-orange);
  transform: translateY(-2px);
}

.card .icon span {
  font-size: 2.5rem;
  border-radius: 1rem;
}

.icon-wrap {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;

  color: var(--color-text);
  background-color: var(--color-home-skills-icon);
}

.card > .card-title > h4 {
  text-align: start;
  color: var(--color-main-orange);
}

.card-content {
  color: var(--color-text);
}
</style>
