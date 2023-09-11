import databaseConnect from "@/storage/connection";
import MovieModel from "@/storage/models/movies";

export const getMovieList = async () => {
    await databaseConnect();
    return await MovieModel.find();
};