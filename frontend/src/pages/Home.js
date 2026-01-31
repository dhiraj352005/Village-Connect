import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  InputAdornment,
  MenuItem,
  Paper
} from '@mui/material';
import {
  Search as SearchIcon,
  LocationOn as LocationIcon
} from '@mui/icons-material';
import axios from 'axios';

const categories = [
  { label: 'All', value: '', icon: '🏠' },
  { label: 'Agriculture', value: 'agriculture', icon: '🌾' },
  { label: 'Construction', value: 'construction', icon: '🏗️' },
  { label: 'Education', value: 'education', icon: '📚' },
  { label: 'Healthcare', value: 'healthcare', icon: '🏥' },
  { label: 'Technology', value: 'technology', icon: '💻' },
  { label: 'Transportation', value: 'transportation', icon: '🚗' },
  { label: 'Home Services', value: 'home-services', icon: '🏡' },
  { label: 'Business', value: 'business', icon: '💼' }
];

function Home() {
  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/services');
      if (response.data.status === 'success') {
        setServices(response.data.services.slice(0, 6)); // Show only first 6 services
      }
    } catch (error) {
      console.error('Error fetching services:', error);
      // If backend is not available, show empty state
      setServices([]);
    }
  };

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
      <CardMedia
        component="img"
        height="200"
        image={service.images?.[0] || 'https://via.placeholder.com/400x200'}
        alt={service.title}
        sx={{ borderRadius: '12px 12px 0 0' }}
      />
      <CardContent sx={{ flexGrow: 1, p: 2 }}>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {service.provider?.firstName} {service.provider?.lastName}
        </Typography>
        <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: 600 }}>
          {service.title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <LocationIcon sx={{ fontSize: 16, color: 'text.secondary', mr: 0.5 }} />
          <Typography variant="body2" color="text.secondary">
            {service.location?.village}, {service.location?.district}
          </Typography>
        </Box>
        <Button 
          variant="contained" 
          fullWidth 
          sx={{ 
            borderRadius: 2,
            textTransform: 'none',
            fontWeight: 600,
            py: 1.5,
            mt: 2
          }}
        >
          Starting at ₹{service.price}
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ bgcolor: '#f8f9fa', minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box 
        sx={{ 
          bgcolor: 'white',
          pt: 0,
          pb: 4,
          position: 'relative',
          overflow: 'hidden',
          minHeight: '70vh'
        }}
      >
        {/* Animated Background */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(240, 147, 251, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(118, 75, 162, 0.4) 0%, transparent 50%)
            `,
            animation: 'float 25s ease-in-out infinite'
          },
          '@keyframes float': {
            '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
            '33%': { transform: 'translate(30px, -40px) scale(1.1)' },
            '66%': { transform: 'translate(-20px, 30px) scale(0.9)' }
          }
        }} />
        
        {/* Content overlay */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.8) 100%)',
          zIndex: 1
        }} />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, pt: 8 }}>
          <Typography 
            variant="h2" 
            component="h1" 
            sx={{ 
              textAlign: 'center',
              fontWeight: 700,
              color: '#333',
              mb: 2,
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}
          >
            Discover Amazing Services in
          </Typography>
          <Typography 
            variant="h2" 
            component="h1" 
            sx={{ 
              textAlign: 'center',
              fontWeight: 700,
              color: '#667eea',
              mb: 6,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Your Village
          </Typography>

          {/* Search Section */}
          <Paper 
            elevation={6}
            sx={{ 
              p: 3, 
              borderRadius: 4,
              maxWidth: 800,
              mx: 'auto',
              mb: 4,
              backdropFilter: 'blur(10px)',
              backgroundColor: 'rgba(255,255,255,0.95)'
            }}
          >
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={4}>
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
              <Grid item xs={12} md={6}>
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
                      {category.icon} {category.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} md={2}>
                <Button 
                  variant="contained" 
                  fullWidth 
                  size="large"
                  sx={{ 
                    borderRadius: 2,
                    py: 1.8,
                    fontWeight: 600,
                    textTransform: 'none'
                  }}
                >
                  Search
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>

      {/* Featured Services */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 700, color: '#333', mb: 4, textAlign: 'center' }}>
          Featured Services
        </Typography>
        
        <Grid container spacing={3}>
          {services.map((service) => (
            <Grid item xs={12} md={4} key={service._id}>
              <ServiceCard service={service} />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button 
            variant="outlined" 
            size="large"
            sx={{ 
              borderRadius: 3,
              px: 4,
              py: 1.5,
              textTransform: 'none',
              fontWeight: 600
            }}
          >
            View All Services
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Home;