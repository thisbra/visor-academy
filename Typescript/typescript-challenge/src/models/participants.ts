import { Schema, model } from "mongoose";

const participantSchema = new Schema({
  username: {
    type: String,
    required: false,
  },
});

const Participant = model('Participant', participantSchema);

export default Participant;
