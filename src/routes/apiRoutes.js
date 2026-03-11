const express = require('express');
const router = express.Router();

// Import controllers
const {
    getAllDishes,
    createDish,
    getDishById,
    updateDish,
    deleteDish,
} = require('../controllers/dishController');

const {
    createChef,
    getAllChefs,
} = require('../controllers/chefControllers');

// Import middleware
const { protect, authorize } = require('../middleware/authMiddleware');

// Create chef
router.post('/chefs', protect, authorize('admin'), createChef);

// Get all chefs
router.get('/chefs', protect, getAllChefs);


// 1. GET /dishes → Get all dishes
router.get('/dishes', getAllDishes);

// 2. POST /dishes → Create a dish 
router.post('/dishes', protect, authorize('admin', 'manager'), createDish);

// 3. GET /dishes/:id → Get a dish by ID
router.get('/dishes/:id', getDishById);

// 4. PUT /dishes/:id → Update dish 
router.put('/dishes/:id', protect, authorize('admin', 'manager'), updateDish);

// 5. DELETE /dishes/:id → Delete dish 
router.delete('/dishes/:id', protect, authorize('admin'), deleteDish);


module.exports = router;