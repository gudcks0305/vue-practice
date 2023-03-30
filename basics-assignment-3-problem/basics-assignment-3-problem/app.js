const app = Vue.createApp({
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    add(num) {
      this.count = this.count + num;
      
    }
  },
  computed: {
    result() {
      if (this.count < 37) {
        return 'Not there yet';
      } else if (this.count === 37) {
        return this.count;
      } else {
        return 'Too much!';
      }
    }
  },
  watch: {
    count(value) {
      // timeout 여러번 실행 되지 않도록 하는 방법은 ?
      const that = this;
      setTimeout(() => {
        that.count = 0;
      }
      , 5000);

    }

  }
});

app.mount('#assignment');

