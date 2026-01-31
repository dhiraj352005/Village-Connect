import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import ServicesList from './pages/ServicesList';
import Dashboard from './pages/Dashboard';
import { CssBaseline, Box, Container, Paper, Typography, Button, Stack } from '@mui/material';

function App() {
  return (
    <Router>
      <CssBaseline />
      
      {/* Floating Navigation Bar */}
      <Box sx={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>
        <Container maxWidth="lg" sx={{ pt: 3 }}>
          <Paper 
            elevation={12}
            sx={{ 
              borderRadius: 6,
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden'
            }}
          >
            <Box sx={{ 
              px: 4, 
              py: 2, 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center' 
            }}>
              <Typography 
                variant="h5" 
                component={Link} 
                to="/" 
                sx={{ 
                  color: '#2c3e50', 
                  textDecoration: 'none', 
                  fontWeight: 800,
                  fontSize: '1.8rem',
                  background: 'linear-gradient(45deg, #667eea, #764ba2)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                VillageConnect
              </Typography>
              
              <Stack direction="row" spacing={1} alignItems="center">
                <Button 
                  component={Link} 
                  to="/services"
                  sx={{ 
                    color: '#2c3e50', 
                    textTransform: 'none',
                    fontWeight: 600,
                    px: 3,
                    py: 1,
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': { 
                      bgcolor: 'rgba(102, 126, 234, 0.1)',
                      transform: 'translateY(-1px)'
                    }
                  }}
                >
                  Services
                </Button>
                <Button 
                  component={Link} 
                  to="/login"
                  variant="outlined"
                  sx={{ 
                    color: '#667eea', 
                    borderColor: '#667eea',
                    textTransform: 'none',
                    fontWeight: 600,
                    px: 3,
                    py: 1,
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': { 
                      bgcolor: '#667eea',
                      color: 'white',
                      transform: 'translateY(-1px)',
                      boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)'
                    }
                  }}
                >
                  Login
                </Button>
                <Button 
                  component={Link} 
                  to="/register"
                  variant="contained"
                  sx={{ 
                    background: 'linear-gradient(45deg, #667eea, #764ba2)',
                    textTransform: 'none',
                    fontWeight: 600,
                    px: 3,
                    py: 1,
                    borderRadius: 3,
                    boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': { 
                      background: 'linear-gradient(45deg, #5a6fd8, #6a42a6)',
                      transform: 'translateY(-1px)',
                      boxShadow: '0 6px 16px rgba(102, 126, 234, 0.4)'
                    }
                  }}
                >
                  Sign Up
                </Button>
              </Stack>
            </Box>
          </Paper>
        </Container>
      </Box>
      
      {/* Page Content */}
      <Box sx={{ pt: '120px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/services" element={<ServicesList />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
