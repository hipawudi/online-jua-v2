
import { reactive, ref, watch } from "vue"

export const useList = (entity, params) => {
  const data = ref([])
  const { find } = useStrapi()
  const route = useRoute()

  const meta = ref({
    pagination: {
      page: 1,
      pageCount: 1,
      total: 0,
    }
  });

  const loading = ref(true);

  const load = async () => {
    loading.value = true;
    const response = await find(entity, {
      ...params,
    });

    data.value = response.data;
    meta.value = response.meta;
    loading.value = false;

    // detect if has window
    if (typeof window === "undefined") {
      return;
    }
    // scroll to top
    window?.scrollTo(0, 0);
  };

  watch(() => route.query.page, load);

  return reactive({
    data,
    meta,
    loading,
    load,
  });
};
