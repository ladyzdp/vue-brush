<template>
  <b-container fluid="xl" class="p-5 mt-5">
    <div class="nodata-wrap w-100">
      <div class="iconfont icon-wushuju nodate-icon"></div>
      <div class="nodate-hint">未查询到内容</div>

      <div  class="mt-5 d-block" v-if="showBtn != false"
        ><b-button variant="primary" size="sm" class="base-btns" @click="reload">重新加载</b-button></div
      >
    </div>
  </b-container>
</template>
<script>
export default {
  props:['showBtn'],
  data(){
    return{}
  },
  methods:{
    reload(){
     window.location.reload()
    }
  }
}
</script>
<style lang="scss">
.nodata-wrap {
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #999;
}
.nodate-icon {
  font-size: 80px !important;
}
.nodate-hint {
  font-size: 22px;
}

</style>