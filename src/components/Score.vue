<template>
    <div id="score">
        <h2>せいせき</h2>
        <div><button type="button" v-on:click="reset">クリア</button></div>
        <ul class="score-list">
            <li v-for="(score, index) in scores">{{ `${index + 1}回戦` }} : {{ score }}</li>
        </ul>
        <h2>勝率：{{ winCount }}%</h2>
        <h2>{{ scoreMessage }}</h2>
    </div>
</template>

<script>
    export default {
        name: 'score',
        props: ['scores','win'],
        methods: {
            reset() {
                this.$parent.scores = [];
                this.$parent.win = '';
                this.scoreMessage = '';
            }
        },
        data() {
            return {
                scoreMessage: '',
                all: this.scores.length,
            }
        },
        computed: {
            winCount() {
                let persent = Math.floor(this.win / this.all * 100)
                    if (persent >= 70 ) {
                    this.scoreMessage = "勝ちすぎぃ"
                    } else if (persent >= 50) {
                    this.scoreMessage = "引き分けすぎぃ"
                    } else if( isNaN( persent ) ) {
                        persent = 0;
                    } else {
                        this.scoreMessage = "負けすぎぃ"
                    }
                return persent
            },
        }
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