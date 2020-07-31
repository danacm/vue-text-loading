<!--
 * @Date: 2020-07-19 20:44:05
 * @Author: dana_chen@sina.cn
 * @LastEditors: dana_chen@sina.cn
 * @LastEditTime: 2020-07-19 22:17:20
-->
<template>
  <div class="page">
    <h1>Vue.js text loading</h1>
    <p class="spc-b">A text loading component with gradients and animations!</p>
    <div class="spc-b">
      <a
        class="github-button"
        href="https://github.com/danacm/vue-text-loading"
        data-style="mega"
        data-count-href="/danacm/vue-text-loading/stargazers"
        data-count-api="/repos/danacm/vue-text-loading#stargazers_count"
        data-count-aria-label="# stargazers on GitHub"
        aria-label="Star danacm/vue-text-loading on GitHub"
      >
        <span class="github"></span>
        <span>View on Github</span>
      </a>
    </div>
    <div id="app">
      <text-loading
        :height="height"
        :width="width"
        :animate-time="animateTime"
        :start-color="startColor"
        :stop-color="stopColor"
        :inner-text-color="innerTextColor"
        :timing-func="timingFunc"
        :showText="showTxt"
        :text="text"
        :animateDirection="animateDirection"
      ></text-loading>
      <div class="content">
        <table class="progress-controls text-right">
          <tr>
            <td>
              <label for="height">height</label>
            </td>
            <td>
              <input
                id="height"
                type="number"
                placeholder="height"
                :value="height"
                @input="heightChanged"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label for="width">width</label>
            </td>
            <td>
              <input
                id="width"
                type="number"
                placeholder="width"
                :value="width"
                @input="widthChanged"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label for="text">Text</label>
            </td>
            <td>
              <input id="text" type="text" placeholder="text" :value="text" @input="textChanged" />
            </td>
          </tr>
          <tr>
            <td>
              <label for="animate-direction">Animate direction</label>
            </td>
            <td>
              <select
                id="animate-direction"
                :value="animateDirection"
                @input="animateDirectionChanged"
              >
                <option value="right">right</option>
                <option value="left">left</option>
                <option value="up">up</option>
                <option value="down">down</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label for="animate-time">Animate time</label>
            </td>
            <td>
              <input
                id="animate-time"
                type="number"
                placeholder="Animate time"
                :value="animateTime"
                @input="animateTimeChanged"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label for="timing-function">Timing function</label>
            </td>
            <td>
              <input
                id="timing-function"
                type="text"
                placeholder="Timing function"
                :value="timingFunc"
                @input="timingFuncChanged"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label for="start-color">Start color</label>
            </td>
            <td>
              <input
                id="start-color"
                type="color"
                placeholder="Start color"
                :value="startColor"
                @input="startColorChanged"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label for="stop-color">Stop color</label>
            </td>
            <td>
              <input
                id="stop-color"
                type="color"
                placeholder="Stop color"
                :value="stopColor"
                @input="stopColorChanged"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label for="inner-stroke-color">Inner stroke color</label>
            </td>
            <td>
              <input
                id="inner-stroke-color"
                type="color"
                placeholder="Inner stroke color"
                :value="innerTextColor"
                @input="innerTextColorChanged"
              />
            </td>
          </tr>
        </table>
        <div class="controls">
          <button @click.prevent="showLoading">show loading</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import TextLoading from "./components/TextLoading.vue";
import TextLoading from "vue-text-loading";

export default {
  name: "App",
  components: {
    TextLoading
  },
  data() {
    return {
      animateTime: 5,
      height: 300,
      width: 300,
      text: "github",
      animateDirection: "right",
      startColor: "#bbff42",
      stopColor: "#0413dc",
      innerTextColor: "#ccc",
      timingFunc: "linear",
      showTxt: false
    };
  },
  methods: {
    showLoading() {
      this.showTxt = true;
      const duration = (this.animateTime * 3 + 2) * 1000;
      setTimeout(() => {
        this.showTxt = false;
      }, duration);
    },

    timingFuncChanged(e) {
      this.timingFunc = e.target.value;
    },

    innerTextColorChanged(e) {
      this.innerTextColor = e.target.value;
    },

    stopColorChanged(e) {
      this.stopColor = e.target.value;
    },

    startColorChanged(e) {
      this.startColor = e.target.value;
    },

    widthChanged(e) {
      e.preventDefault();
      const val = e.target.value;

      if (!val || isNaN(val)) {
        return false;
      }

      this.width = parseInt(val);
    },

    heightChanged(e) {
      e.preventDefault();
      const val = e.target.value;

      if (!val || isNaN(val)) {
        return false;
      }

      this.height = parseInt(val);
    },

    textChanged(e) {
      this.text = e.target.value;
    },

    animateDirectionChanged(e) {
      this.animateDirection = e.target.value;
    },

    animateTimeChanged(e) {
      e.preventDefault();
      const val = e.target.value;

      if (!val || isNaN(val)) {
        return false;
      }

      this.animateTime = parseInt(val);
    }
  },
  mounted() {
    // this.startProgress();
  }
};
</script>

<style>
html,
body {
  background: #fff;
  text-align: center;
  color: #4e4f4f;
  font-family: "Open Sans", Helvetica, Verdana, sans-serif;
  font-size: 16px;
}
#app {
  width: 100%;
  display: flex;
  align-items: center;
}

.content {
  width: 100%;
  margin: 0 auto;
}
.progress-controls {
  margin: 0 auto;
}
.controls {
  margin-top: 10px;
  text-align: center;
}
.controls button {
  border-radius: 5px;
  color: #fff;
  padding: 13px 20px;
  background: #ff9f37;
  border: 0;
  outline: 0;
  line-height: 1.3em;
  text-transform: uppercase;
  cursor: pointer;
  box-sizing: border-box;
  margin-left: 10px;
}
.controls button:hover {
  background: #ff9f37;
}
p {
  margin: 5px 0;
}
.visible-collapse {
  visibility: collapse;
}
input,
select {
  margin: 0;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
select {
  height: 37px;
  width: 214px;
}
input,
select,
button {
  font: inherit;
  margin-bottom: 10px;
}
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}
label {
  margin-right: 15px;
}
.spc-b {
  margin-bottom: 30px;
}
.github {
  display: inline-block;
  height: 18px;
  width: 18px;
  background: url(./assets/github.png) no-repeat;
  background-size: 18px 18px;
}
.github-button {
  color: #24292e;
  background-color: #eff3f6;
  border:none;
  border-radius: 5px;
  background-image: linear-gradient(180deg, #eeebeb, #eff3f6 90%);
  position: relative;
  display: inline-block;
  height: 20px;
  padding: 10px;
  font-size: 11px;
  font-weight: 600;
  line-height: 20px;
  vertical-align: bottom;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-repeat: repeat-x;
  background-position: -1px -1px;
  background-size: 110% 110%;
  text-decoration: none;
  outline: 0;
}
</style>
