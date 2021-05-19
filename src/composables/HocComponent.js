import {h, ref} from 'vue'
export default function HocComponent({WrappedComponent:WrappedComponent,emit:$emit}) {
  const count = ref(0)
  const reset = () => {
    count.value=0
  }
  const increase = () =>{
    count.value=++count.value
    console.log('value',count.value)
  }
  const component= () =>{
    return h(WrappedComponent,{count:count.value,AddCount: increase})
  }
  return {count, reset, increase,component}
}
