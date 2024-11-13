<template>
    <div
        id="SideNavMain"
        :class="route.fullPath === '/' ? 'lg:w-[310px]' : 'lg:w[220px]'"
        class=" fixed z-20 bg-white pt-[60px] h-full lg:border-r-0 border-r w-[5px] overflow-auto"
    >
    <div>
        
    </div>
    </div>
</template>
<script setup>

const route = useRoute()

</script>
