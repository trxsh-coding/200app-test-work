export interface Diary {
    sectionName: string;
    sectionIcon?: string;
    score: number;
    active: boolean;
    grade?: {
        max?: number;
        current?: number;
    };
}
