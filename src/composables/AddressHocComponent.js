import {h, ref, onMounted, watch, isRef} from 'vue'
export default function HocComponent({WrappedComponent,fetchData,props}) {
  const addressData = ref([])
  const currentPage = ref(1)
  const loading = ref(true);
  const getData =async ()=>{
    loading.value = true
    setTimeout(async()=>{
      const data = await fetchData()
      addressData.value = data.data
      loading.value = false
    },1000)
  }
  function nextPage() {
    currentPage.value=++currentPage.value;
    getData()
  }

  function prevPage() {
    if (currentPage.value <= 1) {
      return;
    }
    currentPage.value=--currentPage.value;
    getData()
  }
  onMounted(()=>{
    getData()
  })
  const component= () =>{
    if(addressData.value&&addressData.value.length &&!loading.value){
      return h('div',[
        h(WrappedComponent,{...props,addressData:addressData.value}),
        h('div',[
          h('div',`当前是第${currentPage.value}页`),
          h('button',{ class: 'btn', onClick: prevPage }, '上一页'),
          h('button',{ class: 'btn', onClick: nextPage }, '下一页')
        ])
      ])
    }
    return h('div',{},'Loading...')
  }
  return {addressData, component,loading}
}
