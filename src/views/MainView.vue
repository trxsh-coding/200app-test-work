<template>
    <div class="wrapper">
        <HeaderComponent :user="user" />
        <section>
            <AttendanceComponent />
            <DiaryComponent />
        </section>
    </div>
</template>

<script lang="ts">
import AttendanceComponent from '@/components/AttendanceComponent.vue';
import DiaryComponent from '@/components/DiaryComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import userData from '@/mock/user.json';
import { GET_USER } from '@/store/user/types';
import { computed, defineComponent, onBeforeMount } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
    name: 'MainView',
    components: {
        HeaderComponent,
        DiaryComponent,
        AttendanceComponent
    },
    setup() {
        const store = useStore();

        onBeforeMount(() => {
            store.commit(GET_USER, userData);
        });
        const user = computed(() => store.state.user.currentUser);
        return {
            user
        };
    }
});
</script>
<style lang="scss" scoped>
section {
    margin-top: 20px;
    display: flex;
    justify-content: center;
}
@media screen and (max-width: 600px) {
    section {
        display: flex;
        flex-direction: column;
    }
}
</style>
