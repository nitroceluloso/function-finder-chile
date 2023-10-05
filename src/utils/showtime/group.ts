import { ShowtimeStorage } from "@/@custom-types/showtime";

export interface groupByTimeReturn {
    hour: number;
    showtimeList: ShowtimeStorage[];
}

export const groupByTime = (showtimeList: ShowtimeStorage[]): groupByTimeReturn[] => {
    const map = new Map();
    showtimeList.forEach((showtime) => {
        const time = parseInt(showtime.time.slice(0,2));
        const listByTime = map.has(time) ? map.get(time).concat(showtime) : [showtime];
        map.set(time, listByTime);
    });

    const rowList = Array.from(map);
    rowList.sort((a, b) => (a < b) ? -1 : 1);

    return rowList.map((el) => ({
        hour: el.at(0),
        showtimeList: el.at(1),
    }));
}