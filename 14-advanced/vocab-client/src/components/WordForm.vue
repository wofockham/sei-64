<template>
    <form @submit.prevent="onSubmit">
        <p v-if="errorsPresent" class="error">Please fill out both fields</p>
        <div class="ui labeled input fluid">
            <div class="ui label">
                <i class="germany flag" /> German
            </div>
            <input type="text" placeholder="German word" v-model="word.german">
        </div>
        <div class="ui labeled input fluid">
            <div class="ui label">
                <i class="united kingdom flag" /> English
            </div>
            <input type="text" placeholder="English word" v-model="word.english">
        </div>

        <button class="ui positive button">Submit</button>
    </form>
</template>

<script>
export default {
    name: 'word-form',
    props: {
        word: {
            type: Object,
            required: false
        }
    },
    data: function () {
        return {
            errorsPresent: false
        }
    },
    methods: {
        onSubmit: function () {
            if (this.word.german === '' || this.word.english === '') {
                this.errorsPresent = true;
            } else {
                console.log('form ready for processing');
            }
        }
    }
}
</script>

<style scoped>
.error {
    color: red;
}
</style>
