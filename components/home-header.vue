<template>
<nav class="w-full absolute top-0 left-0 z-50 pt-7">
   <div class="container mx-auto">
      <div class="content w-full flex justify-between items-center content-center">
         <coreLogo />

         <ul class="navbar-nav flex items-center content-center">
            <template v-for="navLink in navLinks" :key="navLink.code">
               <li class="ml-6">
                  <a :href="`#${navLink.link}`" class="flex items-center content-center">
                     <img 
                        :src="`/img/${navLink.img}.svg`"
                        class="w-6 h-6 object-contain ml-1"
                        :alt="`${NavAlt}`" />

                     <span class="text-base font-semibold text-white">
                        {{ navLink.title }}
                     </span>
                  </a>
               </li>
            </template>
         </ul>
         
         <coreCall-to-action />
      </div>
   </div>
</nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const navLinks = ref([
   {
      code: '1',
      img: 'home',
      title: 'الرئيسية',
      link: 'home',
   },{
      code: '2',
      img: 'heart',
      title: 'عن المجموعة',
      link: 'about',
   },{
      code: '3',
      img: 'offer',
      title: 'العروض',
      link: 'offer'
   },{
      code: '4',
      img: 'category',
      title: 'أقسام العيادات',
      link: 'category'
   },{
      code: '5',
      img: 'doctors',
      title: 'الأطباء',
      link: 'doctors'
   },{
      code: '6',
      img: 'location',
      title: 'الفروع',
      link: 'location'
   }
])

const NavAlt = 'مجمع عيادات الحياة الطبية'
</script>

<style lang="scss">
nav{
   .navbar-nav{
      li{

         &:last-child{
            margin: 0px !important;
         }

         a{
            &:hover{
               span{
                  background: linear-gradient(-45deg , #65C7EA , #fff);
                  -webkit-text-fill-color: transparent;
                  -webkit-background-clip: text;
               }
            }
         }
      }
   }
}

@media (max-width: 999px) {
   nav{
      z-index: 99999 !important;
      
      .content{
         justify-content: center !important;
      }

      .navbar-nav{
         width: 100%;
         position: fixed;
         bottom: 0;
         left: 0;
         padding: 10px 0px;
         background-color: #153564;
         box-shadow: 0px 0px 10px rgba($color: #1D71B9 , $alpha: .9);

         li{
            width: calc(100% / 6);
            display: flex;
            justify-content: center;
            align-items:  center;
            align-content: center;

            span{
               display: none;
            }
         }
      }

      .call-to-action{
       display: none !important;
      }
   }
}
</style>
