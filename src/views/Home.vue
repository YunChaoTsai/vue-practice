<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Timer @on-time-up="handleTimeUp" :from="3000" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Timer from '@/components/Timer.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    Timer,
  },
  methods: {
    handleTimeUp(payload: { message: string }) {
      alert(payload.message);
    }
  }
});
</script>
