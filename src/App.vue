<template>
  <div>
    <Progress pct="20%"></Progress>
    <br/>
    <Progress pct="80%"></Progress>
    <br>
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
