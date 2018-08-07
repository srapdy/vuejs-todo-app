<template>
  
  <div class="container">
    <div class="holder">

      <form @submit.prevent="addTodo">
      <input type="text" placeholder="Enter a task to do..." v-model="todo" v-validate="'max:120'" name="task">
      <p class="alert" v-if="errors.has('task')">{{ errors.first('task') }}</p>
      </form>
      {{ todo }}
      <ul>
        <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
        <li v-for="(data, index) of todos" :key='index'>{{ data.item }}
          <i class="fa fa-minus-circle" v-on:click="remove(index)"></i>
        </li>
        </transition-group>
      </ul>
      <p>Your task list above</p>
      <button @click="removeAll" class="rm" v-show="!isEmpty">Remove All</button>
    </div>
  </div>
</template>

<script>

import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: 'Todo',
  computed: {
    ...mapState({
      todos: 'vxTodos'
    }),
    ...mapGetters({
      count: 'countTodos'
    }),
    isEmpty() {
      return this.count === 0;
    }
  },
  data () {
    return {
      todo: ''
    }
  },
  methods: {
    ...mapMutations([
      'ADD_TODO',
      'REMOVE_TODO'
    ]),
    ...mapActions([
      'REMOVE_ALL'
    ]),
    addTodo() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.ADD_TODO({item: this.todo})
          this.todo = ''
        }
      })
    },
    remove(index) {
      this.REMOVE_TODO(index)
    },
    removeAll() {
      this.REMOVE_ALL()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

  @import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

  .holder {
    background: #fff;
    word-wrap: break-word;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  
  ul li {
    padding: 20px;
    font-size: 1.3em;
    word-wrap: break-word;
    background-color: #E0EDF4;
    border-left: 5px solid #3EB3F6;
    margin-bottom: 2px;
    color: #3E5252;

  }

  p {
    text-align:center;
    padding: 30px 0;
    color: gray;
  }

  .container {
    box-shadow: 0px 0px 40px lightgray;
  }

  input {
    width: calc(100% - 40px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: #687F7F;
  }

  .alert {
    background: #fdf2ce;
    font-weight: bold;
    display: inline-block;
    padding: 5px;
    margin-top: -20px;
  }

  i {
    float: right;
    cursor: pointer;
  }

  .rm {
    float: right;
    text-transform: none;
    background: #fff;
    border: 0px;
    padding: 10px;
    color: rgb(0, 110, 255);
    cursor:pointer;
    font-size: 1em;
    font-weight: bold;
    border-radius: 3px;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
  }

</style>
