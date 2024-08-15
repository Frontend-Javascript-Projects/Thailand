<template>
  <div>
    <q-card class="my-card" flat bordered>
      <q-img :src="imgPath" />

      <q-card-section>
        <div class="row no-wrap justify-center q-gutter-xs text-grey">
          <q-icon name="visibility" class="text-grey" /> {{ props.visited }} ・
          <q-icon name="shopping_cart" class="text-grey" />
          {{ props.ordered }} ・
          <q-icon name="favorite" class="text-grey" />
          {{ props.favorite }}・ Отзывы {{ props.feedback }}
          <q-rating color="red" v-model="currStars" :max="5" size="15px" />
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">{{ props.title }}</div>
        <div class="text-caption text-grey">
          <span class="price">${{ props.adultPrice }}</span
          >/взр ・ <span class="price">${{ props.infantPrice }}</span
          >/возраст
          {{ props.infantAge }}
        </div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <div class="text-caption">
          <q-icon name="schedule" /> {{ props.timeDuration }} ч・
          <q-icon name="group" /> до {{ props.count }} чел・
          <q-icon name="add_circle" /> {{ props.type }}
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
const props = defineProps([
  'title',
  'visited',
  'ordered',
  'favorite',
  'feedback',
  'stars',
  'adultPrice',
  'infantPrice',
  'infantAge',
  'timeDuration',
  'count',
  'type',
  'img',
]);
const currStars = props.stars;
const imgPath = props.img;
</script>
