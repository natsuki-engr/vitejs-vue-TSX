<script setup lang="tsx">
import { h } from 'vue';
import HelloWorld from './components/HelloWorld.vue'

const { message } = defineProps(['message']);

const render = () => {
  return <div>hi</div>;
};
</script>

<template>
  <render />
</template>
