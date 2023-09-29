import { useSearchParams } from 'next/navigation'
import ShowtimeWrap from "@/components/showtime-wrap";
import { getShowtime } from "@/services/showtime/showtime.services";
import { groupByTime } from "../../helper";

interface MovieShowtimeParams {
    params: {
        title: string,
        day: string,
    },
    searchParams: Record<string, unknown>,
}

const ShowtimePage = async ({
    params,
    searchParams
}: MovieShowtimeParams) => {
    const { day = '0', title } = params;
    const currentDay = parseInt(day);
    const list = await getShowtime(title, currentDay);
    const orderList = groupByTime(list);

    return (
        <ShowtimeWrap showtimeList={orderList} title={params.title} currentDay={currentDay} />
    );
};

export default ShowtimePage;