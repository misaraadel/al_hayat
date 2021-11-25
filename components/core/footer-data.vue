<template>
  <footer class="w-full pt-20 pb-6">
    <div class="container">
      <div class="content flex text-center flex-col justify-center items-center content-center">
        <coreLogo class="mb-9" />

        <p class="text-lg lg:w-1/2 md:w-full sm:w-full w-full text-center m-auto text-white opacity-70 font-normal">
          {{ footerData }}
        </p>

        <div class="heading-content w-full mt-9 mb-5 relative z-max">
            <h4 class="text-lg bg-primary px-3 text-yellow font-normal relative m-auto">
              {{ socailMedia }}
            </h4>
        </div>
        <coreSocial-media class="w-full justify-center" />
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const footerData = 'لك الأولوية في مكانك ، عليك الحياة وعلينا الرعاية مع أفضل كوادر الأطباء المتخصصين'
const socailMedia = 'تابعنا على'
</script>

<style lang="scss">
footer{
  .heading-content{
    &::after{
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: rgba($color: #fff, $alpha: .10);
      top: 50%;
      left: 0px;
      transform: translateY(-50%);
      z-index: -1;
    }
    h4{
      width: fit-content;
      transform: translateY(-4px);
    }
  }
}
</style>


