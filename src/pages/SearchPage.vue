<template>
  <q-page class="col items-center justify-evenly q-mx-xl">
    <div class="search-title q-mb-lg">Поиск и бронирования экскурсии</div>
    <SearchBar />
    <div class="q-mb-lg">
      <q-chip class="text-white" color="my-color" square>Phuket</q-chip>
      <q-chip class="text-white" color="my-color" square>Pattaya</q-chip>
      <q-chip class="text-white" color="my-color" square>Bangkok</q-chip>
      <q-chip class="text-white" color="my-color" square>Samui</q-chip>
      <q-chip class="text-white" color="my-color" square>Stambul</q-chip>
      <q-chip class="text-white" color="my-color" square>Kappadokiya</q-chip>
    </div>
    <div>
      <p class="text-h6 text-bold">
        <q-icon size="10px" name="svguse:icons.svg#fire" />
        Популярные экскурсии
      </p>
      <TourCardCouresel />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import SearchBar from 'src/components/SearchBar.vue';
import TourCardCouresel from 'src/components/TourCardCouresel.vue';
</script>
