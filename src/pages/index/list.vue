<template>
    <div>
        <div id="taskList_wrap">
            <ul>

                <li>112466</li>
                <li>112466</li>
                <li>112466</li>
                <li>112466</li>
                <li>112466</li>
                <li>112466</li>
                <li>112466</li>
                <li>112466</li>
                <li>112466</li>
                <li>112466</li>
                <li>112466</li>
                <li>112466</li>
                <li>112466</li>
                <li>112466</li>
                <li>112466</li>
                <li>112466</li>
                <li>112466</li>
                <li>112466</li>
                <li>112466</li>
                <li>112466</li>
                <li>112466</li>
                <li>112466</li>
                <li>112466</li>
                <li>112466</li>
                <li>112466</li>
                <li>112466</li>
                <li>112466</li>
                <li>112466</li>
                <li>112466</li>
                <li>112466</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
           box:"",
           scrollY:"" 
        }
    },
      mounted() {
    this.$nextTick(() => {
      this.box = document.getElementById("taskList_wrap");
      this.box.addEventListener(
        "scroll",
        () => {
          this.scrollY = this.box.scrollTop;
        },
        false
      );
    });
   
  },
  activated() {
    if(this.isReload){
      this.resetPages();
    }
    this.$nextTick(() => {
      document.getElementById("taskList_wrap").scrollTop = this.scrollY || 0;
    });
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      //因为当钩子执行前，组件实例还没被创建
      // vm 就是当前组件的实例相当于上面的 this，所以在 next 方法里你就可以把 vm 当 this 来用了。
      if (from.name != "leaderDetail") {
        vm.isReload = true;
      } else if (from.name === "leaderDetail") {
        vm.isReload = false;
      }
      
    });
  },
  //记录离开时的位置
  beforeRouteLeave(to, from, next) {
    this.$nextTick(() => {
      this.scrollY = document.getElementById("taskList_wrap").scrollTop;
    });
    next();
  },
  methods:{
      resetPages(){
        //   重新初始化页面
      }
  }
}
</script>