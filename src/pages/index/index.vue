<template>
  <div>
    <p>首页</p>
  </div>
</template>
<script>
import {fastNav} from '../../service/indexService'
export default {
  data() {
    return {
      tabList: [],
    };
  },
  mounted() {

     fastNav().then(res=>{
      //  console.log(res)
     })
  },
};
</script>
