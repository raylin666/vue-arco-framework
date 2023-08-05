<template>{{ msg }} - {{ t('title') }}</template>

<script setup lang="ts">
  import { PropType } from 'vue'
  import i18n from '../locale'
  import { useI18n } from 'vue-i18n'

  defineProps({
    msg: {
      type: String as PropType<string>,
      default: ''
    }
  })

  const { t } = useI18n()

  console.log(i18n.global.t('title'))
</script>

<style scoped></style>
