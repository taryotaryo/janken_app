<template>
  <div id="app">
    <h1>じゃんけんゲーム</h1>
    <div class="inner">
      <div><img v-bind:src="src" alt=""></div>
      <game v-bind:scores="scores"></game>
      <score v-bind:scores="scores"></score>
    </div>
  </div>
</template>

<script>
  import Game from './components/Game.vue'; //Gameコンポーネントをインポート
  import Score from './components/Score.vue'; //Scoreコンポーネントをインポート
  import Storage from './util/Strage.js';

export default {
  name: 'app', //templateタグ内に書かれた基点の要素のid属性の値を指定
  data () {
    return {
      scores: [],
      src : 'http://localhost:8080/src/assets/logo.png',
    }
  },
  // watch: { //プロパティに変化があった時にアクションを起こす設定。
  //   scores: 'saveData'
  // },
  components: { //importで読み込んだコンポーネントをtemplateタグの中で使えるモジュール化
    Game,
    Score
  },
  // method: {
  //   saveData() {
  //     storage.setData('scores', this.scores);
  //   }
  // }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 1000px;
  margin: 0 auto;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
