<template>
  <a-card :bordered="false" :style="{ width: '100%' }">
    <a-row>
      <a-col :span="24" class="title">
        <IconGift :size="16" style="color: #b500f7" /> <span>点击领取今天的签到奖励!</span>
      </a-col>
      <a-col :span="24" class="banner">
        <a-tabs default-active-key="todaySign">
          <a-tab-pane key="todaySign" title="今日签到">
            <a-row>
              <a-col :span="4">
                <a-avatar>
                  <img
                      alt="avatar"
                      src="https://www.wpdaxue.com/img/thumb/2022/11/fill_w192_h192_g0_mark_cm-clear-compress-1-avatar-aQ55Y.jpg"
                  />
                </a-avatar>
              </a-col>
              <a-col :span="15">
                <div class="item-title">
                  长鸣晓新
                </div>
                <div class="item-time">
                  7小时前
                </div>
              </a-col>
              <a-col :span="5">
                <a-tag color="gray" class="item-q">
                  <IconLayers :size="16" /> 30
                </a-tag>
              </a-col>
            </a-row>
            <a-row>
              <a-col :span="4">
                <a-avatar>
                  <img
                      alt="avatar"
                      src="https://www.wpdaxue.com/img/thumb/2022/11/fill_w192_h192_g0_mark_cm-clear-compress-1-avatar-aQ55Y.jpg"
                  />
                </a-avatar>
              </a-col>
              <a-col :span="15">
                <div class="item-title">
                  长鸣晓新
                </div>
                <div class="item-time">
                  7小时前
                </div>
              </a-col>
              <a-col :span="5">
                <a-tag color="gray" class="item-q">
                  <IconLayers :size="16" /> 30
                </a-tag>
              </a-col>
            </a-row>
            <a-row>
              <a-col :span="4">
                <a-avatar>
                  <img
                      alt="avatar"
                      src="https://www.wpdaxue.com/img/thumb/2022/11/fill_w192_h192_g0_mark_cm-clear-compress-1-avatar-aQ55Y.jpg"
                  />
                </a-avatar>
              </a-col>
              <a-col :span="15">
                <div class="item-title">
                  长鸣晓新
                </div>
                <div class="item-time">
                  7小时前
                </div>
              </a-col>
              <a-col :span="5">
                <a-tag color="gray" class="item-q">
                  <IconLayers :size="16" /> 30
                </a-tag>
              </a-col>
            </a-row>
            <a-row>
              <a-col :span="4">
                <a-avatar>
                  <img
                      alt="avatar"
                      src="https://www.wpdaxue.com/img/thumb/2022/12/fill_w192_h192_g0_mark_4efe46eb3e336a45204b5eb46ec8f5d2-1-avatar-ZYtA34.png"
                  />
                </a-avatar>
              </a-col>
              <a-col :span="15">
                <div class="item-title">
                  长鸣晓新
                </div>
                <div class="item-time">
                  7小时前
                </div>
              </a-col>
              <a-col :span="5">
                <a-tag color="gray" class="item-q">
                  <IconLayers :size="16" /> 30
                </a-tag>
              </a-col>
            </a-row>
            <a-row>
              <a-col :span="4">
                <a-avatar>
                  <img
                      alt="avatar"
                      src="https://www.wpdaxue.com/img/thumb/2022/12/fill_w192_h192_g0_mark_4efe46eb3e336a45204b5eb46ec8f5d2-1-avatar-ZYtA34.png"
                  />
                </a-avatar>
              </a-col>
              <a-col :span="15">
                <div class="item-title">
                  长鸣晓新
                </div>
                <div class="item-time">
                  7小时前
                </div>
              </a-col>
              <a-col :span="5">
                <a-tag color="gray" class="item-q">
                  <IconLayers :size="16" /> 30
                </a-tag>
              </a-col>
            </a-row>
            <a-divider style="margin: 14px 0;" />
            <div style="text-align: center; font-weight: bold; color: black">
              签到排行
            </div>
          </a-tab-pane>
          <a-tab-pane key="continuitySign" title="连续签到">
            <a-row>
              <a-col :span="4">
                <a-avatar>
                  <img
                      alt="avatar"
                      src="https://www.wpdaxue.com/img/thumb/2022/11/fill_w192_h192_g0_mark_cm-clear-compress-1-avatar-aQ55Y.jpg"
                  />
                </a-avatar>
              </a-col>
              <a-col :span="15">
                <div class="item-title">
                  长鸣晓新
                </div>
                <div class="item-time">
                  7小时前
                </div>
              </a-col>
              <a-col :span="5">
                <a-tag color="gray" class="item-q-lx">
                  连续56天
                </a-tag>
              </a-col>
            </a-row>
            <a-row>
              <a-col :span="4">
                <a-avatar>
                  <img
                      alt="avatar"
                      src="https://www.wpdaxue.com/img/thumb/2022/11/fill_w192_h192_g0_mark_cm-clear-compress-1-avatar-aQ55Y.jpg"
                  />
                </a-avatar>
              </a-col>
              <a-col :span="15">
                <div class="item-title">
                  长鸣晓新
                </div>
                <div class="item-time">
                  7小时前
                </div>
              </a-col>
              <a-col :span="5">
                <a-tag color="gray" class="item-q-lx">
                  连续56天
                </a-tag>
              </a-col>
            </a-row>
            <a-row>
              <a-col :span="4">
                <a-avatar>
                  <img
                      alt="avatar"
                      src="https://www.wpdaxue.com/img/thumb/2022/11/fill_w192_h192_g0_mark_cm-clear-compress-1-avatar-aQ55Y.jpg"
                  />
                </a-avatar>
              </a-col>
              <a-col :span="15">
                <div class="item-title">
                  长鸣晓新
                </div>
                <div class="item-time">
                  7小时前
                </div>
              </a-col>
              <a-col :span="5">
                <a-tag color="gray" class="item-q-lx">
                  连续56天
                </a-tag>
              </a-col>
            </a-row>
            <a-row>
              <a-col :span="4">
                <a-avatar>
                  <img
                      alt="avatar"
                      src="https://www.wpdaxue.com/img/thumb/2022/12/fill_w192_h192_g0_mark_4efe46eb3e336a45204b5eb46ec8f5d2-1-avatar-ZYtA34.png"
                  />
                </a-avatar>
              </a-col>
              <a-col :span="15">
                <div class="item-title">
                  长鸣晓新
                </div>
                <div class="item-time">
                  7小时前
                </div>
              </a-col>
              <a-col :span="5">
                <a-tag color="gray" class="item-q-lx">
                  连续56天
                </a-tag>
              </a-col>
            </a-row>
            <a-row>
              <a-col :span="4">
                <a-avatar>
                  <img
                      alt="avatar"
                      src="https://www.wpdaxue.com/img/thumb/2022/12/fill_w192_h192_g0_mark_4efe46eb3e336a45204b5eb46ec8f5d2-1-avatar-ZYtA34.png"
                  />
                </a-avatar>
              </a-col>
              <a-col :span="15">
                <div class="item-title">
                  长鸣晓新
                </div>
                <div class="item-time">
                  7小时前
                </div>
              </a-col>
              <a-col :span="5">
                <a-tag color="gray" class="item-q-lx">
                  连续56天
                </a-tag>
              </a-col>
            </a-row>
            <a-divider style="margin: 14px 0;" />
            <div style="text-align: center; font-weight: bold; color: black">
              签到排行
            </div>
          </a-tab-pane>
        </a-tabs>
      </a-col>
    </a-row>
  </a-card>
