<template>
  <div class="call-to-action flex items-center content-center">
    <a class="custom-btn cursor-pointer justify-center bg-yellow relative z-40 flex items-center content-center" href="#contact">
      <img 
        src="/img/clock.svg"
        class="w-6 h-6 object-contain ml-2"
        :alt="`${callAlt}`" />
      
      <span class="text-primary text-base font-semibold">
        حجز موعد
      </span>
    </a>

    <a @click="callus()" class="custom-btn cursor-pointer mr-2 justify-center bg-secondary relative z-40 flex items-center content-center">
      <img 
        src="/img/phone.svg"
        class="w-6 h-6 object-contain ml-2"
        :alt="`${callAlt}`" />
      
      <span class="text-white text-base font-semibold">
        إتصل بنا
      </span>
    </a>
  </div>
</template>

<script setup lang="ts">
  const { callus } = useActions()

  const callAlt = 'لا تتردد في التواصل معنا الأن لحجز موعدك'
</script>

<style lang="scss">
.custom-btn{
  width: 120px; 
  height: 50px !important;
  border-radius: 25px !important;
  transition: all .2s linear;

  span{
    transform: translateY(-3px);
  }

  &::after , &::before{
    position: absolute;
    content: '';
    display: block;
    width: 140%;
    height: 100%;
    left: -20%;
    z-index: -1;
    transition: all ease-in-out 0.5s;
    background-repeat: no-repeat;
    display: none;
  }

  &::after{
    top: -75% !important;
    background-image: radial-gradient(circle, #1D71B9 20%, transparent 20%), radial-gradient(circle, transparent 20%, #1D71B9 20%, transparent 30%), radial-gradient(circle, #1D71B9 20%, transparent 20%), radial-gradient(circle, #1D71B9 20%, transparent 20%), radial-gradient(circle, transparent 10%, #1D71B9 15%, transparent 20%), radial-gradient(circle, #1D71B9 20%, transparent 20%), radial-gradient(circle, #1D71B9 20%, transparent 20%), radial-gradient(circle, #1D71B9 20%, transparent 20%), radial-gradient(circle, #1D71B9 20%, transparent 20%);
    background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 18% 18%;
  }

  &::before {
    bottom: -75% !important;
    background-image: radial-gradient(circle, #1D71B9 20%, transparent 20%), radial-gradient(circle, #1D71B9 20%, transparent 20%), radial-gradient(circle, transparent 10%, #1D71B9 15%, transparent 20%), radial-gradient(circle, #1D71B9 20%, transparent 20%), radial-gradient(circle, #1D71B9 20%, transparent 20%), radial-gradient(circle, #1D71B9 20%, transparent 20%), radial-gradient(circle, #1D71B9 20%, transparent 20%);
    background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%, 20% 20%;
  }
  
  &:hover{
    transform: scale(.94);

    &::after , &::before{
      display: block;
    }

    &::before{
      animation: topBubbles ease-in-out 0.75s forwards;
    }

    &::after{
      animation: bottomBubbles ease-in-out 0.75s forwards;
    }
  }
}
</style>