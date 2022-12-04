export interface IPoll {
    formId: string,
    groupId: string
}

export interface IPollDetails {
    id:        string;
    questions: IQuestion[];
}

export interface IQuestion {
    data:       IQuestionData[];
    question:   string;
    total:      number;
}

export interface IQuestionData {
    result: string;
    count:  number;
}
