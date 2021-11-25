<template>
<section class="offers w-full py-24 relative z-40 overflow-hidden" id="offer">
    <div class="container">
        <coreGeneral-heading 
            headImg="offer"
            :headingTitle="`${offerHead}`"
            :headingDesc="`${offerDesc}`"/>

        <div class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
            <template v-for="card in offerCards" :key="card.code">
                <div class="box bg-white relative overflow-hidden">
                    <div class="image-content relative w-full h-52 z-50 overflow-hidden">
                        <img
                            :src="`/img/${card.img}.jpg`"
                            class="w-full h-full card-img object-cover object-center"
                            :alt="`${card.title}`" />
                        
                        <img src="/img/discount.svg" class="w-12 h-12 icon object-contain absolute top-2 right-2 z-40" alt="">
                    </div>

                    <div class="content w-full felx flex-col justify-center content-center items-center text-center p-5">
                        <h4 class="text-xl text-dark font-bold mb-2">
                            {{ card.title }}
                        </h4>

                        <p class="text-base font-normal text-desc">
                            {{ card.desc }}
                        </p>
                    </div>

                    <div class="details w-full flex justify-between items-center content-center">
                        <p class="text-primary pr-4 leading-7">
                            <span class="text-2xl font-black ml-1">
                                {{ card.price }}
                            </span>

                            <span class="text-sm price-content font-normal">
                                ريال سعودي
                            </span>
                        </p>

                        <a href="#contact" class="custom-btn offer-btn cursor-pointer mr-2 justify-center bg-primary relative z-40 flex items-center content-center">
                            <img 
                                src="/img/arrow.svg"
                                class="w-6 h-6 object-contain ml-2"
                                :alt="`${card.title}`" />
                            
                            <span class="text-white text-base font-semibold">
                                حجز موعد
                            </span>
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

const offerCards = ref([
    {
        code: '1',
        img: 'offer_1',
        title: 'تقشير وجه بدون حواجب , بدون رتوش',
        desc: ' تهتم الحياة برعيتك بشكل احترافي يناسب  … أولوياتك ويراعي كل احتياجاتك',
        price: '99'
    },{
        code: '2',
        img: 'offer_2',
        title: 'تقشير وجه بدون حواجب , بدون رتوش',
        desc: ' تهتم الحياة برعيتك بشكل احترافي يناسب  … أولوياتك ويراعي كل احتياجاتك',
        price: '99'
    },{
        code: '3',
        img: 'offer_3',
        title: 'تقشير وجه بدون حواجب , بدون رتوش',
        desc: ' تهتم الحياة برعيتك بشكل احترافي يناسب  … أولوياتك ويراعي كل احتياجاتك',
        price: '99'
    },{
        code: '4',
        img: 'offer_4',
        title: 'تقشير وجه بدون حواجب , بدون رتوش',
        desc: ' تهتم الحياة برعيتك بشكل احترافي يناسب  … أولوياتك ويراعي كل احتياجاتك',
        price: '99'
    }
]) 
 
const offerHead = 'العروض'

const offerDesc = 'أحدث العروض المضافة لدى المجموعة'
</script>

<style lang="scss">
.offers{
    background-color: #F6F9FC;

    &::after{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: url('/img/offer_graph.svg');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: top right;
        top: 0;
        left: 0;
        z-index: -1;
    }

    .box{
        border-radius: 20px;
        transition: all .4s linear ;
        
        .icon , .card-img{
            transition: all .4s linear ;
        }
        
        .offer-btn{
            width: 140px !important;
            border-radius: 0px 25px 25px 20px !important;
        }
        
        .price-content{
            transform: translateY(-3px) !important;
            position: relative;
            display: inline-block;
        }
        
        .custom-btn{
            &:hover{
                transform: scale(1) !important;
            }
        }

        &:hover{
            transform: translateY(-10px);
            box-shadow: 0px 0px 10px rgba($color: #1D71B9 , $alpha: .1);

            .icon{
                animation: spinner .5s linear;
            }
            
            .card-img{
                transform: scale(1.2);
            }

            h4{
                color: #153564;
            }
        }
    }
}
</style>