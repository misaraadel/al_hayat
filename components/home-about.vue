<template>
<section class="about w-full py-24" id="about">
    <div class="container">
        <coreGeneral-heading
            headImg="about_icon"
            :headingTitle="`${aboutHead}`"
            :headingDesc="`${aboutDesc}`"
        />

        <div class="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-24">
            <div class="flex image-content items-center justify-center content-center w-full overflow-hidden relative">
                <img 
                    src="/img/about.jpg"
                    class="w-full h-full object-cover absolute top-0 left-0 z-0"
                    :alt="`${aboutDesc}`" />
                <a href="#" class="w-24 h-24 flex justify-center content-center items-center relative z-10 video-play">
                    <img 
                        src="/img/video.svg"
                        class="w-12 h-12 object-contain"
                        :alt="`${aboutDesc}`" />
                </a>
            </div>

            <div class="list-content">
                <template v-for="list in aboutList" :key="list.code">
                    <div class="list mb-6 flex items-center content-center">
                        <div class="list-img overflow-hidden relative z-10 w-24 h-24 flex justify-center items-center content-center bg-primary">
                            <img :src="`/img/${list.img}.svg`"
                                class="w-6/12 h-2/4 object-contain"
                                :alt="`${list.desc}`" />
                        </div>

                        <div class="content pr-8">
                            <h4 class=" text-2xl text-dark font-bold mb-7">
                                {{ list.title }}
                            </h4>

                            <p class="text-desc text-base font-normal">
                                {{ list.desc }}
                            </p>    
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const aboutList = ref([
    {
        code: '1',
        img: 'about_icon_1',
        title: 'رعاية',
        desc: 'تهتم الحياة برعيتك بشكل احترافي يناسب أولوياتك ويراعي كل احتياجاتك الطبية'
    },{
        code: '2',
        img: 'about_icon_2',
        title: 'خبرة',
        desc: 'لدى مجمع عيادات الحياة خبرات متراكمة وسنين من العمل الدؤوب في المجال الطبي'
    },{
        code: '3',
        img: 'about_icon_3',
        title: 'تكامل',
        desc: 'تقدم عيادات الحياة خدمات طبية متكاملة تشمل التخصصات الطبية لتوفيرها بمكان واحد ومن خلال خدمة عملائها'
    }
])

const aboutHead = 'عن المجموعة'

const aboutDesc= 'الحياة أعظم نعمة ، نحن نقدرها مثلك'

</script>

<style lang="scss">
.about{
    .image-content{
        height: 369px;
        border-radius: 212px;

        &::after{
            content: '';
            position: absolute;
            width: 90%;
            height: 90%;
            border: 1px solid #fff;
            border-radius: 212px;
            top: 5%;
            left: 5%;
            z-index: 1;
        }

        .video-play{
            border-radius: 50%;

            &:before,
            &:after {
                content: '';
                display: block;
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background-color: rgba($color: #FBCB0F, $alpha: .2);
            }
            &:before {
                z-index: 2;
            }
            &:after {
                overflow: hidden;
                z-index: 0;
                opacity: 1;
                visibility: visible;
                animation: pulsecust 1.8s linear;
                animation-iteration-count: infinite;
                transition: visibility 0.1s ease-out, opacity 0.2s ease-out;
            }

            &:hover{
                img{
                    animation: pulse .4s linear;
                }
            }
        }
    }

    .list{
        &:last-child{
            margin: 0px !important;
        }

        .list-img{
            border-radius: 50%;
            
            img{
                transition: all .2s linear;
            }

            &::After{
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                background-color: #1D71B9;
                top: 0;
                left: 0;
                z-index: -1;
                transform: scale(0);
                border-radius: 50%;
                transition: all .3s linear;
            }
        }
        
        .content{
            width: calc(100% - 96px);

            h4{
                transition: all .3s linear;
            }
        }

        &:hover{
            .list-img{
                &::After{
                    transform: scale(1);
                }

                img{
                    animation: fadeInRight 1s linear;
                }
            }

            h4{
                color: #1D71B9;
                transform: translateX(-10px);
            }
        }
    }
}

@media(max-width: 999px){
    .about{
        .list{
            flex-direction: column !important;
            justify-content: center !important;
            align-items: center !important;
            text-align: center !important;

            .content{
                width: 100% !important;
                padding: 20px 0px !important;
            }
        }
    }   
}
</style>