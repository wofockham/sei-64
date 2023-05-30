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
                    <td width="75" class="center aligned">Edit</td>
                    <td width="75" class="center aligned">Delete</td>
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
        }
    },
    mounted: async function () {
        this.words = await api.getWords();
    }
}
</script>
