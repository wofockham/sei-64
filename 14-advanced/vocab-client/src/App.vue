<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <div class="ui inverted segment navbar">
      <div class="ui center aligned container">
        <div class="ui large secondary inverted pointing menu compact">
          <RouterLink to="/words" class="item">
            <i class="comment outline icon" /> Words
          </RouterLink>
          <RouterLink to="/words/new" class="item">
            <i class="plus circle icon" /> New
          </RouterLink>
          <RouterLink to="/test" class="item">
            <i class="graduation cap icon" /> Test
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="ui text container">
      <div class="ui one column grid">
        <div class="column">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#app > div.navbar {
  margin-bottom: 1.5em;
}

input {
  width: 300px;
}

div.label {
  width: 120px;
}

div.input {
  margin-bottom: 10px;
}

button.ui.button {
  margin-top: 15px;
  display: block;
}
</style>