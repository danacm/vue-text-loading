# vue-text-loading [![npm package](https://img.shields.io/npm/v/vue-text-loading.svg)](https://www.npmjs.com/package/vue-text-loading)

> A text loading component for Vue.js. Uses SVG and javascript to animate a text loading with a gradient.

[Live Demo](https://danacm.github.io/vue-text-loading)

# Requirements

- [Vue.js](https://github.com/vuejs/vue) `^2.0.0` (Compatible with Vue 1.0 or 2.0)
- A module bundler such as [webpack](https://github.com/webpack/webpack) or use the minified version on its own.

# Installation

```bash
$ npm install --save vue-text-loading
```

# Usage

```html
<template>
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
</template>

<script>
  import ProgressBar from "vue-text-loading";

  export default {
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
    components: {
      ProgressBar
    },
    methods: {
      showLoading() {
        this.showTxt = true;
        const duration = (this.animateTime * 3 + 2) * 1000;
        setTimeout(() => {
          this.showTxt = false;
        }, duration);
      }
    }
  };
</script>
```

# Props

| Name               | Default value | Description                                                                                                                                                                  |
| ------------------ | :-----------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `height`           |     `100`      | Height of the text loading in pixels.                                                                                                                                        |
| `width`            |     `100`      | Width of the text loading in pixels.                                                                                                                                         |
| `text`             |     `""`       | Text  show in  loading.                                                                                                                              |
| `showText`         |      `false`   | Show or hide the text loading.                                                                                                                               |
| `startColor`       |   `#73cbfe`   | The color of the leading edge of the text loading gradient.                                                                                                                  |
| `stopColor`        |   `#158efd`   | The secondary color of the text loading gradient.                                                                                                                            |
| `innerStrokeColor` |   `#ccc`      | Background color of the text loading.                                                                                                                                        |
| `animateDirection` |    `right`    | The direction of animate.                                                                                                                                       |
| `animateTime`      |    `3`        | The duration time(second) of animate.                                                                                                                      |
| `timingFunc`       |   `linear`    | The transition timing function to use for the CSS transition. See 
[transition-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function). |


# Slot

none

# Dev

> npm run dev

## 📒 ChangeLog

[ChangeLog](./CHANGELOG.md)

# License

[The MIT License](LICENSE)
