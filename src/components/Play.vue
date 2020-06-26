<template>
  <button class="play" type="button" @click="$emit('play')">
    <img src="@/assets/images/icons/play.svg" alt="Play" width="32px" />
  </button>
</template>

<script>
export default {
  name: 'Play',
}
</script>

<style lang="scss" scoped>
.play {
  align-items: center;
  background-color: #fff;
  border: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  outline: 0;
}
</style>
