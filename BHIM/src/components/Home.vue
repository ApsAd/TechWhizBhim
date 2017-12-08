<template>
	<div>
		<appHeader></appHeader>
		<md-card>
      		<md-card-header>
        		<div class="md-title">Post Office : </div>
      		</md-card-header>

      		<md-card-content>
        		Name:
        		<br>
        		Inventory count:
      		</md-card-content>

      		
    	</md-card>

	</div>
</template>
<script>
import Header from './Header.vue'
export default{
	components:{
		appHeader:Header
	}
}
</script>
<style scoped>
	.md-card {
    width: 400px;
    margin: 20px;
    padding: 20px;
    display: inline-block;
    vertical-align: top;
  }
</style>