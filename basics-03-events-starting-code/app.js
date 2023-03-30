const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: 0,
      confirmedValue: ''

    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    submitForm() {
      alert('Submitted!');
    },
    confirmInput() {
      console.log(this.name);
      this.confirmedValue = this.name;
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    }
  }

});

app.mount('#events');
