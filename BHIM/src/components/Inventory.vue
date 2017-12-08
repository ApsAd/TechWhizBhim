<template>
	<div>
		<appHeader></appHeader>
		<md-card v-for="id in 5">
      		<md-card-header>
        		<div class="md-title">Printers : </div>
      		</md-card-header>

      		<md-card-content>
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
<style>
	.md-card {
    width: 300px;
    margin: 20px;
    padding: 20px;
    display: inline-block;
    vertical-align: top;
  }
	
</style>