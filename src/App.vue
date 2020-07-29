<template>
  <div id="app">
    <h1>じゃんけんゲーム</h1>
    <nav>
      <li><router-link to="/game">ゲーム</router-link></li>
      <li><router-link to="/score">せいせき</router-link></li>
    </nav>
    <div class="inner">
      <div><img v-bind:src="src" alt=""></div>
      <transition name="fade">
      <router-view v-bind:scores="scores" v-bind:win="win"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  import Game from './components/Game.vue'; //Gameコンポーネントをインポート
  import Score from './components/Score.vue'; //Scoreコンポーネントをインポート

export default {
  name: 'app', //templateタグ内に書かれた基点の要素のid属性の値を指定
  data () {
    return {
      scores: [],
      src : 'http://localhost:8080/src/assets/logo.png',
      win : 0,
    }
  },
  components: { //importで読み込んだコンポーネントをtemplateタグの中で使えるモジュール化
    Game,
    Score
  },
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

nav {
  display: flex;
  justify-content: center;
  list-style: none;
}

nav li:nth-of-type(1) {
  padding-right: 20px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px 20px;
  background-color: #deb887;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.fade-enter-active{
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>