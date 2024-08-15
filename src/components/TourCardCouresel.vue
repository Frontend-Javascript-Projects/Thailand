<template>
  <div>
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="dark"
      arrows
      infinite
      height="390px"
    >
      <q-carousel-slide
        v-for="n in slidesCount"
        :key="n"
        :name="n"
        class="row no-wrap flex-center justify-evenly"
      >
        <CoureselElement
          :tourIDs="tourIdsFormula(n * tourCountsForEachSlide)"
        />
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CoureselElement from './CoureselElement.vue';
import { useQuasar } from 'quasar';
import { computed } from 'vue';

const $q = useQuasar();
const slide = ref(1);
const width = $q.screen.width;
var tourCountsForEachSlide = computed(() => Math.floor(width / 400));
const slidesCount = computed(() =>
  Math.ceil(30 / tourCountsForEachSlide.value)
);
console.log('slide count is =>' + slidesCount.value);

const tourIdsFormula = (n: number) => {
  console.log('n is =>' + n);

  let ids = new Array(tourCountsForEachSlide.value);
  for (let i = 0; i < ids.length; i++) {
    ids[i] = n;
    n++;
  }
  console.log('ids are like this=>' + ids);

  return ids;
};
</script>
