<template>
<section class="call-now w-full py-14 bg-cover bg-no-repeat" style="background-image:url('/img/call_now.png')">
    <div class="container">
        <div class="w-full flex justify-center items-center content">
            <img
                src="/img/phone.svg"
                class="w-12 h-12 object-contain ml-5"
                :alt="`${callHeading}`" />

            <h4 class="text-2xl font-bold text-dark ml-5">
                {{ callHeading }}
            </h4>

            <a @click="callus()" class="text-2xl font-bold text-secondary cursor-pointer hover:text-yellow">
                {{ callNumber }}
            </a>
        </div>
    </div>
</section>
</template>

<script setup lang="ts">
const { callus }  = useActions()

const callHeading = 'لا تتردد في التواصل معنا الأن على الرقم الموحد'

const callNumber = '920022480'
</script>

<style lang="scss">
.call-now{
    img{
        animation: bounce-in-fwd 2s linear alternate infinite;
    }   
}
@media (max-width: 999px) {
    .call-now{
        .content{
            flex-direction: column !important;
            text-align: center;

            img{
                margin: 0px !important
            }

            h4{
                margin: 10px 0px !important
            }
        }
    }
}
</style>