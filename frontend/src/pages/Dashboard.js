import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Card,
  Button,
  Avatar,
  Divider
} from '@mui/material';
import {
  Person as PersonIcon,
  Work as WorkIcon,
  Assignment as AssignmentIcon,
  ExitToApp as LogoutIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    
    if (!token || !userData) {
      navigate('/login');
      return;
    }
    
    setUser(JSON.parse(userData));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  if (!user) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h6" sx={{ textAlign: 'center' }}>
          Loading...
        </Typography>
      </Container>
    );
  }

  const stats = [
    { title: 'Active Services', count: '5', icon: <WorkIcon />, color: '#2196f3' },
    { title: 'Pending Requests', count: '3', icon: <AssignmentIcon />, color: '#ff9800' },
    { title: 'Completed Jobs', count: '12', icon: <PersonIcon />, color: '#4caf50' }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 700, color: '#333' }}>
          Dashboard
        </Typography>
        <Button
          variant="outlined"
          startIcon={<LogoutIcon />}
          onClick={handleLogout}
          sx={{ textTransform: 'none' }}
        >
          Logout
        </Button>
      </Box>

      {/* User Info */}
      <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Avatar sx={{ width: 64, height: 64, bgcolor: '#667eea', mr: 3 }}>
            {user.firstName?.[0]}{user.lastName?.[0]}
          </Avatar>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              {user.firstName} {user.lastName}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {user.email}
            </Typography>
            <Typography variant="body2" color="primary" sx={{ textTransform: 'capitalize', fontWeight: 500 }}>
              {user.role}
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Welcome to VillageConnect!</Typography>
          <Typography variant="body1" color="text.secondary">
            Manage your services, view requests, and connect with your community.
          </Typography>
        </Box>
      </Paper>

      {/* Stats */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card 
              sx={{ 
                p: 3, 
                borderRadius: 3,
                background: `linear-gradient(135deg, ${stat.color}20, ${stat.color}10)`,
                border: `1px solid ${stat.color}30`
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: stat.color }}>
                    {stat.count}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {stat.title}
                  </Typography>
                </Box>
                <Box sx={{ color: stat.color, opacity: 0.7 }}>
                  {stat.icon}
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Quick Actions */}
      <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
        <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
          Quick Actions
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Button
              variant="outlined"
              fullWidth
              sx={{ 
                py: 1.5, 
                textTransform: 'none',
                borderRadius: 2
              }}
            >
              Create Service
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button
              variant="outlined"
              fullWidth
              sx={{ 
                py: 1.5, 
                textTransform: 'none',
                borderRadius: 2
              }}
            >
              View Requests
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button
              variant="outlined"
              fullWidth
              sx={{ 
                py: 1.5, 
                textTransform: 'none',
                borderRadius: 2
              }}
            >
              Browse Services
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button
              variant="outlined"
              fullWidth
              sx={{ 
                py: 1.5, 
                textTransform: 'none',
                borderRadius: 2
              }}
            >
              Update Profile
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Dashboard;