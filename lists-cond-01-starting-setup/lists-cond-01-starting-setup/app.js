const app = Vue.createApp({
  data() {
    return {
      goals: ['hi'],
      enteredValue: ''

    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
  }
});

app.mount('#user-goals');
