import { ShowtimeLink } from "../showtime-link/showtimeLink";

export interface ShowtimeRowProps {
    hour: number;
    showtimeList: any[];
}

const mapFn = (showtime: any, idx: number) =>
    (<ShowtimeLink
        key={idx}
        cinema={showtime.cinema}
        time={showtime.time}
        teather={showtime.teather.name}
        endTime=""
    />);

export const ShowtimeRow = ({
    hour,
     showtimeList,
}: ShowtimeRowProps) => (
    <div className="flex flex-col gap-3 w-24 md:w-36 shrink-0">
        <div>
            <h4 className="text-center font-bold">
                {hour}
            </h4>
        </div>
        {
            showtimeList.map(mapFn)
        }
    </div>
);
