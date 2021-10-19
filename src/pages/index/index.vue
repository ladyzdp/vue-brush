<template>
  <div>
    <h4>首页</h4>
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
