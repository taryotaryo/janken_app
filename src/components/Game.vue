<template>
    <div id="game">
        <div class="result">
            <h2>{{ resultMessage }}</h2>
            <div><button v-on:click="start" id="start" class="button">{{ startMessage }}</button></div>
        </div>
        <div class="imgArea"><img v-bind:src="src" alt=""></div>
        <ul class="choice-list">
            <li>
                <button v-on:click="judgment" type="button" value="0" class="button disabled choice" disabled>グー</button>
            </li>
            <li>
                <button v-on:click="judgment" type="button" value="1" class="button disabled choice" disabled>チョキ</button>
            </li>
            <li>
                <button v-on:click="judgment" type="button" value="2" class="button disabled choice" disabled>パー</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'game',
        props: ['scores'],
        data() {
            return {
                src : require('../assets/choki.png'),
                imgList: [
                    require('../assets/gu.png'), //0,1
                    require('../assets/choki.png'),
                    require('../assets/pa.png'),
                ],
                resultMessage: '',
                timer: null,
                startMessage: 'はじめる'
            }
        },
        methods: {
            changeImg() {
                let num = Math.floor(Math.random() * this.imgList.length);
                this.src = this.imgList[num];
            },
            start() {
                this.reset();
                this.timer = setInterval(this.changeImg, 100);
                this.toggleStart();
            },
            reset() {
                this.toggleBtn();
                this.resultMessage = '';
            },
            judgment(event) {
                let target = event.target;
                let resultNum = parseInt(this.imgList.indexOf(this.src));
                let selectedNum = parseInt(target.value);
                let decision = this.decisionJanken(resultNum, selectedNum);
                this.toggleBtn();
                clearInterval(this.timer);
                this.startMessage = 'もういちど';

                if ( decision === 0) {
                    this.resultMessage = 'まけ';
                } else if ( decision === 1) {
                    this.resultMessage = 'あいこ';
                } else if ( decision === 2) {
                    this.resultMessage = 'かち';
                    this.$parent.win++;
                }
                this.toggleStart();
                this.$parent.scores.push( this.resultMessage ); //resultメッセージを格納する
            },
            toggleBtn() {
                    let btns = document.querySelectorAll('.choice');
                    for( let btn of btns ) {
                        if(btn.hasAttribute('disabled')) {
                            btn.removeAttribute("disabled");
                        } else {
                            btn.setAttribute("disabled", "disabled");
                        }
                    btn.classList.toggle('disabled');
                };
            },
            toggleStart() {
                let start = document.getElementById('start');
                start.classList.toggle('disabled');
                if(start.hasAttribute('disabled')) {
                    start.removeAttribute("disabled");
                } else {
                    start.setAttribute("disabled", "disabled");
                }
            },
            decisionJanken(myHand, yourHand) {
                let result; // 0はまけ、1はあいこ、2はかち

                switch(myHand) {
                    case 0:
                        if(yourHand === 0) {
                            result = 1;
                            break;
                        } else if(yourHand === 1) {
                            result = 0;
                            break;
                        } else {
                            result = 2;
                            break;
                        }
                    case 1:
                        if(yourHand === 0) {
                            result = 2;
                            break;
                        } else if(yourHand === 1) {
                            result = 1;
                            break;
                        } else {
                            result = 0;
                            break;
                        }
                    case 2:
                        if(yourHand === 0) {
                            result = 0;
                            break;
                        } else if(yourHand === 1) {
                            result = 2;
                            break;
                        } else {
                            result = 1;
                            break;
                        }
                }
                return result;
            }
        }
    }
</script>

<style>
#game h2{
    color: red;
    font-size: 30px;
}

.result{
    margin-bottom: 50px;
}

.imgArea{
    height: 250px;
}

#game .button{
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    appearance: none;
    height: 80px;
    width: 150px;
    display: inline-block;
    text-decoration: none;
    background: #ff8181;
    color: #FFF;
    width: 120px;
    height: 120px;
    line-height: 120px;
    border-radius: 50%;
    text-align: center;
    font-weight: bold;
    overflow: hidden;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
    border-bottom: solid 3px #bd6565;
    transition: .2s;
    font-size: 20px;
}

.button:active{
    -webkit-transform: translateY(2px);
    transform: translateY(2px);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.15);
    border-bottom: none;
}

.choice-list {
    display: flex;
    justify-content: space-between;
    list-style: none;
    text-align: center;
    margin:0 auto;
    padding:0;
    width: 60%;
}

.disabled{
    opacity: 0.7;
}

</style>