const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    des: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    serviceProvider: {
        type: String,
        required: true,
    },
    image:{
        type:String,
        required: true,
    }
});

const Service = mongoose.model("Service", serviceSchema);

const createService = {
    create: async (serviceData) => {
        const service = new Service(serviceData);
        await service.save();
    }
};

module.exports = { Service, createService };
