<script setup>
import { useCounterStore } from '../stores/counter.ts'
const counterStore = useCounterStore();

</script>

<template>
    <div>
      <button @click="counterStore.increment">
        You clicked me {{ counterStore.count }} times.
      </button>
      <p>Double count: {{ counterStore.doubleCount }}</p>
    </div>
  </template>

