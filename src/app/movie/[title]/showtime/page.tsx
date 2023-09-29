import ShowtimeWrap from "@/components/showtime-wrap";
import { getShowtime } from "@/services/showtime/showtime.services";
import { groupByTime } from "../helper";

interface MovieShowtimeParams {
    params: {
        title: string,
    },
}

const ShowtimePage = async ({
    params,
}: MovieShowtimeParams) => {
    const list = await getShowtime(params.title);
    const orderList = groupByTime(list);

    return (
        <ShowtimeWrap showtimeList={orderList} title={params.title} currentDay={0} />
    );
};

export default ShowtimePage;