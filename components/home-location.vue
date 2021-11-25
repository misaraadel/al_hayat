<template>
<section class="location w-full py-24 bg-white" id="location">
    <div class="container">
        <coreGeneral-heading
        headImg="location"
        :headingTitle="`${locationHead}`"
        :headingDesc="`${locationDesc}`"/>

        <div class="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-4">
           <template v-for="location in locations" :key="location.code">
                <div class="box relative bg-white overflow-hidden">
                    <div class="box-head text-center py-7 bg-cover bg-center bg-no-repeat" style="background-image:url('/img/location_head.svg')">
                        <h4 class="text-white text-2xl font-bold mb-4">
                            {{ location.title }}
                        </h4>

                        <p class="text-white opacity-70 text-base font-normal">
                            {{ location.desc }}
                        </p>
                    </div>

                    <div class="box-body py-8 flex justify-center items-center content-center">
                        <a :href="`${location.direction}`" target="_blank" class="icon relative z-50 ml-4 w-14 h-14 flex justify-center items-center content-center">
                            <img 
                                src="/img/direction.svg"
                                class="w-1/2 h-1/2 object-contain"
                                :alt="`${location.title}`" />
                        </a>

                        <a :href="`tel:${location.callNum}`" target="_blank" class="icon relative z-50 ml-4 w-14 h-14 flex justify-center items-center content-center">
                            <img 
                                src="/img/call.svg"
                                class="w-1/2 h-1/2 object-contain"
                                :alt="`${location.title}`" />
                        </a>

                        <a :href="`${location.whatsApp}`" target="_blank" class="icon relative z-50 w-14 h-14 flex justify-center items-center content-center">
                            <img 
                                src="/img/whats.svg"
                                class="w-1/2 h-1/2 object-contain"
                                :alt="`${location.title}`" />
                        </a>
                    </div>
                </div>
           </template>
        </div>
    </div>
</section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const locations = ref([
    {
        code: '1',
        title: 'فرع الفيحاء',
        desc: 'مجمع عيادات الحياة، هارون الرشيد،الفيحاء،، الفيحاء، الرياض 14253، المملكة العربية السعودية',
        direction: 'https://goo.gl/maps/H7rrzRxyZWibSFhA9',
        callNum: '0556292405',
        whatsApp: 'https://wa.me/+966556292405'
    },{
        code: '2',
        title: 'فرع اشبيليا',
        desc: 'طريق الشيخ حسن بن حسين بن علي، اشبيلية، الرياض 13225، المملكة العربية السعودية',
        direction: 'https://goo.gl/maps/D9EM5FE1ipBZdzcZA',
        callNum: '0554805075',
        whatsApp: 'https://wa.me/+966554805075'
    },{
        code: '3',
        title: 'فرع النفل',
        desc: 'طريق ابي بكر الصديق الفرعي، النفل، الرياض 13312، المملكة العربية السعودية',
        direction: 'https://goo.gl/maps/nof2P3MBzvykQpR39',
        callNum: '0556294079',
        whatsApp: 'https://wa.me/+966556294079'
    },{
        code: '4',
        title: 'فرع النظيم',
        desc: 'المرمر، حي الندوة، الرياض 14814، المملكة العربية السعودية',
        direction: 'https://goo.gl/maps/qA1vopV7bzkp2oye8',
        callNum: '556281750',
        whatsApp: 'https://wa.me/+966556281750'
    },{
        code: '5',
        title: 'فرع الرمل',
        desc: 'علي البجادي، الرمال، الرياض 13263، المملكة العربية السعودية',
        direction: 'https://goo.gl/maps/5zFg3zRjTtDe5CheA',
        callNum: '0550488603',
        whatsApp: 'https://wa.me/+966550488603'
    },{
        code: '6',
        title: 'فرع قرطبة',
        desc: '7220 طريق الشيخ حسن بن حسين بن علي، 4424, الرياض 13245 4424، المملكة العربية السعودية',
        direction: 'https://goo.gl/maps/ehMhgT1ekN8JfbGc8',
        callNum: '0533110547',
        whatsApp: 'https://wa.me/+966533110547'
    },
])

const locationHead = 'الفروع'

const locationDesc = 'كل فروع المجموعة على مستوى المملكة'
</script>

<style lang="scss">
.location{
    .box{
        border-radius: 20px;
        box-shadow: 0px 0px 20px rgba($color: #0C4F99, $alpha: .08);
        transition: all .4s linear;

        .box-body{
            .icon{
                border-radius: 50%;
                background-color: rgba($color: #0C4F99, $alpha: .06);
                
                &::before{
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background-color: rgba($color: #153564 , $alpha: 0.2);
                    z-index: -2;
                    border-radius: 50%;
                    top: 0px !important;
                    left: 0px;
                    visibility: hidden;
                    animation: pulsecust 1.8s linear;
                    animation-iteration-count: infinite;
                    transition: visibility 0.1s ease-out, opacity 0.2s ease-out;
                }

                &:hover{
                    &::before{
                        visibility: visible !important;
                    }
                }
            }
        }
        
        &:hover{
            background: rgba($color: #0C4F99, $alpha: .02);
            transform: translateY(-10px);
        }
    }
}
</style>