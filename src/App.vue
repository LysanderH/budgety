<template>
  <div id="app">
    <div>
      <Summary v-bind:income="income" v-bind:expenses="expenses" />
      <Entryform v-bind:income="income" v-bind:expenses="expenses" />
      <Log v-bind:income="income" v-bind:expenses="expenses" />
    </div>
  </div>
</template>

<script>
import Summary from './summary.vue';
import Entryform from './entry-form.vue';
import Log from './log.vue';

export default {
  
  name: 'App',
  data:function(){
    return {
      income: [],
      expenses: [],
      total: 0,      
    }
  },
  components: { 
    Summary,
    Entryform,
    Log
   },
  template: '<App />',

}
</script>

<style>

</style>