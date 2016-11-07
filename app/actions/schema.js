import { Schema, arrayOf } from 'normalizr';

export const video = new Schema('videos');
export const arrayOfVideos = arrayOf(video);
