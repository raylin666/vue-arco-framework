<template>
  <div class="menu">
    <a-menu mode="horizontal" :default-selected-keys="['home']">
      <a-menu-item key="home">首页</a-menu-item>
      <a-menu-item key="kuaiXun">快讯</a-menu-item>
      <a-menu-item key="zhuanTi">专题</a-menu-item>
      <a-menu-item key="shangCheng">商城</a-menu-item>
      <a-menu-item key="daoHang">导航</a-menu-item>
      <a-menu-item key="quanZi">
        <a-badge text="交流" :offset="[20, -6]" :dotStyle="{ background: 'blue', color: '#ffffff', width: '40px', height: '20px' }">圈子</a-badge>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.menu {
  :deep(.arco-menu-light) {
    background-color: transparent;
  }
  :deep(.arco-menu-item) {
    color: #333333;
    font-size: 16px;
    font-weight: 400;
    .arco-menu-selected-label {
      background-color: #f77234;
    }
  }
  :deep(.arco-menu-item.arco-menu-selected) {
    background-color: #fafafa;
    color: #f77234;
  }
  :deep(.arco-menu-item):hover {
    background-color: var(--color-white);
  }
}
</style>
