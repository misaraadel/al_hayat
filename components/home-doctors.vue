<template>
<section class="doctors w-full py-24 bg-secondary relative z-50" id="doctors">
    <div class="container">
        <coreGeneral-heading 
            headImg="doctor_icon"
            :headingTitle="`${doctorHead}`"
            :headingDesc="`${doctorDesc}`" />

        <div class="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-4">
            <template v-for="doctor in doctors" :key="doctor.code">
                <div class="box flex flex-col justify-center items-center content-center">
                    <img 
                        :src="`/img/${doctor.img}.png`"
                        class="img-box object-contain"
                        :alt="`${doctor.desc}`" />
                    
                    <h4 class="text-xl text-white my-5 font-bold">
                        {{ doctor.title }}
                    </h4>

                    <p class="mt-2 text-white flex justify-center items-center content-center font-normal bg-white bg-opacity-10">
                        {{ doctor.desc }}
                    </p>
                </div>
            </template>
        </div>
    </div>
</section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const doctors = ref([
    {
        code: '1',
        img: 'doctor_1',
        title: 'د / السيد حسن',
        desc: 'أخصائي باطنية'
    },{
        code: '2',
        img: 'doctor_2',
        title: 'د / عزة عدلي',
        desc: 'أخصائية جلدية'
    },{
        code: '3',
        img: 'doctor_3',
        title: 'د / ممدوح صموئيل',
        desc: 'أخصائي مسالك بولية'
    },{
        code: '4',
        img: 'doctor_4',
        title: 'د / وفاء جابر',
        desc: 'أخصائية نساء وتوليد'
    },{
        code: '5',
        img: 'doctor_5',
        title: 'د / ممدوح محمود',
        desc: 'طبيب أسنان'
    }
])

const doctorHead = 'الاطباء'

const doctorDesc = 'أفضل الكوادر الطبية والمتخصصة في المجموعة'
</script>

<style lang="scss">
.doctors{
    &::aFter{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: url('/img/doctor_graph.svg');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: top left;
        top: 0;
        left: 0;
        z-index: -1;
    }

    .global-heading{
        h4{
            color: #fff !important;
        }

        p{
            color: rgba($color: #fff, $alpha: .7) !important;
        }
    }

    .box{
        transition: all .3s linear;

        .img-box{
            width: 218px;
            height: 218px;
            border-radius: 50%;
        }

        p{
            min-width: 170px;
            height: 50px;
            border-radius: 27px;
        }

        &:hover{
            transform: translateY(-10px);
        }
    }
}
</style>