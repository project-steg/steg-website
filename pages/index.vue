<template>
  <div class="index">
    <div class="site-logo">
      <img src="/img/home/site-logo-center.png" alt="Steg" id="logo">
      <p class="description">現在メンテナンス中です。</p>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style>

.index {
  height: 100vh;
  position: fixed;
  width: 100%;
  background-image: url('/img/home/bg.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
}

.index::before {
  content: '';
  background: inherit;
  -webkit-filter: blur(10px);
  -moz-filter: blur(10px);
  -o-filter: blur(10px);
  -ms-filter: blur(10px);
  filter: blur(10px);
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  z-index: -1;
}

.site-logo {
  display: flex;
  flex-direction: column;
  text-align: center;
}

#logo {
  height: 50vh;
}

.description {
  margin-top: 10px;
}

</style>
