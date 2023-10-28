import { ShowtimeSearchParams, ShowtimeStorage } from "@/@custom-types/showtime";
import databaseConnect from "@/storage/connection";
import ShowtimeModel from "@/storage/models/showtime";
import { readMovieTitle } from "@/utils/url";
import { getQueryFromParams } from "./helper";

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

export const getShowtime = async (
    movieTitle: string,
    searchParams: ShowtimeSearchParams,
    addDays = 0,
): Promise<ShowtimeStorage[]> => {
    await databaseConnect();
    const range = getRange(addDays);
    const paramsQuery = getQueryFromParams(searchParams);

    return await ShowtimeModel.find({
        title: readMovieTitle(movieTitle),
        date: {
            $gte: range.rangeStart,
            $lt: range.rangeEnd,
        },
        ...paramsQuery,
    }).sort({time: 1});
}
