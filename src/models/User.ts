import mongoose from "mongoose";

export interface Users extends mongoose.Document {
  gmail_id: string;
  createdAt?: Date; // Optional because Mongoose adds these
  updatedAt?: Date;
}

/* usersSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema<Users>(
  {
    gmail_id: {
      /* The mailid of pet */

      type: String,
      required: [true, "Please provide your valid gmailId."],
      unique: true,
      index: true,
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

UserSchema.index({ gmail_id: 1 }, { unique: true });

export default mongoose.models.User ||
  mongoose.model<Users>("User", UserSchema);
