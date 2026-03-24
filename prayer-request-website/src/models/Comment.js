const mongoose = require('mongoose');

const commentsSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'A comment must belong to a author'],
    },
    prayer_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Prayer',
      required: [true, 'A comment must belong to a prayer post'],
    },
    content: {
      type: String,
      required: [true, 'Comment text cannot be empty'],
      trim: true,
      maxlength: [1000, 'Comments cannot exceed 1000 characters'],
    },
  },
  {
    timestamps: true,
  }
);

export const Comment =
  mongoose.models.Comment || mongoose.model('Comment', commentsSchema);
