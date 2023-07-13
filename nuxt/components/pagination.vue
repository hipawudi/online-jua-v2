<template>
  <nav aria-label="Page navigation" v-if="showPagination">
    <ul class="inline-flex space-x-2">
      <li>
        <button
          class="
            flex
            items-center
            justify-center
            w-10
            h-10
            transition-colors
            duration-150
            rounded-full
            focus:shadow-outline
          "
          :disabled="!hasPrevious"
          :class="!hasPrevious ? 'text-neutral-500' : 'hover:bg-purple-100 text-purple-800'" 
          @click="toPreviousPage"
        >
          <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
              fill-rule="evenodd"
            ></path>
          </svg>
        </button>
      </li>
      <li v-for="page in pagination.pageCount" :key="page">
        <NuxtLink :to="`?page=${page}`" class="">
        <button
          class="
            w-10
            h-10
            transition-colors
            duration-150
            rounded-full
            focus:shadow-outline
          "
          :class="page === pagination.page ?
           'text-white bg-purple-800 border border-r-0 border-purple-800 hover:bg-purple-700':
           'text-purple-800 hover:bg-purple-100'"
        >
        {{ page }}
        </button>
        </NuxtLink>
      </li>
      <li>
        <button
          class="
            flex
            items-center
            justify-center
            w-10
            h-10
            transition-colors
            duration-150
            rounded-full
            focus:shadow-outline
          "
          :disabled="!hasNext"
          :class="!hasNext ? 'text-neutral-500' : 'hover:bg-purple-100 text-purple-800'" 
          @click="toNextPage"
        >
          <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
              fill-rule="evenodd"
            ></path>
          </svg>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const router = useRouter()

const props = defineProps({
    pagination: {
        type: Object,
        required: true
    }
})

const hasPrevious = computed(() => {
    return props.pagination.page > 1
})

const hasNext = computed(() => {
    return props.pagination.page < props.pagination.pageCount
})

const showPagination = computed(() => {
    return props.pagination.pageCount > 1
})

const toNextPage = () => {
    if (hasNext.value) {
      navigateTo({
        query: {
          page: props.pagination.page + 1
        }
      })
    }
}

const toPreviousPage = () => {
    if (hasPrevious.value) {
      navigateTo({
        query: {
          page: props.pagination.page - 1
        }
      })
    }
}

</script>
