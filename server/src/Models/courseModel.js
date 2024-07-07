import mongoose , {Schema} from 'mongoose';

const CourseSchema = new Schema({
  title: { type: String },
  description: { type: String},
  price: { type: Number },
  image:{ type: String}
});

export default mongoose.model('course', CourseSchema,'course');