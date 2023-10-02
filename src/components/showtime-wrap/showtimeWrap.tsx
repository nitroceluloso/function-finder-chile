import { getShowtime } from "@/services/showtime/showtime.services";
import ShowtimeRow from "../showtime-row";
import { ShowtimeRowProps } from "../showtime-row/showtimeRow";
import styles from "./styles.module.css";
import { groupByTime } from "@/utils/showtime/group";

interface ShowtimeWrap {
    title: string;
    currentDay: number;
}

const mapFn = (row: ShowtimeRowProps, idx: number) => <ShowtimeRow key={row.hour} {...row} />

export const ShowtimeWrap = async ({
    title,
    currentDay,
}: ShowtimeWrap) => {
    const list = await getShowtime(title, currentDay);
    const orderList = groupByTime(list);

    return (
    <div className={`flex gap-x-5 overflow-x-auto overflow-y-auto ${styles.maxHeigth}`}>
        {orderList.map(mapFn)}
    </div>
    );
};
