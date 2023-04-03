<script setup>
import { computed } from "@vue/reactivity";

const props = defineProps(["value", "tooltip", "tooltipPosition"]);
let classes = computed(() => {
    if (props.tooltip && props.tooltipPosition !== undefined) {
      return `ml-2 tooltip tooltip-${props.tooltipPosition} whitespace-pre-line`;
    }
    return `ml-2 tooltip tooltip-up whitespace-pre-line`
})
</script>

<template>
  <label class="block font-medium text-md text-base-content mb-3">
    <span v-if="value">{{ value }}</span>
    <span v-else><slot /></span>
    <div
      v-if="tooltip"
      :class="classes"
      :data-tip="tooltip"
    >
      <i-uil-comment-info class="text-sm" />
    </div>
  </label>
</template>
