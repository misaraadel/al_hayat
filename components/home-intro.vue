<template>
<header class="w-full bg-primary overflow-hidden relative z-40 pt-40" id="home">
    <div class="container mx-auto pt-2">
        <div class="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 lg:gap-32 md:gap-10 sm:gap-10 gap-10">
            <div class="content w-full h-full flex flex-col justify-center">
                <h4 class="text-4xl text-white font-black">
                    {{ introHead }}
                </h4>

                <p class="text-lg text-white opacity-70 mt-9 mb-11">
                    {{ introDesc }}
                </p>

                <coreCall-to-action />
            </div>

            <div class="image-content">
                <img
                    src="/img/header.png"
                    class="w-full object-contain object-left" 
                    style="height: 600px"
                    :alt="`${introHead}`" />
            </div>
        </div>
    </div>
</header>
</template>

<script setup lang="ts">
const introHead = 'مجمع عيادات الحياة الطبية'

const introDesc = 'لك الأولوية في مكانك ، عليك الحياة وعلينا الرعاية مع أفضل كوادر الأطباء المتخصصين'
</script>

<style lang="scss">
header{
    &::After{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: url('/img/top_left_graph.svg');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: top left;
        top: 0;
        left: 0;
        z-index: -1;
    }
}
@media (max-width: 900px) {
    header{
        .content{
            align-items: center;
            align-content: center;
            text-align: center;
        }
        .image-content{
            img{
                object-position: bottom !important;
            }
        }
    }
}
</style>