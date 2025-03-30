<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated :class="$q.dark.isActive ? 'bg-secondary' : 'bg-primary'">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Task.Planner
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'">
      <!--    :mini="miniState"-->
      <!--    @mouseenter="miniState = false"-->
      <!--    @mouseleave="miniState = true"-->
      <!--    :width="200"-->
      <!--    :breakpoint="500"-->

      <LeftPanel/>
    </q-drawer>

    <q-page-container class="bg-grey-11">
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LeftPanel from 'components/LeftPanel/LeftPanel.vue'

const leftDrawerOpen = ref(false)

// const miniState = ref(true)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
