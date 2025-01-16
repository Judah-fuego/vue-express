import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

export const  useCounterStore = defineStore('counter', () => {
  const count = ref(Number(localStorage.getItem('count') || 0))
  const doubleCount = computed(() => count.value * 2)

  function increment() {
    count.value++
  }

  watch(count, (newVal) => {
    localStorage.setItem('count', String(newVal));
  });

  return { count, doubleCount, increment }
})
