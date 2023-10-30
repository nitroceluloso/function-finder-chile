import { Teather } from "@/@custom-types/teather";
import { Schema, model, models } from "mongoose";

const TeatherSchema = new Schema<Teather>({
    cinema: String,
    name: String,
    key: String,
    alias: String,
}, {
  collection: 'teathers',
});

export const TeatherModel = models.Teather || model('Teather', TeatherSchema);