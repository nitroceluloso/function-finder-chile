export interface ShowtimeStorage {
    cinema: string;
    date: Date;
    id: string;
    language: string;
    link: string;
    time: string;
    title: string;
    teather: {
        name: string;
        code: string;
    };
}

export interface ShowtimeSearchParams {
    chain?: string;
    teather?: string;
    language?: string;
}