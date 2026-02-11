<script setup></script>

<template>
  <section id="skills" class="main-section">
    <div class="container gap-13">
      <h3>{{ $t("skills.skillsTitle") }}</h3>

      <div class="card-group grid grid-cols-3 gap-4 w-4/5">
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
            <h4>{{ $rt(item.name) }}</h4>
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
  flex: 1 1 0;
}

.card:hover {
  border: 1px solid rgb(90, 125, 231);
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

  color: oklch(59.2% 0.249 0.584);
  background-color: oklch(45.9% 0.187 3.815 /0.2);
}

.card:nth-child(1) .icon-wrap {
  color: oklch(54.6% 0.245 262.881);
  background-color: oklch(42.4% 0.199 265.638 /0.2);
}

.card:nth-child(2) .icon-wrap {
  color: oklch(62.7% 0.194 149.214);
  background-color: oklch(44.8% 0.119 151.328 /0.2);
}

.card:nth-child(3) .icon-wrap {
  color: oklch(55.8% 0.288 302.321);
  background-color: oklch(43.8% 0.218 303.724 /0.2);
}

.card > .card-title > h4 {
  text-align: start;
}
</style>
