<template>
  <div class="row justify-evenly q-gutter-sm">
    <div v-for="tour in ourTours" :key="tour.id">
      <TourCard
        :title="tour.title"
        :visited="tour.visited"
        :ordered="tour.ordered"
        :favorite="tour.favorite"
        :feedback="tour.feedback"
        :stars="tour.stars"
        :adultPrice="tour.adultPrice"
        :infant-price="tour.infantPrice"
        :infant-age="tour.infantAge"
        :time-duration="tour.timeDuration"
        :count="tour.count"
        :type="tour.type"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import TourCard from './TourCard.vue';
import { useTourStore } from 'stores/tour-infos';

const props = defineProps({
  tourIDs: Array,
});
const allTours = useTourStore().tours;
const ourTours = allTours.filter((tour) => props.tourIDs?.includes(tour.id));
console.log(ourTours);
</script>