</template>

<script setup lang="ts">
import { IconGift, IconLayers } from '@arco-design/web-vue/es/icon'
</script>

<style lang="less" scoped>
.title {
  text-align: center;
  span {
    color: transparent;
    background: linear-gradient(to right, #c000ff, #7d00cb, #ff0000, #0118ff);
    -webkit-background-clip: text;
  }
}
.banner {
  margin-top: 16px;
  background-image: url(https://www.wpdaxue.com/wp-content/themes/b2/Assets/fontend/images/page-bg.svg);
  background-color: #ff3657;
  border-radius: 4px;
  :deep(.arco-tabs-nav::before) {
      background-color: transparent;
  }
  :deep(.arco-tabs-nav-type-line) {
    .arco-tabs-tab {
      margin: 0 32px;
      padding: 10px 0;
    }
    .arco-tabs-tab-title {
      color: white;
      border-radius: 14px;
      padding: 4px 14px;
      font-size: 13px;
    }
    .arco-tabs-tab-title::before {
      background-color: transparent;
    }
    .arco-tabs-tab-active .arco-tabs-tab-title {
      background-color: rgba(255, 255, 255, 0.3);
    }
    .arco-tabs-nav-ink {
      display: none;
    }
  }
  :deep(.arco-tabs-content) {
    background-color: white;
    padding-top: 0;
    .arco-row {
      margin: 24px 0;
    }
    .item-title {
      line-height: 20px;
      font-weight: 500;
    }
    .item-time {
      line-height: 20px;
      font-size: 12px;
      color: #999999;
    }
    .item-q {
      background-color: #f8f8f8;
      font-weight: bold;
      color: #2e2e2e;
      float: right;
      margin-top: 6px;
    }
    .item-q-lx {
      background-color: white;
      font-weight: bold;
      color: #2e2e2e;
      float: right;
      margin-top: 6px;
    }
  }
}
</style>
