import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: [2, "Must be at least 2 characters long"],
      maxLength: [32, "Must be at most 32 characters long"],
      // unique: true,
      // lowercase: true,
    },
    slug: {
      type: String,
      //   required: true,
      unique: true,
      lowercase: true,
      index: true,
    },
  },
  { timestamps: true }
);

const Category =
  mongoose.models.Category || mongoose.model("Category", categorySchema);

export default Category;
