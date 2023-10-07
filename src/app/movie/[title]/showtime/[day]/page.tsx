import ShowtimeWrap from "@/components/showtime-wrap";
import DayNavigator from "@/components/day-navigator";
import { Suspense } from "react";
import { Spinner } from "@/components/spinner/spinner";

interface MovieShowtimeParams {
    params: {
        title: string,
        day: string,
    },
    searchParams: Record<string, unknown>,
}

const ShowtimePage = async ({
    params,
}: MovieShowtimeParams) => {
    const { day = '0', title } = params;
    const currentDay = parseInt(day);

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
            />
        </Suspense>
    </div>
    );
};

export default ShowtimePage;