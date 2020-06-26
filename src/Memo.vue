<template>
  <main id="memo">
    <Load v-if="isLoad" />
    <Game v-else />
  </main>
</template>

<script>
import Game from '@/components/Game'
import Load from '@/components/Load'

export default {
  name: 'MemoGame',

  components: {
    Game,
    Load,
  },

  data() {
    return {
      isLoad: true,
    }
  },

  created() {
    setTimeout(() => {
      this.isLoad = false
    }, 2000)
  },
}
</script>

<style lang="scss">
:root {
  --base: #003049;
  --primary: #ef476f;
  --bg: #fdfffc;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  background-color: var(--bg);
  color: var(--base);
  font-family: 'MuseoModerno', cursive;
}
</style>

<style lang="scss" scoped>
#memo {
  height: 100vh;
  overflow: hidden;
  padding: 1rem;
  width: 100vw;
}
</style>
