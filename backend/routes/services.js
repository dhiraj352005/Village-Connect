const express = require('express');
const { 
  getAllServices, 
  createService, 
  getServiceById, 
  updateService, 
  deleteService 
} = require('../controllers/serviceController');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', getAllServices);
router.post('/', auth, createService);
router.get('/:id', getServiceById);
router.put('/:id', auth, updateService);
router.delete('/:id', auth, deleteService);

module.exports = router;
