import mongoose, { Schema } from 'mongoose';

const SubmissionSchema = new Schema({
    userId: { type: String },
    courseId: { type: String },
    answers: [
        {
            questionIndex: {
                type: String
            },
             answer: {
                type: String
            }
        }
    ]
});

export default mongoose.model('submission', SubmissionSchema, 'submission');