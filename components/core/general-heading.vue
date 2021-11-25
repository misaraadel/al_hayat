<template>
    <div class="w-full global-heading mb-20 text-center flex flex-col justify-center items-center content-center"> 
        <img
            :src="`/img/${headImg}.svg`"
            class="w-14 h-14 object-contain mb-3"
            :alt="`${headingTitle}`"
        />

        <h4 class="text-4xl mb-4 text-dark font-black">
            {{ headingTitle }}
        </h4>

        <p class="text-base mb-1 font-normal text-desc ">
            {{ headingDesc }}
        </p>
    </div>
</template>

<script setup lang="ts">
    defineProps({
        headImg: String,
        headingTitle: String,
        headingDesc: String
    })
</script>