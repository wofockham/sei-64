<script>
export default {
    name: 'ClickrButton',
    data: function () {
        // The data method is supposed to return an object with your initial data
        return {
            clicks: 0
        }
    },
    methods: {
        incrementCount: function () {
            this.clicks++; // Vue can notice mutation
        }
    }
}
</script>

<template>
    <button @click="incrementCount">{{ clicks }} clicks so far</button>
</template>

<style scoped>
button {
    background-color: limegreen;
}
</style>