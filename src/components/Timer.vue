<template>
  <div>
    {{ renderText }}
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";

export default defineComponent({
  name: "Timer",
  props: {
    from: Number,
  },
  emits: {
    onTimeUp(payload: { message: string }) {
      return payload.message.length > 0;
    },
  },
  setup(props, {emit}) {
    const isTimesUp = ref(false);
    onMounted(function() {
      setTimeout(() => {
        emit("onTimeUp", {message: "ta da ~"});
        isTimesUp.value = true;
      }, props.from);
    });
    return {
      isTimesUp
    };
  },
  computed: {
    renderText(): string {
      return this.isTimesUp ? "Time up!!" : "Not yet";
    },
  },
});
</script>

<style scoped lang="scss"></style>

