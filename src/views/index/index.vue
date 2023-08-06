<template>
  <div style="margin-top: 30px">
    <a-row>
      <a-col :span="4" :offset="10">
        <a-button type="dashed" status="warning" @click="onClick"
          ><icon-right-circle />&nbsp;点击内容按钮, 点击总次数为
          <span class="button-count">{{ count }}</span> 次</a-button
        >
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useCounterStore } from '@/store'
  import { requestUserLogin } from '@/api/user'

  onMounted(() => {
    requestUserLogin({ account: 'admin', password: '123456' }).then(res => {
      console.log(res)
    })
  })

  const store = useCounterStore()
  const { count } = storeToRefs(store)
  const onClick = () => {
    store.increment()
  }
</script>

<style scoped>
  .button-count {
    color: #2bbe2f;
  }
</style>
