export class AnswerModel {
    id: number = 0;
    response: {questionId: string, answer: string | null}[] = [];
}
