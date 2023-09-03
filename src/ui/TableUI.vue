<template>
    <div class="wrapper">
        <table>
            <thead>
                <tr>
                    <th v-for="(row, index) in data" :key="index">
                        <div class="data-section">
                            <img
                                src="../assets/display-icon.svg"
                                width="18"
                                height="18"
                            />
                            <span>{{ row.sectionName }}</span>
                        </div>
                        <div
                            class="edit-section"
                            v-if="index < data.length - 2"
                        >
                            <img src="../assets/pencil-icon.svg" alt="pencil" />
                            <span> מס׳ נקודות </span>
                        </div>
                    </th>
                    <th>
                        <div>ציון השיעור</div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, index) in data" :key="index">
                    <td>
                        <div></div>
                    </td>
                    <td>
                        <div></div>
                    </td>
                    <td>
                        <div class="document-row">
                            0
                            <div class="notification-dot" />
                        </div>
                    </td>
                    <td>
                        <div
                            :class="{ active: row.active }"
                            class="disabled display-block"
                        >
                            <img
                                v-if="row.active"
                                src="../assets/accept-icon.svg"
                                alt="accept"
                            />
                            <img
                                v-else
                                src="../assets/decline-icon.svg"
                                alt="decline"
                            />
                        </div>
                    </td>
                    <td>
                        <div
                            v-if="row.grade"
                            class="grade"
                            :class="toCalculateGrade(row?.grade)"
                        >
                            {{ row.grade.current }}/{{ row.grade.max }}
                        </div>
                        <div v-else class="absent">
                            <img src="../assets/minus-icon.svg" alt="minus" />
                        </div>
                    </td>
                    <td class="score">
                        {{ row.score }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script lang="ts">
import { Diary } from '@/types/Diary';
import { PropType, defineComponent } from 'vue';

export default defineComponent({
    props: {
        data: {
            type: Array as PropType<Array<Diary>>,
            required: true
        }
    },
    methods: {
        toCalculateGrade(grade?: { current?: number; max?: number }) {
            if (!grade?.current || !grade.max) return null;
            const percentage = grade?.max * (grade?.current / 100);
            console.log('percentage,', percentage);
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
thead {
    tr {
        th {
            background-color: #fff;
            padding: 20px 30px;
            .data-section {
                img {
                    border-radius: 50%;
                    background-color: #e0f2fe;
                    padding: 9px;
                }
                font-size: 14px;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .edit-section {
                display: flex;
                span {
                    font-weight: 400;
                    font-size: 12px;
                }
            }
        }
    }
}
tbody {
    tr {
        background-color: #fff;
        td {
            padding: 20px;
            .document-row {
                background-color: #e0f2fe;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 12px;
                color: #0093e5;
                position: relative;
                .notification-dot {
                    width: 9px;
                    height: 9px;
                    background-color: #0093e5;
                    top: 0;
                    left: 0;
                    position: absolute;
                }
            }
            .display-block {
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .disabled {
                background-color: #fff1f0;
            }
            .active {
                background-color: #dffcf0;
            }
            .grade {
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 12px;
                font-weight: 700;
            }
            .bad {
                background-color: #fff1f0;
                color: #be123c;
            }
            .normal {
                background-color: #fff7e6;
                color: #f59e0b;
            }
            .good {
                background-color: #dffcf0;
                color: #059669;
            }
            div {
                margin: auto;
                border-radius: 50%;
                background-color: #e4eaf2;
                width: 32px;
                height: 32px;
            }
        }
        .score {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 16px;
            font-weight: 700;
        }
    }
}
</style>
