import ShowTimeFilter from "@/components/showtime-filter";
import ShowtimeWrap from "@/components/showtime-wrap";
import { getShowtime } from "@/services/showtime/showtime.services";
import { groupByTime } from "./helper";

interface MovieShowtimeParams {
    params: {
        title: string,
    }
}

const MovieShowtime = async ({
    params,
}: MovieShowtimeParams) => {
    const list = await getShowtime(params.title);
    const orderList = groupByTime(list);
    return (
        <div className="flex flex-col md:flex-row md:items-start gap-4">
            <ShowTimeFilter />
            <ShowtimeWrap showtimeList={orderList} />
        </div>
    );
};

export default MovieShowtime;
