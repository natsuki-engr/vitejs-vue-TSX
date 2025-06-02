<script setup lang="tsx">
import { h } from 'vue';
import HelloWorld from './components/HelloWorld.vue'

const { message } = defineProps(['message']);

const render = () => {
  return <HelloWorld msg="Hello" />;
};
</script>

<template>
  <render />
</template>
