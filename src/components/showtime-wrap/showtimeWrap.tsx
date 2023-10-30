import { getShowtime } from "@/services/showtime/showtime.services";
import ShowtimeRow from "../showtime-row";
import { ShowtimeRowProps } from "../showtime-row/showtimeRow";
import styles from "./styles.module.css";
import { groupByTime } from "@/utils/showtime/group";
import { filterOldShowtimes } from "./showtimeWrap.helper";
import { ShowtimeSearchParams } from "@/@custom-types/showtime";

interface ShowtimeWrap {
    title: string;
    currentDay: number;
    searchParams: ShowtimeSearchParams;
}

const mapFn = (row: ShowtimeRowProps, idx: number) => <ShowtimeRow key={row.hour} {...row} />

const emptyMessage = (<p className="m-auto mt-12">no hay funciones para el dia seleccionado :(</p>);

export const ShowtimeWrap = async ({
    title,
    currentDay,
    searchParams,
}: ShowtimeWrap) => {
    const list = await getShowtime(title, searchParams, currentDay);
    const orderList = groupByTime(list);

    const isToday = currentDay === 0;
    const filteredList = filterOldShowtimes(orderList, isToday);

    const containerClass = `flex gap-x-5 overflow-x-auto overflow-y-auto ${styles.maxHeigth}`;
    const dinamicComponent = filteredList.length > 0 ? filteredList.map(mapFn) : emptyMessage;

    return (
    <div className={containerClass}>
        {dinamicComponent}
    </div>
    );
};
