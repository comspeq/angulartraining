export interface QuestionModel <T> {
    id: number;
    label: string;
    required: boolean;
    controlType: string;
    type: string;
    options: {key: string, value: string}[];
    response: string;
}