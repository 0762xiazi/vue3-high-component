import {h, ref} from 'vue'
export default function open($emit) {
  const count = ref(0)
  const reset = () => {
    count.value=0
  }
  const increase = () =>{
    count.value=count.value+1
  }
  const component= () =>{
    return [
      h('div', { class: 'counter-display' }, [
        h('span', { class: 'counter-label' }, '恭喜你，你已经写了'),
        h('span', { class: 'counter-text' }, count.value),
        h('span', { class: 'counter-label' }, '斤代码！'),
      ]),
      h('div', { class: 'counter-btns' }, [
        h('button', { class: 'btn', onClick: increase }, '写一斤'),
        h('button', { class: 'btn', onClick: reset }, '删库啦'),
      ])
    ]
  }
  return {count, reset, increase,component}
}
