
import { ShowtimeStorage } from "@/@custom-types/showtime";
import { Schema, model, models } from "mongoose";

const ShowtimeSchema = new Schema<ShowtimeStorage>({
    cinema: String,
    date: {
        type: Date,
    },
    id: String,
    language: String,
    link: String,
    time: String,
    title: String,
    teather: {
        name: String,
        code: String,
    },
}, {
    collection: 'showtimes',
});

export const ShowtimeModel = models.Showtime || model('Showtime', ShowtimeSchema);
