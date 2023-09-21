import Participant from "../models/participants";

async function createParticipant() {
  try {
    const participant = new Participant();
    await participant.save();
    return participant;
  } catch (error) {
    throw error;
  }
}

export default createParticipant;