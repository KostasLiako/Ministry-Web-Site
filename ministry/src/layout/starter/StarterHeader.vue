<template>
    <header class="header-global">
            <navigation ></navigation>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import CloseButton from "@/components/CloseButton";
import Navigation from '../../views/components/Navigation.vue';

export default {
  components: {
    BaseNav,
    CloseButton,
    Navigation
  }
};
</script>
<style>
</style>
