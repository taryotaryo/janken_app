<template>
    <div id="score">
        <h2>せいせき</h2>
        <div><button type="button" v-on:click="reset">クリア</button></div>
        <ul class="score-list">
            <li v-for="(score, index) in scores">{{ `${index + 1}回戦` }} : {{ score }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'score',
        props: ['scores'],
        data () {
            return{}
        },
        methods: {
            reset() {
                this.$parent.scores = [];
            }
        },
    }
</script>

<style>
.score-list {
    display: inline-block;
    list-style: none;
    text-align: left;
    margin:0 auto;
    padding:0;
    font-size: 20px;
    font-weight: bold;
}

#score button {
    font-size: 20px;
    background-color: grey;
    color: #fff;
    margin-bottom: 20px;
}

#score button:hover {
    cursor: pointer;
    opacity: 0.8;
}

</style>