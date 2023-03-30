const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      taskInput: '',
      showTasks: true,
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.taskInput);
      this.taskInput = '';
    },
    showTasksHandler() {
      this.showTasks = !this.showTasks;
    }
  },
  computed: {
    buttonCaption() {
      return this.showTasks ? 'Hide' : 'Show';
    }
  }

  });

app.mount('#assignment');