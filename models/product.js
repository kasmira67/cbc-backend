import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },

    altNames: {
        type: [String],
        default: []
    },

    price: {
        type: Number,
        required: true

    },
    labeledPrice: {
        type: Number,

    },
    description: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        required: true,
        default: ["https://rhiannonbosse.com/wp-content/uploads/2020/03/RhisBeautyFaves1.jpg"]
    },
    stock: {
        type: Number,
        required: true
    },
})

const Product = mongoose.model("products", productSchema)
export default Product;