<script setup lang="ts">
type Props = {
  title?: string
  message?: string
}
withDefaults(defineProps<Props>(), {
  title: 'Что-то пошло не так :(',
  message: 'Проверьте правильность введенных данных'
})
</script>

<template>
  <q-dialog>
    <q-card>
      <q-card-section class="text-center">
        <q-avatar icon="error" text-color="negative" size="5rem"/>
      </q-card-section>
      <q-card-section class="text-center">
        <span class="text-h6 q-ml-sm">{{ title }}</span>
      </q-card-section>
      <q-card-section class="text-center">
        <div v-html="message"></div>
      </q-card-section>
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
