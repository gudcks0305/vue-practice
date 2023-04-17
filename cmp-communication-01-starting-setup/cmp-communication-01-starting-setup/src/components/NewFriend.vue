<template>
    <form>
      <div>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" v-model="friend.name" />
      </div>
      <div>
        <label for="phone">Phone</label>
        <input type="text" id="phone" name="phone" v-model="friend.phone" />
      </div>
      <div>
        <label for="email">Email</label>
        <input type="text" id="email" name="email" v-model="friend.email" />
      </div>
      <input type="radio" id="isFavorite" name="isFavorite" v-model="friend.isFavorite">
      <button type="button" @click="addFriend">Add Friend</button>
    </form>
</template>

<script>
import Friend from '../Friend';

export default {
  emits: {
    'add-friend': function (friend) {
      if (typeof friend !== 'object') {
        return new Error('friend must be an object');
      }
      if (typeof friend.name !== 'string') {
        return new Error('friend.name must be a string');
      }
      if (typeof friend.phone !== 'string') {
        return new Error('friend.phone must be a string');
      }
      if (typeof friend.email !== 'string') {
        return new Error('friend.email must be a string');
      }
      if (typeof friend.isFavorite !== 'boolean') {
        return new Error('friend.isFavorite must be a boolean');
      }
      if (friend.name.trim().length === 0) {
        return new Error('friend.name must not be empty');
      }
      if (friend.phone.trim().length === 0) {
        return new Error('friend.phone must not be empty');
      }
      if (friend.email.trim().length === 0) {
        return new Error('friend.email must not be empty');
      }
    }
  },
  data() {
    return {
      friend: new Friend(),
    }
  },
  methods: {
    addFriend() {
      this.$emit('add-friend', this.friend);
      this.friend.id = new Date().toISOString();
      console.log(this.friend);
      this.friend = new Friend();
    },
   
  }
}

</script>

<style  scoped></style>