<template>
    <div v-if="loading" class="flex items-center justify-center absolute left-0 right-0 top-0 bottom-0 bg-white/50 py-12">
      <div
        style="border-top-color: transparent"
        class="
          w-16
          h-16
          border-4 border-purple-800 border-double
          rounded-full
          animate-spin
        "
      ></div>
    </div>
</template>

<script setup>
const props = defineProps({
    loading: {
        type: Boolean,
        required: true,
    },
})
</script>