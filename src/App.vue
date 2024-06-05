<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { AUTO_LOGIN_ACTION } from '@/store/storeconstants';
</script>

<template>
  <RouterView />
</template>

<script>
  export default {
    name: 'App',
    created() {
      this.$store.dispatch(`auth/${AUTO_LOGIN_ACTION}`);   
    },
  }
</script>