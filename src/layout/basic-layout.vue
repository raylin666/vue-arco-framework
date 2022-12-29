<template>
  <div class="layout">
    <a-layout style="height: 400px;">
      <a-layout-header>
        <Header />
      </a-layout-header>
      <a-layout>
        <a-layout-sider theme="dark">
          <Sider />
        </a-layout-sider>
        <a-layout-content>
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
      <a-layout-footer>
        <Footer />
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
import Header from '@/components/layout/header.vue'
import Sider from '@/components/layout/sider.vue'
import Footer from '@/components/layout/footer.vue'
</script>

<style scoped>
.layout :deep(.arco-layout-header),
.layout :deep(.arco-layout-footer),
.layout :deep(.arco-layout-sider-children),
.layout :deep(.arco-layout-content) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--color-white);
  font-size: 16px;
  font-stretch: condensed;
  text-align: center;
}

.layout :deep(.arco-layout-header),
.layout :deep(.arco-layout-footer) {
  height: 64px;
  background-color: var(--color-primary-light-4);
}

.layout :deep(.arco-layout-sider) {
  width: 206px;
  background-color: var(--color-primary-light-3);
}

.layout :deep(.arco-layout-content) {
  background-color: rgb(var(--arcoblue-6));
}
</style>
