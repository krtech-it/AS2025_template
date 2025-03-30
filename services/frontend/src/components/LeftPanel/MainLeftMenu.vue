<script setup lang="ts">

defineProps({
  disabled: Boolean,
})
import MenuLink from 'components/LeftPanel/MenuLink.vue'

const mainLinks = [
  {
    title: 'Главная',
    link: '/',
    icon: 'home'
  },
  {
    title: 'Сотрудники',
    link: '/workers',
    icon: 'group'
  },
  {
    title: 'Календарь',
    link: '/workers/calendar',
    icon: 'calendar_month'
  },
  {
    title: 'Заказы',
    link: '/orders',
    icon: 'topic', // list_alt, rule
    // side: {
    //   color: 'primary',
    //   label: 'BETA'
    // }
  },
  {
    title: 'Настройки',
    link: '/settings',
    icon: 'settings'
  },
]

</script>

<template>
  <q-separator />
  <q-list>
    <MenuLink
      v-for="link in mainLinks"
      :key="link.title"
      v-bind="link"
      :disabled="disabled"
    />
  </q-list>

</template>

<style scoped>

</style>
