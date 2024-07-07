import mongoose , {Schema} from 'mongoose';

const QuestionSchema = new Schema({
  question: { type: String },
  option1: { type: String},
  option1: { type: String},
  option1: { type: String},
  option1: { type: String},
  answer: { type: String},
});

export default mongoose.model('question', QuestionSchema,'question');