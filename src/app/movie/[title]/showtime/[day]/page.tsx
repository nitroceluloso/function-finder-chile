import ShowtimeWrap from "@/components/showtime-wrap";
import DayNavigator from "@/components/day-navigator";
import { Suspense } from "react";
import { Spinner } from "@/components/spinner/spinner";
import { ShowtimeSearchParams } from "@/@custom-types/showtime";

interface MovieShowtimeParams {
    params: {
        title: string,
        day: string,
    },
    searchParams: ShowtimeSearchParams;
}

const ShowtimePage = async ({
    params,
    searchParams,
}: MovieShowtimeParams) => {
    const { day = '0', title } = params;
    const currentDay = parseInt(day);
    console.log(searchParams)

    return (
    <div className="flex flex-col grow overflow-x-auto flex gap-4 m-4">
        <DayNavigator
            title={title}
            currentDay={currentDay}
        />
        <Suspense fallback={<Spinner />}>
            <ShowtimeWrap
                title={title}
                currentDay={currentDay}
                searchParams={searchParams}
            />
        </Suspense>
    </div>
    );
};

export default ShowtimePage;