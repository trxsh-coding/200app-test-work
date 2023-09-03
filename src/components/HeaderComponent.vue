<template>
    <div class="wrapper">
        <div class="user-block">
            <div class="avatar-user-block">
                <AvatarUI :src="user.avatar" v-if="user?.avatar" />
            </div>
            <div class="notification-icon">
                <img src="../assets/notification.svg" alt="notification" />
            </div>
        </div>
        <div class="navigation-menu-block">
            <NavigationMenuComponent />
        </div>
    </div>
</template>

<script lang="ts">
import NavigationMenuComponent from '@/components/NavigationMenuComponent.vue';
import { User } from '@/types/User';
import AvatarUI from '@/ui/AvatarUI.vue';
import { PropType, defineComponent } from 'vue';

export default defineComponent({
    name: 'HeaderComponent',
    components: {
        AvatarUI,
        NavigationMenuComponent
    },
    props: {
        user: {
            required: true,
            type: Object as PropType<User>
        }
    }
});
</script>
<style lang="scss" scoped>
.wrapper {
    height: 61px;
    background-color: #fff;
    display: flex;
    align-items: center;
    width: 100%;
}
.user-block {
    display: flex;
    align-items: center;
    flex: 0.5;
    .notification-icon,
    .avatar-user-block {
        margin: 15px;
    }
}
@media screen and (max-width: 600px) {
    .wrapper {
        justify-content: space-between;
    }
}
</style>
