<script setup></script>

<template>
  <section id="skills" class="main-section">
    <div class="container gap-13">
      <h3>{{ $t("skills.title") }}</h3>

      <div class="card-group flex flex-row gap-8 w-4/5 mx-auto">
        <div class="card translation">
          <div class="icon">
            <span class="icon-wrap text-blue-400 bg-blue-800/20 p-2">
              <span class="material-symbols-outlined"> translate </span>
            </span>
          </div>
          <div class="card-title">
            <h4>{{ $t("hero.skills.translation") }}</h4>
          </div>
          <div class="card-content">
            <ul>
              <li>{{ $t("skills.translation.d1") }}</li>
              <li>{{ $t("skills.translation.d2") }}</li>
              <li>{{ $t("skills.translation.d3") }}</li>
            </ul>
          </div>
        </div>

        <div class="card localization">
          <div class="icon">
            <span class="icon-wrap text-purple-500 bg-purple-800/20">
              <span class="material-symbols-outlined"> stadia_controller </span>
            </span>
          </div>
          <div class="card-title">
            <h4>{{ $t("hero.skills.localization") }}</h4>
          </div>
          <div class="card-content">
            <ul>
              <li>{{ $t("skills.localization.d1") }}</li>
              <li>{{ $t("skills.localization.d2") }}</li>
              <li>{{ $t("skills.localization.d3") }}</li>
            </ul>
          </div>
        </div>

        <div class="card web">
          <div class="icon">
            <span class="icon-wrap text-green-600 bg-green-800/20">
              <span class="material-symbols-outlined"> code </span>
            </span>
          </div>
          <div class="card-title">
            <h4>{{ $t("hero.skills.web") }}</h4>
          </div>
          <div class="card-content">
            <ul>
              <li>{{ $t("skills.web.d1") }}</li>
              <li>{{ $t("skills.web.d2") }}</li>
              <li>{{ $t("skills.web.d3") }}</li>
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
}

.card > .card-title > h4 {
  text-align: start;
}
</style>
