import attendanceStore from './attendance';
import diaryStore from './diary';
import userStore from './user';
import { createStore } from 'vuex';

export default createStore({
    modules: {
        user: userStore,
        diary: diaryStore,
        attendance: attendanceStore
    }
});
