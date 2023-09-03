<template>
    <div
        class="wrapper"
        :style="{
            backgroundImage: 'url(' + src + ')',
            width: `${size}px`,
            height: `${size}px`
        }"
    />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        src: {
            type: String,
            required: true
        },
        size: {
            default: 32,
            type: Number
        }
    }
});
</script>
<style lang="scss" scoped>
.wrapper {
    background-position: center;
    background-size: cover;
}
</style>
