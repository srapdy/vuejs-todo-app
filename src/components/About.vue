<template>
  <div class="about">
    <h1>To do list</h1>
    <p>This is a to-do list application that helps you maintain a list of task that you intend to do.</p>
    <p>This application is built using Vue.js framework and utilizes Vuex for state management.</p>
  </div>
</template>

<script>
    export default {
        name: 'about',
        data() {
            return {
                their_name: this.$route.params.name ? this.$route.params.name : 'Anonymous'
            }
        }
    }
</script>