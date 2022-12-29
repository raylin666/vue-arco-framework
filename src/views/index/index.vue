<template>
  <a-button type="primary" @click='onClick'>计数器: {{ count }}</a-button>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { requestLogin } from '@/api/user'
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/store'

onMounted(() => {
  requestLogin({ account: 'admin', password: '123456' }).then(res => {
    console.log(res)
  })
})

const store = useCounterStore()
const { count } = storeToRefs(store)
const onClick = () => {
  store.increment()
}
</script>

<style scoped></style>
