import { u as useStrapi } from './useStrapi-8a5d6780.mjs';
import { ref, watch, reactive } from 'vue';
import { a as useRoute } from '../server.mjs';

const useList = (entity, params) => {
  const data = ref([]);
  const { find } = useStrapi();
  const route = useRoute();
  const meta = ref({
    pagination: {
      page: 1,
      pageCount: 1,
      total: 0
    }
  });
  const loading = ref(true);
  const load = async () => {
    loading.value = true;
    const response = await find(entity, {
      ...params
    });
    data.value = response.data;
    meta.value = response.meta;
    loading.value = false;
    {
      return;
    }
  };
  watch(() => route.query.page, load);
  return reactive({
    data,
    meta,
    loading,
    load
  });
};

export { useList as u };
//# sourceMappingURL=useList-e4e3ff2c.mjs.map
