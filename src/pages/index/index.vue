<template>
  <div>
    <h1>首页</h1>
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
       console.log(res)
     })
  },
};
</script>
