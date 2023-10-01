import ShowtimeWrap from "@/components/showtime-wrap";
import DayNavigator from "@/components/day-navigator";
import { Suspense } from "react";

interface MovieShowtimeParams {
    params: {
        title: string,
        day: string,
    },
    searchParams: Record<string, unknown>,
}

const ShowtimePage = async ({
    params,
    // searchParams,
}: MovieShowtimeParams) => {
    const { day = '0', title } = params;
    const currentDay = parseInt(day);

    return (
    <div className="flex flex-col grow overflow-x-auto flex gap-4 m-4">
        <DayNavigator
            title={params.title}
            currentDay={currentDay}
        />
        <Suspense fallback={<p>Loading functions...</p>}>
            <ShowtimeWrap
                title={params.title}
                currentDay={currentDay}
            />
        </Suspense>
    </div>
    );
};

export default ShowtimePage;