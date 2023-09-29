import ShowTimeFilter from "@/components/showtime-filter";
import { ReactNode } from "react";
import { getMovieByTitle } from "@/services/movies/movies.services";

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
    const movie = await getMovieByTitle(params.title);
    return (
        <div className="flex flex-col md:flex-row md:items-start gap-4">
            <ShowTimeFilter title={movie.title} duration={movie.duration} />
            {children}
        </div>
    );
};

export default MovieShowtime;

