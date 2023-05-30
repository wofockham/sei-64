<template>
    <div>
        <h1>Edit Word</h1>
        <WordForm :word="this.word" />
    </div>
</template>

<script>
import WordForm from '../components/WordForm.vue';
import { api } from '../helpers/helpers';

export default {
    name: 'edit',
    components: {
        WordForm: WordForm
    },
    data: function () {
        return {
            word: {}
        }
    },
    mounted: async function () {
        this.word = await api.getWord(this.$route.params.id);
    }
}
</script>
