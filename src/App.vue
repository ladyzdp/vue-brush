<template>
  <div class="app-container" id="app">
    <transition name="van-fade">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" :key="$route.fullPath">
          <!-- 这里是会被缓存的视图组件，比如 page1,page2 -->
        </router-view>
      </keep-alive>
    </transition>
    <transition name="van-fade">
      <router-view v-if="!$route.meta.keepAlive" :key="$route.fullPath">
        <!-- 这里是不被缓存的视图组件，比如 page3 -->
      </router-view>
    </transition>
  </div>
</template>
<script>
// import FooterTabBar from "@/components/footerTabBar.vue";
export default {
  // components:{FooterTabBar}
};
</script>
