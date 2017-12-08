<template>
  <md-content id="outer" class="md-elevation-7">
      <img src="../assets/logo.svg" style="position:absolute"/>
      <p style="position:absolute;top:270px;"><strong>Barcode Based Hardware Inventory Management</strong></p>
      <md-content id="inner" class="md-elevation-24">
          <div>
            <label>UserName</label>
            <input type="text" name="" class="form-control">
            <br/>
            <label>Password</label>
            <input type="password" name="" class="form-control">
            <br/>
            <router-link to="/home"><button class="btn btn primary">LogIn</button></router-link>
          </div>
      </md-content>
  </md-content>
 
</template>

<script>
 
</script>

<style lang="scss" scoped>

.md-content#outer{
      width: 1000px;
      height:600px;
      margin-left: -500px;
      margin-top:-300px;
      position:absolute;
      top:50%;
      left:50%;
      display: flex;
      
      justify-content:center;
}
.md-content#inner{
    width:400px;
  
    position:relative;
    height:250px;
    margin:0 auto;
    padding:20px;
    top:300px;
    display: flex;
    justify-content:center;

}

</style>