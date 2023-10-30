import { ShowtimeSearchParams } from "@/@custom-types/showtime";

export const getQueryFromParams = (searchParams: ShowtimeSearchParams) => {
    const keys = Object.keys(searchParams);
    const dictionaryMap = {
        cinema: (value: string) => ({cinema: {$in: value.split(',')}}),
        teather: (value: string) => ({'teather.code': {$in: value.split(',')}}),
        language: (language: string) => ({ language }),
    };
    return keys.reduce((acm, act) => {
        const value = searchParams[act as keyof typeof searchParams];
        if(value === '') return acm;

        return {
            ...acm,
            ...dictionaryMap[act as keyof typeof dictionaryMap](value!),
        }
    }, {});
}