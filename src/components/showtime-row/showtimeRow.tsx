import { ShowtimeStorage } from "@/@custom-types/showtime";
import { ShowtimeLink } from "../showtime-link/showtimeLink";

export interface ShowtimeRowProps {
    hour: number;
    showtimeList: any[];
}

const getMapFn = (minutes: number) => {
    const RenderShowtimeLink = (showtime: ShowtimeStorage, idx: number) =>
        (<ShowtimeLink
            key={idx}
            cinema={showtime.cinema}
            time={showtime.time}
            teather={showtime.teather.name}
            link={showtime.link}
            minutes={minutes}
        />);
    return RenderShowtimeLink;
};

export const ShowtimeRow = ({
    hour,
     showtimeList,
}: ShowtimeRowProps) => {
    const today = new Date();
    const now = today.getHours();
    const minutes = today.getMinutes();

    const isHidden = hour < now ? 'hidden' : '';
    const mapFn = getMapFn(minutes);

    return (
    <div className={`flex flex-col gap-3 w-24 md:w-36 shrink-0 ${isHidden}`}>
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
};
