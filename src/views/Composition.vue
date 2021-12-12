<template>
    <div class="home">
        <h2>Composition</h2>
    </div>
    <div>
        <h3>You have {{  todosCount }}  Todo's</h3>

        <input  v-model="newTodoName"
                @keyup.enter="add"
                type="text"
                placeholder="Add a todo">
    </div>
    <div>
        <ul>
            <li v-for="(todo,index) in todos" :key="todo.id">
                <span>{{todo.name}}</span>
                <button @click="deleteTodo(index)">X</button>
            </li>
        </ul>
    </div>
</template>
<script>
    import { ref, computed } from 'vue'
    export default {
        setup() {
            const name = ['munna','rahman','mustafizur']
            let newTodoName = ref('')
            let todos = ref([])

            let todosCount = computed(() => {
                return todos.value.length
            })

            function add() {
                console.log("add todo function run")
                let newTodo  = {
                    id: Date.now(),
                    name: newTodoName.value
                }
                todos.value.push(newTodo)
                newTodoName.value= ''
            }

            function deleteTodo(index) {
                todos.value.splice(index,1)
            }

            return {
                newTodoName,
                todos,
                name,
                todosCount,
                add,
                deleteTodo
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