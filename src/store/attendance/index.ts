import { GET_ATTENDANCE } from './types';
import { Attendance } from '@/types/Attendance';

interface AttendanceState {
    data: Attendance[];
}

const attendanceStore = {
    state: () => ({
        data: []
    }),
    mutations: {
        [GET_ATTENDANCE](state: AttendanceState, props: Attendance[]) {
            state.data = props;
        }
    },
    actions: {},
    getters: {}
};

export default attendanceStore;
