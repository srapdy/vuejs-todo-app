import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        vxTodos: [
            { "item": "Read Vue.js"},
            { "item": "Book flight tickets"}
          ]
    },
    getters: {
        countTodos: state => {
            return state.vxTodos.length
        }
    },
    mutations: {
        ADD_TODO: (state, task) => {
            state.vxTodos.push(task)
        },
        REMOVE_TODO: (state, index) => {
            state.vxTodos.splice(index, 1)
        }
    },
    actions: {
        REMOVE_ALL: (context) => {
            context.state.vxTodos = [];
        }
    }
})