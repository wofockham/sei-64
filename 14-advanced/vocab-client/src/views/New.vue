<template>
    <div>
        <h1>New Word</h1>
        <WordForm @createOrUpdate="createOrUpdate" />
    </div>
</template>

<script>
import WordForm from '../components/WordForm.vue';
import { api } from '../helpers/helpers';

export default {
    name: 'new-word',
    components: {
        WordForm: WordForm
    },
    methods: {
        createOrUpdate: async function (word) {
            const res = await api.createWord(word);
            alert('Word created successfully'); // TODO: make this look nicer
            this.$router.push(`/words/${ res._id }`);
        }
    }
}
</script>
