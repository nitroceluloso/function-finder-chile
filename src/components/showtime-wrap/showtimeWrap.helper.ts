import { ShowtimeStorage } from "@/@custom-types/showtime";
import { groupByTimeReturn } from "@/utils/showtime/group";

const getIsAvailable = (limit: number) => (row: ShowtimeStorage): boolean => {
    const minutes = parseInt(row.time.split(':').at(1) as string);
    return minutes > limit;
}

export const filterOldShowtimes = (rowList: groupByTimeReturn[], isToday: boolean) => {
    if(!isToday) return rowList;

    const today = new Date();
    const cutHour = today.getHours();
    const limitMinute = today.getMinutes();
    const filterFn = getIsAvailable(limitMinute);

    const showtimeActiveList = rowList.filter(row => row.hour > cutHour);
    const minutesOldremovedList = showtimeActiveList.map(row => ({
        hour: row.hour,
        showtimeList: row.showtimeList.filter(filterFn)
    }));
    return minutesOldremovedList.filter(row => row.showtimeList.length > 0);
}