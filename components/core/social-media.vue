<template>
<ul class="social-media flex content-center items-center">
    <template v-for="social in socialMedia" :key="social.img">
        <li class="ml-2">

            <a 
                :href="`${social.link}`" 
                target="_blank" 
                class="bg-white bg-opacity-10 social-icon overflow-hidden flex justify-center items-center content-center"
            >
                <img 
                    :src="`/img/${social.img}.svg`"
                    class="w-1/2 h-1/2 object-contain"
                    :alt="`${social.alt}`" />
            </a>

        </li>
    </template>
</ul>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const socialMedia = ref([
    {
        img: 'facebook',
        link: 'www.facebook.com',
        alt: 'صفحة الحياة علي فيس بوك'
    },{
        img: 'twitter',
        link: 'www.twitter.com',
        alt: 'صفحة الحياة علي تويتر'
    },{
        img: 'instagram',
        link: 'www.instagram.com',
        alt: 'صفحة الحياة علي انستجرام'
    },{
        img: 'youtube',
        link: 'www.youtube.com',
        alt: 'قناة الحياة علي اليوتيوب'
    },{
        img: 'snap_chat',
        link: 'www.snapshat.com',
        alt: 'ًصفحه الحياة علي سناب شات'
    }
    
])
</script>

<style lang="scss">
.social-media{
    .social-icon{
        width: 35px;
        height: 35px;
        border-radius: 50%;
        transition: all 100ms linear;

        img{
            filter: invert(99%) sepia(100%) saturate(0%) hue-rotate(253deg) brightness(102%) contrast(102%);
            opacity: .3;
        }

        &:hover{
            background-color: #1D71B9;

            img{
                opacity: 1;
                animation: toRightFromLeft .4s linear;
            }
        }
    }
}
</style>