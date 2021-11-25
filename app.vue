<template>
<div>
  <NuxtPage />
</div>
</template>

<script setup lang="ts">
  const title = 'الحياة للرعاية الطبية'
  const description = 'مجمع عيادات الحياة الطبية لك الأولوية في مكانك ، عليك الحياة وعلينا الرعاية مع أفضل كوادر الأطباء المتخصصين'

  useMeta({
	  title: title,

    htmlAttrs: { lang: 'ar', dir: 'rtl' },

    link: [{ rel: 'icon', type: 'image/png', href: '/icon.png' }],

    meta: [
      { hid: 'description', name: 'description', content: description },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'google', name: 'google', content: 'notranslate' }
    ]
  })
</script>
