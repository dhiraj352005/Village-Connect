import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  TextField,
  MenuItem,
  InputAdornment,
  Chip
} from '@mui/material';
import {
  Search as SearchIcon,
  LocationOn as LocationIcon
} from '@mui/icons-material';
import axios from 'axios';

const categories = [
  { label: 'All', value: '' },
  { label: 'Agriculture', value: 'agriculture' },
  { label: 'Construction', value: 'construction' },
  { label: 'Education', value: 'education' },
  { label: 'Healthcare', value: 'healthcare' },
  { label: 'Technology', value: 'technology' },
  { label: 'Transportation', value: 'transportation' },
  { label: 'Home Services', value: 'home-services' },
  { label: 'Business', value: 'business' }
];

const ServicesList = () => {
  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/services');
      if (response.data.status === 'success') {
        setServices(response.data.services);
      }
    } catch (error) {
      console.error('Error fetching services:', error);
      setServices([]);
    } finally {
      setLoading(false);
    }
  };

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const ServiceCard = ({ service }) => (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        borderRadius: 3,
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
        }
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="200"
          image={service.images?.[0] || 'https://via.placeholder.com/400x200'}
          alt={service.title}
        />
        <Chip
          label={service.category}
          size="small"
          sx={{
            position: 'absolute',
            top: 12,
            left: 12,
            bgcolor: '#2196f3',
            color: 'white',
            fontWeight: 600,
            textTransform: 'capitalize'
          }}
        />
      </Box>
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {service.provider?.firstName} {service.provider?.lastName}
        </Typography>
        <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
          {service.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {service.description}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <LocationIcon sx={{ fontSize: 16, color: 'text.secondary', mr: 0.5 }} />
          <Typography variant="body2" color="text.secondary">
            {service.location?.village}, {service.location?.district}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" color="primary" sx={{ fontWeight: 600 }}>
            ₹{service.price}
          </Typography>
          <Button 
            variant="contained" 
            size="small"
            sx={{ 
              borderRadius: 2,
              textTransform: 'none',
              fontWeight: 600
            }}
          >
            Contact
          </Button>
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 700, color: '#333', mb: 4, textAlign: 'center' }}>
        All Services
      </Typography>

      {/* Filters */}
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <TextField
              fullWidth
              placeholder="Search services..."
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="action" />
                  </InputAdornment>
                ),
              }}
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              select
              label="Categories"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              displayEmpty
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
            >
              {categories.map((category) => (
                <MenuItem key={category.value} value={category.value}>
                  {category.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </Box>

      {/* Services Grid */}
      {loading ? (
        <Typography variant="h6" sx={{ textAlign: 'center', py: 4 }}>
          Loading services...
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {filteredServices.map((service) => (
            <Grid item xs={12} md={6} lg={4} key={service._id}>
              <ServiceCard service={service} />
            </Grid>
          ))}
        </Grid>
      )}

      {!loading && filteredServices.length === 0 && (
        <Typography variant="h6" sx={{ textAlign: 'center', py: 4, color: 'text.secondary' }}>
          No services found matching your criteria.
        </Typography>
      )}
    </Container>
  );
};

export default ServicesList;