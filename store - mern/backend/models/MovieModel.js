import mongoose from "mongoose";

const movieSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        director: {
            type: String,
            required: true,
        },
        releaseYear: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Movie = mongoose.model('Cat', { name: String });