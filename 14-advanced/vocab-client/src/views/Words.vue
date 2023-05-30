<template>
    <div>
        <h1>Words</h1>
        <table id="words" class="ui celled compact table">
            <thead>
                <tr>
                    <th>English</th>
                    <th>German</th>
                    <th colspan="3"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(word, i) in words" :key="i">
                    <td>{{ word.english }}</td>
                    <td>{{ word.german }}</td>
                    <td width="75" class="center aligned">
                        <RouterLink :to="{ name: 'show', params: { id: word._id } }">
                            Show
                        </RouterLink>
                    </td>
                    <td width="75" class="center aligned">
                        <RouterLink :to="{ name: 'edit', params: { id: word._id } }">
                            Edit
                        </RouterLink>
                    </td>
                    <td width="75" class="center aligned" @click.prevent="onDestroy(word._id)">
                        <a :href="`/words/${ word._id }`">
                            Delete
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { RouterLink} from 'vue-router';
import { api } from '../helpers/helpers';

export default {
    name: 'words',
    data: function () {
        return {
            words: []
        };
    },
    mounted: async function () {
        this.words = await api.getWords();
    },
    methods: {
        onDestroy: async function (id) {
            const sure = window.confirm('Are you sure?');
            if (!sure) return;

            await api.deleteWord(id);
            const remainingWords = this.words.filter(word => word._id !== id);
            this.words = remainingWords;
            alert('Word deleted sucessfully'); // TODO: make this look nicer
        }
    }
}
</script>
