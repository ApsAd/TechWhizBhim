<template>
	<div>
		<appHeader></appHeader>

    <form novalidate class="md-layout-row md-gutter">
      <md-card class="md-flex-50 md-flex-small-100">
        <md-card-header>
          <div class="md-title">Request a device</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout-row md-layout-wrap md-gutter">
          	<div class="md-flex">
        		<md-field>
          			<label for="RequestType">Request Type</label>
          			<md-select name="requestType" id="requestType">
            			<md-option value="buy">Buy</md-option>
            			<md-option value="divert">Divert</md-option>
           			 </md-select>
        		</md-field>
      		</div>
      	  </div>
      	  <br>
      	  <div class="md-layout-row md-layout-wrap md-gutter">
      	  	<div class="md-layout-col">
      	  		<h5>Device Details</h5>
      			<div class="md-flex">
        		<md-field>
          			<label for="Device">Device</label>
          			<md-select name="device" id="device">
            			<md-option value="printer">Printer</md-option>
            			<md-option value="scanner">Scanner</md-option>
           			 </md-select>
        		</md-field>
      			</div>
      	  	</div>

      	  </div>
      		
            
       	</md-card-content>
	  </md-card>
	</form>
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
  	 width: 700px;
    margin: 20px;
    padding: 20px;
    display: inline-block;
    vertical-align: top;
  }
  .md-field {
    max-width: 200px;
  }
</style>