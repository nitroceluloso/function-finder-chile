import { ShowtimeStorage } from "@/@custom-types/showtime";
import databaseConnect from "@/storage/connection";
import ShowtimeModel from "@/storage/models/showtime";
import { readMovieTitle } from "@/utils/url";

const getRange = (addDays : number) => {
    const base = new Date();
    const day = base.getDate() + addDays;
    const today = new Date(base.getFullYear(), base.getMonth(), day);
    const tomorrow = new Date(base.getFullYear(), base.getMonth(), day +1);

    return {
        rangeStart: today,
        rangeEnd: tomorrow,
    }
}

export const getShowtime = async (movieTitle: string, addDays = 0): Promise<ShowtimeStorage[]> => {
    await databaseConnect();
    const range = getRange(addDays);

    return await ShowtimeModel.find({
        title: readMovieTitle(movieTitle),
        date: {
            $gte: range.rangeStart,
            $lt: range.rangeEnd,
        },
    }).sort({time: 1});
}
