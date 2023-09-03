<template>
    <div class="wrapper">
        <TableUI :data="data" />
    </div>
</template>

<script lang="ts">
import diaryData from '@/mock/table.json';
import { GET_DIARY } from '@/store/diary/types';
import TableUI from '@/ui/TableUI.vue';
import { computed, defineComponent, onBeforeMount } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
    name: 'diaryComponent',
    setup() {
        const store = useStore();

        onBeforeMount(() => {
            store.commit(GET_DIARY, diaryData);
        });

        const diary = computed(() => store.state.diary.data);
        return {
            data: diary
        };
    },
    components: { TableUI }
});
</script>
<style lang="scss" scoped>
@media screen and (max-width: 600px) {
    .wrapper {
        width: 100%;
        overflow: scroll;
    }
}
</style>
