import { GET_DIARY } from './types';
import { Diary } from '@/types/Diary';

interface DiaryState {
    data: Diary[];
}

const diaryStore = {
    state: () => ({
        diary: []
    }),
    mutations: {
        [GET_DIARY](state: DiaryState, props: Diary[]) {
            state.data = props;
        }
    },
    actions: {},
    getters: {}
};

export default diaryStore;
