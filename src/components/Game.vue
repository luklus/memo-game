<template>
  <section class="game">
    <div class="game__head">
      <h1>Memory Game</h1>
      <Play @play="play" />
    </div>

    <div class="game__grid">
      <Card
        v-for="card in game"
        :key="card.id"
        :card="card"
        @showCard="showCard"
      />
    </div>
  </section>
</template>

<script>
import { animals } from '@/data/animals'
import Card from '@/components/Card'
import Play from '@/components/Play'

export default {
  name: 'Game',

  components: {
    Card,
    Play,
  },

  data() {
    return {
      game: [],
      gameOpts: animals,
      playGame: false,
      test: [],
    }
  },

  methods: {
    initGame() {
      const shuffleAndSlice = (arrayToShuffleAndSlice, slice) =>
        arrayToShuffleAndSlice.sort(() => Math.random() - 0.5).slice(0, slice)

      const arrayShuffledAndSliced = shuffleAndSlice(this.gameOpts, 12)

      const arrayOne = arrayShuffledAndSliced.map((item, index) => ({
        ...item,
        id: `a-${index}`,
        over: false,
        show: false,
      }))

      const arrayTwo = arrayShuffledAndSliced.map((item, index) => ({
        ...item,
        id: `b-${index}`,
        over: false,
        show: false,
      }))

      const arrayFinished = [...arrayOne, ...arrayTwo]

      this.game = shuffleAndSlice(arrayFinished, 24)

      setTimeout(() => {
        this.playGame = true
      }, 750)
    },

    play() {
      this.playSound(
        'http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3',
      )
      this.initGame()
    },

    playSound(sound) {
      if (sound) {
        const audio = new Audio(sound)
        audio.play()
      }
    },

    showCard(id) {
      const cardShow = this.game.find(card => card.id === id)

      if (cardShow.show || this.test.length === 2) return

      this.playSound(
        'http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3',
      )

      this.test.push(cardShow)

      cardShow.show = true

      setTimeout(() => {
        if (this.test.length === 2) {
          const [cardA, cardB] = this.test

          if (cardA.name === cardB.name) {
            cardA.over = true
            cardB.over = true
          } else {
            cardA.show = false
            cardB.show = false
          }

          this.test = []
        }
      }, 2500)
    },
  },
}
</script>

<style lang="scss" scoped>
.game {
  display: flex;
  flex-direction: column;
  height: 100vh;

  &__head {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;

    h1 {
      font-size: 2rem;
    }
  }

  &__grid {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(8, 1fr);
  }
}
</style>
