import { GET_USER } from './types';
import { User } from '@/types/User';

interface UserState {
    currentUser: User;
}

const userStore = {
    state: () => ({
        currentUser: null
    }),
    mutations: {
        [GET_USER](state: UserState, props: User) {
            state.currentUser = props;
        }
    },
    actions: {},
    getters: {}
};

export default userStore;
