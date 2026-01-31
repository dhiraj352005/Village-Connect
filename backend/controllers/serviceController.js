const Service = require('../models/Service');

// Mock data with real images for when MongoDB is not available
const mockServices = [
  {
    _id: '1',
    title: 'Organic Vegetable Farming',
    description: 'Fresh organic vegetables grown using sustainable farming methods. We provide seasonal vegetables including tomatoes, potatoes, onions, and leafy greens.',
    category: 'agriculture',
    provider: { _id: '101', firstName: 'Ravi', lastName: 'Sharma', email: 'ravi.farmer@email.com' },
    price: 150,
    duration: '3-4 hours harvest',
    location: { village: 'Green Valley', district: 'Organic District', state: 'Maharashtra' },
    images: ['https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=200&fit=crop'],
    isActive: true,
    createdAt: new Date('2024-01-15')
  },
  {
    _id: '2',
    title: 'Mathematics Tutoring',
    description: 'Expert mathematics tutoring for students from Class 6 to 12. Specialized in algebra, geometry, trigonometry, and calculus.',
    category: 'education',
    provider: { _id: '102', firstName: 'Priya', lastName: 'Verma', email: 'priya.teacher@email.com' },
    price: 500,
    duration: '1 hour per session',
    location: { village: 'Knowledge Hub', district: 'Education District', state: 'Karnataka' },
    images: ['https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=200&fit=crop'],
    isActive: true,
    createdAt: new Date('2024-01-20')
  },
  {
    _id: '3',
    title: 'Home Repair & Maintenance',
    description: 'Professional home repair services including plumbing, electrical work, painting, and general maintenance. 15+ years experience.',
    category: 'home-services',
    provider: { _id: '103', firstName: 'Suresh', lastName: 'Kumar', email: 'suresh.repair@email.com' },
    price: 800,
    duration: '2-6 hours depending on work',
    location: { village: 'Service Town', district: 'Repair District', state: 'Tamil Nadu' },
    images: ['https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=200&fit=crop'],
    isActive: true,
    createdAt: new Date('2024-01-25')
  },
  {
    _id: '4',
    title: 'Web Development Services',
    description: 'Modern web development using React, Node.js, and MongoDB. Create responsive websites and web applications for businesses.',
    category: 'technology',
    provider: { _id: '104', firstName: 'Ankit', lastName: 'Patel', email: 'ankit.dev@email.com' },
    price: 2500,
    duration: '1-4 weeks project based',
    location: { village: 'Tech City', district: 'Digital District', state: 'Gujarat' },
    images: ['https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop'],
    isActive: true,
    createdAt: new Date('2024-02-01')
  },
  {
    _id: '5',
    title: 'Mobile Clinic Services',
    description: 'Basic healthcare services including health checkups, vaccinations, and first aid. Certified healthcare professional.',
    category: 'healthcare',
    provider: { _id: '105', firstName: 'Dr. Meera', lastName: 'Singh', email: 'meera.health@email.com' },
    price: 300,
    duration: '30-45 minutes consultation',
    location: { village: 'Health Valley', district: 'Medical District', state: 'Punjab' },
    images: ['https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop'],
    isActive: true,
    createdAt: new Date('2024-02-05')
  },
  {
    _id: '6',
    title: 'Transportation Services',
    description: 'Reliable transportation for goods and passengers. Available for local and intercity travel with well-maintained vehicles.',
    category: 'transportation',
    provider: { _id: '106', firstName: 'Vikram', lastName: 'Singh', email: 'vikram.transport@email.com' },
    price: 12,
    duration: 'Per kilometer',
    location: { village: 'Transport Hub', district: 'Logistics District', state: 'Rajasthan' },
    images: ['https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=200&fit=crop'],
    isActive: true,
    createdAt: new Date('2024-02-10')
  },
  {
    _id: '7',
    title: 'House Construction',
    description: 'Complete house construction services from foundation to finishing. Experienced team with quality materials and modern techniques.',
    category: 'construction',
    provider: { _id: '107', firstName: 'Rajesh', lastName: 'Builder', email: 'rajesh.construction@email.com' },
    price: 1800,
    duration: 'Per square foot',
    location: { village: 'Builder Town', district: 'Construction District', state: 'Haryana' },
    images: ['https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=200&fit=crop'],
    isActive: true,
    createdAt: new Date('2024-02-15')
  },
  {
    _id: '8',
    title: 'Business Consultation',
    description: 'Expert business consultation for startups and small businesses. Help with business planning, marketing strategies, and growth.',
    category: 'business',
    provider: { _id: '108', firstName: 'Arjun', lastName: 'Consultant', email: 'arjun.business@email.com' },
    price: 1200,
    duration: '2 hours consultation',
    location: { village: 'Business Park', district: 'Commerce District', state: 'Maharashtra' },
    images: ['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop'],
    isActive: true,
    createdAt: new Date('2024-02-20')
  },
  {
    _id: '9',
    title: 'Organic Dairy Products',
    description: 'Fresh organic milk, curd, butter, and cheese from grass-fed cows. Daily delivery available in the local area.',
    category: 'agriculture',
    provider: { _id: '109', firstName: 'Gita', lastName: 'Dairy', email: 'gita.dairy@email.com' },
    price: 60,
    duration: 'Per liter',
    location: { village: 'Dairy Farm', district: 'Agricultural District', state: 'Uttar Pradesh' },
    images: ['https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=200&fit=crop'],
    isActive: true,
    createdAt: new Date('2024-02-25')
  },
  {
    _id: '10',
    title: 'Computer Training Classes',
    description: 'Basic computer training including MS Office, internet usage, and digital literacy for all age groups.',
    category: 'education',
    provider: { _id: '110', firstName: 'Neha', lastName: 'Tech', email: 'neha.computer@email.com' },
    price: 200,
    duration: '1 hour per class',
    location: { village: 'Digital Village', district: 'Tech District', state: 'Kerala' },
    images: ['https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop'],
    isActive: true,
    createdAt: new Date('2024-03-01')
  }
];

const getAllServices = async (req, res) => {
  try {
    // Try to get services from MongoDB
    const services = await Service.find({ isActive: true })
      .populate('provider', 'firstName lastName email')
      .sort({ createdAt: -1 });

    res.json({
      status: 'success',
      count: services.length,
      services
    });
  } catch (error) {
    console.log('MongoDB not available, using mock data');
    // Return mock data when MongoDB is not available
    res.json({
      status: 'success',
      count: mockServices.length,
      services: mockServices
    });
  }
};

const createService = async (req, res) => {
  try {
    const { title, description, category, price, duration, location, images } = req.body;
    
    const service = new Service({
      title,
      description,
      category,
      provider: req.user._id,
      price: price || 0,
      duration,
      location,
      images: images || []
    });

    await service.save();
    await service.populate('provider', 'firstName lastName email');

    res.status(201).json({
      message: 'Service created successfully',
      service
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id)
      .populate('provider', 'firstName lastName email phone address');

    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }

    res.json({ service });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const updateService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }

    // Check if user is the service provider
    if (service.provider.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to update this service' });
    }

    const updatedService = await Service.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).populate('provider', 'firstName lastName email');

    res.json({
      message: 'Service updated successfully',
      service: updatedService
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const deleteService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }

    // Check if user is the service provider
    if (service.provider.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to delete this service' });
    }

    await Service.findByIdAndUpdate(req.params.id, { isActive: false });

    res.json({ message: 'Service deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = {
  getAllServices,
  createService,
  getServiceById,
  updateService,
  deleteService
};
