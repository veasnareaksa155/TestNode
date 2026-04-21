<template>
    <h1 :class="{active: name === 'Vue 3'}">{{ name }}</h1>
</template>


<script setup>
import { ref } from 'vue';
const name = ref('Vue 3');
</script>