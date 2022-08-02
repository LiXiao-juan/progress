<template>
  <div class="outer">
    <div
      class="inside public"
      :class="{ finish: pct === '100%' }"
      ref="ref"
      :style="{ background: bgColor, color: color }"
    >
      {{ pct }}
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
  props: {
    pct: {
      type: Number,
      default: 0,
    },
    bgColor: {
      type: String,
      default: '#ff5b8f',
    },
    color:{
      type: String,
      default: 'purple',
    }
  },
  created() {
    this.animation()
  },
  methods: {
    animation() {
      setTimeout(() => {
        this.$refs.ref.style.width = this.pct
      }, 200)
    },
  },
}
</script>

<style scoped lang="less">
.outer {
  height: 30px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 20px;
}
.inside {
  border-radius: 20px;
  width: 0%;
  background-color: purple;
  transition: all 3s;
}
.finish {
  border-radius: 20px;
  background-color: greenyellow;
}
.public {
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: #22e479;
  font-size: 12px;
}
</style>
