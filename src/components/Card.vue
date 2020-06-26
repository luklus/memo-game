<template>
  <div
    class="card"
    :class="{ 'card--show': card.show || card.over }"
    @click="$emit('showCard', card.id)"
  >
    <transition name="fade">
      <template v-show="card.show || card.over">
        <img :src="image" alt="" class="card__image" />
      </template>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'MemoCard',

  props: {
    card: {
      required: true,
      type: Object,
    },
  },

  data() {
    return {
      isShow: false,
    }
  },

  computed: {
    image() {
      return require(`@/assets/images/memo/selected/${this.card.name}.svg`)
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  align-items: center;
  background-color: rgba(var(--bg), 0.25);
  border: 1px solid var(--primary);
  border-radius: 0.25rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 0.5rem;

  &__image {
    visibility: hidden;
    width: 100%;
  }

  &--show {
    .card__image {
      visibility: visible;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
