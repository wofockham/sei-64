<template>
    <div>
        <h1>Show Word</h1>
        <div class="ui labeled input fluid">
            <div class="ui label">
                <i class="germany flag" /> German
            </div>
            <input type="text" readonly :value="word.german">
        </div>
        <div class="ui labeled input fluid">
            <div class="ui label">
                <i class="united kingdom flag" /> English
            </div>
            <input type="text" readonly :value="word.english">
        </div>
        <div class="actions">
            <RouterLink :to="{ name: 'edit', params: { id: this.$route.params.id } }">
                Edit word
            </RouterLink>
        </div>
    </div>
</template>

<script>
import { RouterLink} from 'vue-router'
import { api } from '../helpers/helpers';

export default {
    name: 'show',
    data: function () {
        return {
            word: ''
        }
    },
    mounted: async function () {
        this.word = await api.getWord(this.$route.params.id);
    }
}
</script>

<style scoped>
.actions a {
    display: block;
    text-decoration: underline;
    margin: 20px 10px;
}
</style>
