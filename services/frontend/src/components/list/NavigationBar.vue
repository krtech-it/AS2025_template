<script setup lang="ts">
const mode = defineModel('mode')
const emit = defineEmits(['today', 'prev', 'next'])
</script>

<template>
  <div class="row">
    <div class="q-pa-md q-gutter-md row">
      <q-btn no-caps dense @click="emit('prev')"> &lt; Раньше</q-btn>
      <q-btn no-caps dense @click="emit('today')">Сегодня</q-btn>
      <q-btn no-caps dense @click="emit('next')"> Позже &gt;</q-btn>
      <q-select
        v-if="mode"
        map-options
        emit-value
        options-dense
        outlined
        dense
        v-model="mode"
        :options="[{value: 'week', label: 'неделя'}, {value: 'month', label: 'месяц'}]" />
    </div>
  </div>
</template>

<style scoped>

</style>
