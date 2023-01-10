<template>
  <div>
    <test />
    <el-button />
  </div>
</template>

<script>
import { Test } from 'mirai-common'
import { Button as ElButton } from 'element-ui'
export default {
  name: 'IndexPage',
  components: {
    Test,
    ElButton,
  },
}
</script>
