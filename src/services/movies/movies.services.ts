import databaseConnect from "@/storage/connection";
import MovieModel from "@/storage/models/movies";
import { SortOrder } from "mongoose";

export const getMovieList = async () => {
    await databaseConnect();
    const sortFilter: Record<string, SortOrder> = {
        title: 'asc',
    }
    return await MovieModel.find().sort(sortFilter);
};