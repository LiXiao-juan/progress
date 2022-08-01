<template>
  <div class="outer">
    <div class="inside" :style="{ width: pct }" :class="{ finish: pct === '100%'}">{{ pct }}</div>
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
  },
  created() {},
  methods: {},
}
</script>

<style scoped lang="less">
.outer {
  height: 40px;
  width: 300px;
  background-color: aqua;
  border: 1px solid #000;
}
.inside {
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  background-color: purple;
}
.finish{
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  background-color: greenyellow;
}
</style>
