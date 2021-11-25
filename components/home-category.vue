<template>
<section class="category w-full py-24 bg-white" id="category">
    <div class="container">
        <coreGeneral-heading 
        headImg="category"
        :headingTitle="`${categoryHead}`"
        :headingDesc="`${categoryDesc}`"/>

        <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
            <template v-for="category in categoryList" :key="category.code">
                <a href="#contact" class="box w-full relative z-50 px-5 py-6 flex items-center content-center">
                    <img 
                        :src="`/img/${category.img}.svg`"
                        class="icon-img w-16 h-16 object-contain"
                        :alt="`${category.title}`" />
                    
                    <div class="content flex justify-between items-center content-center">
                        <h4 class="text-dark w-3/4 pr-5 font-bold text-xl">
                            {{ category.title }}
                        </h4>
                    </div>
                </a>  
            </template>
        </div>
    </div>
</section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const categoryList = ref([
    {
        code: '1',
        img: 'category_1',
        title: 'عيادات الباطنية'
    },{
        code: '2',
        img: 'category_2',
        title: 'عيادة النساء و التوليد و متابعة الحمل و العقم'
    },{
        code: '3',
        img: 'category_3',
        title: 'عيادة الجلدية و التجميل'
    },{
        code: '4',
        img: 'category_4',
        title: 'عيادة الجراحة'
    },{
        code: '5',
        img: 'category_5',
        title: 'عيادة الاطفال و مشاكل النمو و سكر الاطفال',
    },{
        code: '6',
        img: 'category_6',
        title: 'عيادة العظام'
    },{
        code: '7',
        img: 'category_7',
        title: 'عيادة العيون'
    },{
        code: '8',
        img: 'category_8',
        title: 'عيادة المسالك البوليه و عقم الرجال'
    },{
        code: '9',
        img: 'category_9',
        title: 'عيادة الأنف و الأذن و الحنجرة'
    },
])

const categoryHead = 'أقسام العيادات'

const categoryDesc = 'مجموعة مختلفة من الأقسام تغطي كل التخصصات'
</script>

<style lang="scss">
.category{
    .box{
        &::after , &::before{
            content: '';
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 0;
            border-radius: 60px;
        }

        &::after{  
            width: 100%;
            height: 100%;
            background-color: #fff;
            z-index: -1;
            box-shadow: 0px 0px 20px rgba($color: #0C4F99, $alpha: .08);
            transition: width .4s linear;
        }

        &::before{
            width: 112px;
            height: 112px;
            background-color: rgba($color: #153564 , $alpha: 0.2);
            z-index: -2;
            top: calc(50% - 56px) !important;
            transform: translateY(0px) !important;
            visibility: hidden;
            animation: pulsecust 1.8s linear;
            animation-iteration-count: infinite;
            transition: visibility 0.1s ease-out, opacity 0.2s ease-out;
        }
        
        .icon-img{
            transition: all .2s linear;
        }

        .content{
            width: calc(100% - 64px);

            .arrow-icon{
                border-radius: 50%;
                img{
                    transition: all .2s linear;
                }
            }

            h4{
                transition: all .2s linear;
            }
        }

        &:hover{
            &::before{
               visibility: visible;
            }

            &::after{
                width: 112px;
                height: 112px;
            }

            h4{
                transform: translateX(-30px);
                padding-left: 0px !important;
                color: #1D71B9;
            }

            .icon-img{
                transform: translateX(-4px);
            }

            .content{
                .arrow-icon{
                    img{
                        transform: rotate(-90deg);
                    }
                }
            }

        }
    }
}
</style>