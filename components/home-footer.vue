<template>
	<div class="w-full bg-primary relative z-50 footer-content">
    <coreFooter-data />

    <coreHome-copyrights />
	</div>
</template>

<style lang="scss">
.footer-content{
    &::after{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: url('/img/footer_graph.svg');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: top right;
        top: 0;
        left: 0;
        z-index: -1;
    }
}
</style>
