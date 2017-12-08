<template>
  <div>
    <md-tabs class="md-accent md-elevation-5" md-alignment="left" md-sync-route>
      
      <md-tab id="tab-home" md-label="Home" @click="attachColor = !attachColor" :class="{color:attachColor}" to="/home"></md-tab>
      <md-tab id="tab-inventory" md-label="Inventory" to="/inventory"></md-tab>
      <md-tab id="tab-requestDevice" md-label="Request Device" to="/requestDevice"></md-tab>
      <md-tab id="tab-pendingApprovals" md-label="Pending approvals" to="/pendingApprovals"></md-tab>

    </md-tabs>
  </div>
</template>

<script>
  export default {
     data:function(){
    	return{
    		attachColor:false
    	};
    }
  }
</script>

<style lang="scss" scoped>
  .md-tabs {
    margin-bottom: 24px;
    display:flex;
  }
 .color{
 	background-color:red;
 }
</style>