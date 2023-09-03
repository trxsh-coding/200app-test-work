<template>
    <div class="wrapper">
        <div class="computer-icon-block">
            <div class="rounded-menu-item">
                <img src="../assets/computer-icon.svg" alt="computer-icon" />
            </div>
            <span>בניית מערכים</span>
        </div>
        <div class="calendar-icon-block">
            <div class="rounded-menu-item">
                <img src="../assets/calendar-icon.svg" alt="calendar-icon" />
            </div>
            <span>היומן שלי</span>
        </div>
        <div class="navigation-icon-block">
            <div class="rounded-menu-item active">
                <img
                    src="../assets/navigation-icon.svg"
                    alt="navigation-icon"
                />
            </div>
            <span>המרחב שלי</span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'NavigationMenuComponent'
});
</script>
<style lang="scss" scoped>
.wrapper {
    .computer-icon-block,
    .calendar-icon-block,
    .navigation-icon-block {
        display: flex;
        flex-direction: column;
        margin-right: 34px;
        align-items: center;
    }
    .rounded-menu-item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 41px;
        height: 41px;
        border-radius: 50%;
    }
    .active {
        background-color: #e0f2fe;
    }
    span {
        font-size: 12px;
    }
}
</style>
