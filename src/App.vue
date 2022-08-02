<template>
  <div>
    <Progress pct="20%" bgColor="yellow" color="#ccc"></Progress>
    <br />
    <Progress pct="80%" bgColor="blue" color="#fff"></Progress>
    <br />
    <Progress pct="100%"></Progress>
  </div>
</template>

<script>
import Progress from '@/components/progress.vue'
export default {
  components: {
    Progress,
  },
  data() {
    return {}
  },
  created() {},
  methods: {},
}
</script>

<style scoped lang="less"></style>
