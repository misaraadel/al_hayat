<template>
<section class="copyrights">
   <div class="container">
      <div class="py-3 border-t border-solid border-white border-opacity-10 flex items-center content-center justify-between">
      <coreCompany-copyrights />

      <coreCayan-copyrights />
      </div>
   </div>
</section>
</template>

<style lang="scss">
@media (max-width: 800px) {
   .copyrights {
      padding-bottom: 63px;

      div {
         flex-direction: column;
         justify-content: center;

         .copyrights-data {
            margin-bottom: 15px;
         }
      }
   }
}
</style>