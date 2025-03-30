<script setup lang="ts">

</script>

<template>
  <q-banner class="bg-white text-red">
    <template v-slot:avatar>
      <q-icon name="warning" color="negative" />
    </template>
    <div class="text-negative">Необходимо импортировать Заказы/задачи!!!</div>
    <template v-slot:action>
      <q-btn flat color="primary" label="Перейти на страницу импорта" to="/import" />
    </template>
  </q-banner>

</template>

<style scoped>

</style>
