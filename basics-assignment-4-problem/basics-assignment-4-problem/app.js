const app = Vue.createApp({
  data() {
    return {
      user : '',
      isClicked: true,
      color : 'red',
    }
  },
  methods: {
    toggleParagraph() {
      this.isClicked = !this.isClicked;
    }
  },
  computed: {
    isClickedClass() {
      return this.isClicked ? 'visible' : 'hidden';
    }
    
  }
});

app.mount('#assignment');