import { ref, onMounted, isRef, watch } from "vue";
import address from "../api/address";

export function usePagination() {
  const currentPage = ref(1)
  function nextPage() {
    currentPage.value=++currentPage.value;
  }

  function prevPage() {
    if (currentPage.value <= 1) {
      return;
    }
    currentPage.value=--currentPage.value;
  }

  return {
    nextPage,
    prevPage,
    currentPage
  };
}

export function useFetch(endpoint,currentPage) {
  const data = ref(null);
  const loading = ref(true);

  function fetchData() {
    loading.value = true;
    setTimeout(async()=>{
      const addressList = await address[endpoint.value]({currentPage:currentPage.value})
      data.value = addressList.data
      loading.value = false;
    },1000)
  }

  onMounted(() => {
    fetchData();
  });

  if (isRef(currentPage)) {
    watch(currentPage, () => {
      fetchData();
    });
  }

  return {
    data,
    loading
  };
}
