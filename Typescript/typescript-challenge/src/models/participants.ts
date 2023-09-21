import { Schema, model } from "mongoose";

const participantSchema = new Schema({});

const Participant = model('Participant', participantSchema);

export default Participant;
