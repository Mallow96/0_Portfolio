<script setup></script>

<template>
  <section id="experience" class="main-section">
    <div class="container gap-13">
      <h3>{{ $t("experience.expTitle") }}</h3>

      <div class="card-group w-4/5 flex flex-col gap-4">
        <div
          class="card"
          v-for="(item, index) in $tm('experience.myExp')"
          :key="index"
        >
          <div class="card-content w-full flex flex-col gap-5">
            <div
              class="content-top flex flex-row justify-start items-center w-full gap-3"
            >
              <div class="icon text-3xl">
                <i :class="item.iconName"></i>
              </div>

              <div
                class="top-content flex flex-row justify-between items-center w-full"
              >
                <div class="top-left flex flex-col gap-1">
                  <h4 class="card-title">{{ $rt(item.position) }}</h4>
                  <p>{{ $rt(item.company) }}</p>
                </div>
                <div class="top-right flex flex-col gap-1">
                  <p>{{ $rt(item.duration) }}</p>
                  <div class="tag text-right">{{ $rt(item.type) }}</div>
                </div>
              </div>
            </div>

            <div class="content-bot">
              <ul>
                <li
                  v-for="(i, index) in $tm(
                    `experience.myExp.${index}.description`,
                  )"
                  :key="index"
                >
                  {{ i }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card {
  border: 1px solid var(--color-border-home-skills);
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
  transition: border-color 0.3s ease;
}

.card .card-title {
  text-align: start;
}

ul {
  list-style-type: disc;
  padding-left: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.icon {
  padding: 1rem;
  aspect-ratio: 1 / 1;
  background-color: var(--color-bg-home-exp-icon);
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
