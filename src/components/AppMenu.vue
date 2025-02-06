<template>
  <v-app-bar>
    <v-btn text to="/">Home</v-btn>
    <v-menu open-on-hover offset-y>
      <template v-slot:activator="{ props }">
        <v-btn text v-bind="props">
          Submenu <v-icon>mdi-menu-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item to="/about">About</v-list-item>
        <v-list-item to="/contact">Contact</v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script setup>
  //
</script>
<style scoped>
  .v-app-bar {
    display: block;
    align-items: center;
    justify-content: center;
  }

  .v-list {
    display: block;
    align-items: center;
    justify-content: center;
  }
  .v-list-item {
    display: block;
    align-items: center;
    justify-content: center;
  }
  .v-list-item:hover {
    color: #673147;
  }
</style>

