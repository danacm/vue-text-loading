<template>
  <div class="loading-container" :id="'container'+_uid" v-show="showText">
    <div class="svg-row" :style="svgStyle">
      <svg class="svg" :viewBox="viewBox" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            :id="'gradient' + _uid"
            :x1="gradient.x1"
            :y1="gradient.y1"
            :x2="gradient.x2"
            :y2="gradient.y2"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="30%" :stop-color="startColor" />
            <stop offset="100%" :stop-color="stopColor" />
          </linearGradient>
        </defs>
        <defs>
          <clipPath id="svg-text">
            <text
              text-anchor="middle"
              x="50%"
              y="50%"
              dominant-baseline="central"
              style="font-siz:1em;width:100%;height:100%;"
            >{{text}}</text>
          </clipPath>
        </defs>

        <g clip-path="url(#svg-text)">
          <rect x="0" y="0" width="100%" height="100%" :fill="innerTextColor" class="text-bg" />
        </g>

        <g clip-path="url(#svg-text)">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            :fill="'url(#gradient' + _uid + ')'"
            :style="animStyle"
          />
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextLoading",
  props: {
    height: {
      type: Number,
      default: 100
    },
    width: {
      type: Number,
      default: 100
    },
    text: {
      type: String,
      required: true,
      default: ""
    },
    showText: {
      type: Boolean,
      required: false,
      default: false
    },
    startColor: {
      type: String,
      required: false,
      default: "#73cbfe"
    },
    stopColor: {
      type: String,
      required: false,
      default: "#158efd"
    },
    innerTextColor: {
      type: String,
      required: false,
      default: "#ccc"
    },
    animateDirection: {
      type: String,
      required: false,
      default: "right"
    },
    animateTime: {
      type: Number,
      required: false,
      default: 3
    },
    timingFunc: {
      type: String,
      required: false,
      default: "linear"
    }
  },

  data() {
    return {
      viewBox: "",
      gradientAnimation: null,
      currentAngle: 0,
      containerWidth: this.width,
      showInnerText: false
    };
  },

  computed: {
    circumference() {
      return this.width;
    },
    containerStyle() {
      return {
        width: `${this.containerWidth}px`
      };
    },
    halfHight() {
      return this.height / 2;
    },
    svgStyle() {
      const length = this.text && this.text.length;
      const fontRatio = length === 0 ? 1 : length / 2;
      return `width:${this.width}px;height:${this.height}px;
      font-size:${(2 * this.width) / (5 * fontRatio)}px;`;
    },
    animStyle() {
      let transformStyle = `transform: translateX(-100%);animation: moving-panel-right ${this.animateTime}s 1s infinite ${this.timingFunc};`;
      if (this.animateDirection === "down") {
        transformStyle = `transform: translateY(-100%);animation: moving-panel-up ${this.animateTime}s  1s infinite ${this.timingFunc};`;
      } else if (this.animateDirection === "left") {
        transformStyle = `transform: translateX(100%);animation: moving-panel-left ${this.animateTime}s 1s infinite ${this.timingFunc};`;
      } else if (this.animateDirection === "up") {
        transformStyle = `transform: translateY(100%);animation: moving-panel-down ${this.animateTime}s 1s infinite ${this.timingFunc};`;
      }
      return transformStyle;
    },
    gradient() {
      let res = {};
      if (
        this.animateDirection === "left" ||
        this.animateDirection === "left"
      ) {
        res = { x1: 0, x2: this.width, y1: 0, y2: 0 };
      } else {
        res = { x1: 0, x2: 0, y1: 0, y2: this.height };
      }
      return res;
    }
  },

  methods: {},

  watch: {},
  mounted() {
    const self = this;
    self.viewBox = `0 0 ${parseInt(self.width) + 10} ${self.height}`;
  },
  created() {
    const self = this;
    self.$nextTick(() => {
      setTimeout(() => {
        const offWid = document.getElementById(`container${self._uid}`)
          .offsetWidth;
        self.containerWidth = offWid === self.width ? self.width : offWid;
      }, 1000);
    });
  }
};
</script>

<style lang="scss">
.progress-container {
  position: relative;
}

.text--transparent {
  fill: transparent;
}

@keyframes moving-panel-right {
  100% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
}

@keyframes moving-panel-left {
  100% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}

@keyframes moving-panel-down {
  100% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
}

@keyframes moving-panel-up {
  100% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
}

/* Other stuff */

.loading-container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 12020;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
}
.svg-row {
  width: 15%;
  height: 15%;
}
svg {
  width: 100%;
  height: 100%;
}
.text-bg {
  fill-opacity: 0.2;
}
</style>
