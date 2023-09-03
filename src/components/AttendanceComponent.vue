<template>
    <div class="wrapper">
        <div class="attendance-section">
            <div class="attendance-header">סטטוס שיעור</div>
            <div class="attendance-body">
                <div
                    v-for="(item, index) in data"
                    :key="index"
                    :class="toCalculateAttendance(item)"
                    class="attendance-item"
                >
                    {{ item.name }}
                    <div class="grade-item">
                        {{ item.min }} / {{ item.max }}
                    </div>
                </div>
            </div>
        </div>
        <div class="grade-section">
            <div class="grade-block">
                <div class="total-grade-block">96</div>
                <div class="total-grade-title">ממוצע ציונים</div>
            </div>
            <div class="score-block">
                <div class="score-block-description">ממוצע סבתיקונים</div>
                <div class="score-block-total">1.3</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import attendanceData from '@/mock/attendance.json';
import { GET_ATTENDANCE } from '@/store/attendance/types';
import { computed, defineComponent, onBeforeMount } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
    name: 'attendanceComponent',
    setup() {
        const store = useStore();

        onBeforeMount(() => {
            store.commit(GET_ATTENDANCE, attendanceData);
        });

        const data = computed(() => store.state.attendance.data);

        return {
            data
        };
    },
    methods: {
        toCalculateAttendance(item?: { min?: number; max?: number }) {
            if (!item?.min || !item.max) return null;
            const percentage = item?.max * (item?.min / 100);
            switch (true) {
                case percentage < 0.2:
                    return 'bad';
                case percentage > 0.2 && percentage < 0.6:
                    return 'normal';
                case percentage >= 0.6:
                    return 'good';
                default:
                    return null;
            }
        }
    }
});
</script>
<style lang="scss" scoped>
.wrapper {
    flex: 0.5;
    width: 390px;
    background-color: #fff;
    height: 294px;
    border: 1px solid #e4eaf2;
    margin-right: 29px;
    .attendance-header {
        text-align: right;
        font-size: 24px;
        font-weight: 300;
        padding: 13px 25px 10px 25px;
        border-bottom: 1px solid #e4eaf2;
    }
    .bad {
        background-color: #fff1f0;
    }
    .normal {
        background-color: #e0f2fe;
    }
    .good {
        background-color: #ecfdf5;
    }
    .attendance-body {
        padding: 35px 13px;
        .attendance-item {
            padding: 6px 12px;
            text-align: right;
            margin-bottom: 17px;
            display: flex;
            font-weight: 700;
            justify-content: right;
            align-items: center;
        }
        .grade-item {
            margin-left: 5px;
        }
    }
    .grade-section {
        display: flex;
        .grade-block {
            flex: 0.5;
            padding: 17.5px 51px 26px 60px;
            background-color: #fff;
            border: 1px solid #e4eaf2;
            margin-right: 22px;
            .total-grade-block {
                color: #0fa9ff;
                font-size: 48px;
                font-weight: bold;
                line-height: 55px;
            }
            .total-grade-title {
                font-size: 14px;
            }
        }
        .score-block {
            flex: 0.5;
            padding: 41px 29px 42px 39px;
            background-color: #fff;
            border: 1px solid #e4eaf2;
            display: flex;
            align-items: center;
            .score-block-description {
                font-weight: 400;
                font-size: 14px;
            }
            .score-block-total {
                font-weight: bold;
                font-size: 34px;
                line-height: 42px;
                margin-left: 8px;
            }
        }
    }
    @media screen and (max-width: 600px) {
        .wrapper {
            width: 100%;
        }
    }
}
</style>
