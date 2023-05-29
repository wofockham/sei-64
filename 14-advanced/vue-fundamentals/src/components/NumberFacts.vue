<template>
    <div>
        <h2>Numberwang</h2>
        <button @click="fetchFact">Fetch fact</button>
        <button @click="clearFacts">Clear facts</button>
        <p v-for="(fact, i) in facts" :key="i">{{ fact }}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'NumberFacts',
    data: function () {
        return {
            facts: []
        }
    },
    methods: {
        fetchFact: async function () {
            const { data } = await axios.get('http://numbersapi.com/random/trivia');
            this.facts.push(data);
        },
        clearFacts: function () {
            this.facts = [];
        }
    }
}
</script>
