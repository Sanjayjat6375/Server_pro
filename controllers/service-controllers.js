const { Service, createService } = require("../modules/service-module");

// Controller to fetch all services
const getService = async (req, res) => {
    try {
        const services = await Service.find({});
        return res.status(200).json(services);
    } catch (error) {
        console.error('Error fetching services:', error);
        return res.status(500).json({ message: "Error fetching services" });
    }
};

// Controller to create a new service
const postService = async (req, res) => {
    try {
        const response = req.body;
        console.log(response);

        await createService.create(response);

        return res.status(200).json({ message: "Service sent successfully" });
    } catch (error) {
        console.error('Error sending service:', error);

        return res.status(500).json({ message: "Service not sent" });
    }
};

module.exports = { getService, postService };
