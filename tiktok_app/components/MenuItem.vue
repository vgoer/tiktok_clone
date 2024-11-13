<!-- 菜单 -->
<template>
    <div class="w-full flex items-center hover:bg-gray-100 p-2.5 rounded rounded-md">
        <Icon :name="icon" :color="colorString" :size="sizeString"></Icon>
        <span
            :class="`text-[${colorString}]`"
            class="lg:block hidden pl-[9px] mt-0.5 font-semibold text-[17px]"
        >
            {{ iconString }}
        </span>
    </div>
</template>
<script setup lang='ts'>

const props = defineProps(["iconString","colorString","sizeString"])
const {iconString, colorString, sizeString} = toRefs(props)

    
let icon = ref('')

if (iconString?.value === "For You") icon.value = "mdi:home"
if (iconString?.value === "Following") icon.value = "ci:group"
if (iconString?.value === "Live") icon.value = "ri:live-line"


</script>