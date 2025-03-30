<script setup lang="ts">
const model = defineModel<boolean>()
type Props = {
  message: string
}
withDefaults(defineProps<Props>(), {
  message: 'Успешно!'
})
</script>

<template>
  <q-dialog v-model="model" persistent>
    <q-card>
      <q-card-section class="row items-center">
        <span class="text-h6 q-ml-sm">{{ message }}</span>
      </q-card-section>
      <slot></slot>
      <q-card-actions align="right">
        <slot name="actions">
          <q-btn flat label="Закрыть" v-close-popup/>
        </slot>
      </q-card-actions>
    </q-card>
  </q-dialog>

</template>

<style scoped>

</style>
