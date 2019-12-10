<template>
  <div id="app">
    <div>
      <overview />
      <entry-form />
      <log />
    </div>
  </div>
</template>

<script>
import overview from "./overview.vue";
import entryForm from "./entry-form.vue";
import log from "./log.vue";

export default {
  name: "App",
  components: {
    overview,
    entryForm,
    log
  }
};
</script>
