import ShowTimeFilter from "@/components/showtime-filter";
import { ReactNode } from "react";
import { getMovieByTitle } from "@/services/movies/movies.services";
import { readMovieTitle } from "@/utils/url";
import { getTeathersGroupByTeather } from "@/services/teather/teather.services";

interface MovieShowtimeParams {
    params: {
        title: string,
    },
    children: ReactNode,
}

const MovieShowtime = async ({
    children,
    params,
}: MovieShowtimeParams) => {
    const movie = await getMovieByTitle(readMovieTitle(params.title));
    const teatherList = await getTeathersGroupByTeather();

    return (
        <div className="flex flex-col md:flex-row md:items-start gap-4">
            <ShowTimeFilter
                title={movie.title}
                duration={movie.duration}
                image={movie.image}
                locationList={teatherList}
            />
            {children}
        </div>
    );
};

export default MovieShowtime;
