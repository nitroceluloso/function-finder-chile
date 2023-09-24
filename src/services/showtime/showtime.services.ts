import { ShowtimeStorage } from "@/@custom-types/showtime";
import ShowtimeModel from "@/storage/models/showtime";
import { readMovieTitle } from "@/utils/url";

export const getShowtime = async (movieTitle: string): Promise<ShowtimeStorage[]> => {
    const base = new Date();
    const today = new Date(base.getFullYear(), base.getMonth(), base.getDate());
    const tomorrow = new Date(base.getFullYear(), base.getMonth(), base.getDate() +1);
    return await ShowtimeModel.find({
        title: readMovieTitle(movieTitle),
        date: {
            $gte: today,
            $lt: tomorrow,
        },
    }).sort({time: 1});
}
