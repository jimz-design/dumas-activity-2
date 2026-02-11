const Chef = require('../models/chefModels');

// POST /chefs
const createChef = async (req, res) => {
    try {
        const { name, specialty, experience } = req.body;

        const chef = await Chef.create({
            name,
            specialty,
            experience,
        });

        res.status(201).json(chef); 
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllChefs = async (req, res) => {
    try {
        const chefs = await Chef.find();
        res.status(200).json(chefs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createChef,
    getAllChefs,
};
