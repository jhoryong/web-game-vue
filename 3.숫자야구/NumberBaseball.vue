


<template>

<!-- 
Vue component
js 인데 조금 형식을 바꾼것 
-->

<!-- HTML 부분  -->
    <div>
        <h1>{{result}}</h1>
        <form v-on:submit="onSubmitForm">
            <input ref="answer" maxlength="4", v-model="value"/>
            <button>입력</button>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value: '',
                result: '',
            }
        },
        methods: {
            onSubmitForm(e) {
                e.preventDefault();
            }
        }
    }
</script>


<style>
/* css 부분 */
</style>