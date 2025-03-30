<template>
  <q-card class="no-shadow" bordered>
    <q-img :src="data.img" height="220px">
      <q-chip v-if="data.chip" :class="data.chipClass" :color="data.chipColor" :label="data.chip"></q-chip>
    </q-img>

    <q-card-section>
      <q-btn
        fab
        color="teal-7"
        icon="fas fa-cart-plus" padding="sm"
        class="absolute"
        style="top: 0; right: 12px; transform: translateY(-50%);"
      />
    </q-card-section>

    <q-card-section>
      <div class="text-h6">
        {{ data.title }}
      </div>
      <div class="text-subtitle1 text-justify q-mt-sm">
        {{ data.caption }}
      </div>
      <div>
        <q-rating
          v-model="rating"
          max="5"
          size="1.5em"
          color="yellow"
          icon="star_border"
          icon-selected="star"
          icon-half="star_half" readonly
          no-dimming
        />
      </div>
    </q-card-section>
    <q-card-section>
      <div class="col-12">
        <span class="text-h6">{{ data.amount }}</span>
        <span class="text-h6 float-right">
          <q-btn label="See Details" rounded color="secondary" outline></q-btn>
        </span>
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

type Props = {
  data: {
    amount: number,
    rating: number,
    title: string,
    caption: string,
    img: string,
    chip: string,
    chipClass: string,
    chipColor: string
  }
}
const props = defineProps<Props>()
const emit = defineEmits(['update-rating'])
const rating = computed({
  get: () => props.data.rating,
  set: (val) => emit('update-rating', val)
})
</script>

<style scoped>

</style>
