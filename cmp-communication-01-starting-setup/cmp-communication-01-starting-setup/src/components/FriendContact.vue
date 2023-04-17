<template>
  <li>
    <h2>{{ friend.name }}
      {{ friend.isFavorite ? '(Favorite)' : '' }}
    </h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <button @click="toggleFavorite">detaile</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ friend.phone }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ friend.email }}
      </li>
    </ul>
    <button @click="$emit('remove', friend.id)">delete</button>
  </li>
</template>

<script>
import Friend from '../Friend';
export default {
  props: {
    friend: {
      type: Friend,
      required: true
    }
  },
  emits: [
    'toggle-favorite',
    'remove'
  ],
  
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.friend.id);
    }
  }
};
</script>