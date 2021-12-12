<template>
  <div>
    <h2>Option</h2>
  </div>
  <div>
    <h3>You have {{todosCount}} todo's</h3>

    <input  v-model="newTodoName"
            @keyup.enter="addTodo"
            type="text"
            placeholder="Add a todo">
<!--    <h3>You have {{ todos.length }} Todo's</h3>-->
  </div>
  <div>
    <ul>
      <li v-for="(todo, index) in todos" :key="todo.id">
        <span>{{ todo.name }}</span>
        <button @click="deleteTodo(index)">X</button>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        newTodoName: '',
        todos: [],
        swearwords: ['fart', 'butt hair', 'willy']
      }
    },
    computed: {
      todosCount() {
        return this.todos.length
      }
    },
    watch: {
      newTodoName(newValue) {
        console.log('new value : ', newValue)
        if(this.swearwords.includes(newValue.toLowerCase())) {
          this.newTodoName = ''
          alert('You must  ' + "  " +  newValue + '!!!');
        }
      }
    },
    methods: {
      addTodo() {
        let newTodo = {
          id: Date.now(),
          name: this.newTodoName
        }
        this.todos.push(newTodo)
        this.newTodoName= ''
      },
      deleteTodo(index) {
        this.todos.splice(index, 1);
      }
    }
  }
</script>
<style>
  ul {
    list-style: none;
    padding: 0;
    width: 200px;
    margin: 20px auto 0;
  }
  li {
    border: 1px solid;
    display: flex;
    margin-bottom: 10px;
  }
  li span {
    flex-grow: 1;
  }
</style>