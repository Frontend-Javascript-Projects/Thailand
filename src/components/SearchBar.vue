<template>
  <div>
    <q-from>
      <q-input
        v-model="search"
        outlined
        dense
        bottom-slots
        placeholder="Введите названия экскурсии"
      >
        <template v-slot:after>
          <q-btn color="my-color" unelevated class="q-p-sm" no-caps>
            Поиск
          </q-btn>
        </template>
      </q-input>
      <span class="text-bold text-caption"
        >Толка проверонней экскурсии, с онлайн бранированием на сезон 2024-2025
      </span>
    </q-from>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const search = ref('');
</script>
