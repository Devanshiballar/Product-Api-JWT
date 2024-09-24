const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    product_name: {
      type: String,
      required: [true, "Please Enter Product Name"],
      trim: true,
    },
    product_description: {
      type: String,
      required: [true, "Please Enter Product Description"],
      trim: true,
    },
    product_price: {
      type: Number,
      required: [true, "Please Enter Product Price"],
      maxLength: [8, "Price cannot exceed 8 characters"],
      trim: true,
    },
    product_rating: {
      type: Number,
      default: 0,
    },

    product_image: [
       {
        public_id:{
            type: String,
            required:true,
            trim: true,
        },
        url:{
            type: String,
            required:true,
            trim: true,
        }
       }
    ],
    product_category: {
      type: String,
      required: [true, "Please Enter Product Category"],
      trim: true,
    },
    product_stock: {
      type:Number,
      required: [true, "Please Enter Product Stock"],
      maxLength: [4, "Price cannot exceed 4 characters"],
      default: 1,
    },
    numofReviews: {
      type: Number,
      default: 0,
    },
    product_reviews: [
      {
        name: {
          type: String,
          required: true,
        },
        rating: {
          type: Number,
          required: true,
        },
        Comment: {
          type: String,
          required: true,
        },
      },
    ],
    user:{
      type:mongoose.Schema.ObjectId,
      ref:"User",
      required: true,
    }
  },
  { timestamps: true }
);


module.exports = mongoose.model("Product", productSchema);
