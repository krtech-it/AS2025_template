<template>
  <q-item
    clickable
    :disable="disabled"
    :to="disabled ? '/import' : link"
    exact
  >
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon"/>
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>

    <q-item-section v-if="side" side top>
      <q-badge :color="side.color" :label="side.label" align="middle"/>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
defineOptions({
  name: 'EssentialLink'
})

export interface EssentialLinkProps {
  title: string;
  caption?: string;
  link?: string;
  icon?: string;
  side?: { color: string, label: string };
  disabled?: boolean
}

withDefaults(defineProps<EssentialLinkProps>(), {
  caption: '',
  link: '#',
  icon: '',
  disabled: false
})
</script>
