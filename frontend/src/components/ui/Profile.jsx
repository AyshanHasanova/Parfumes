import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  Grid,
  Avatar,
  Box,
  Divider,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Chip,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';

// Yaşıl rəng palitrası
const greenPalette = {
  main: '#4CAF50',
  light: '#E8F5E9', // Çox açıq yaşıl fon üçün
  dark: '#2E7D32',
  contrastText: '#fff',
};

// Nümunə istifadəçi məlumatları
const user = {
  name: "Arzu Abbasova",
  email: "arzu@gmail.com",
  avatarUrl: "https://i.pinimg.com/1200x/33/4b/fd/334bfd4ee7176b161425d9b868740bdb.jpg",
  addresses: [
    "Azərbaycan, Bakı şəhəri, Nizami küçəsi 15",
    "Azərbaycan, Gəncə şəhəri, Atatürk prospekti 22",
  ],
  orders: [
    { id: 1, date: "2025-08-01", total: "150.00 AZN", status: "Tamamlanıb" },
    { id: 2, date: "2025-07-25", total: "55.50 AZN", status: "Göndərilir" },
    { id: 3, date: "2025-07-10", total: "240.20 AZN", status: "Tamamlanıb" },
  ],
};

// Tabs üçün panel komponenti
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const Profile = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', // Ekranın tam hündürlüyünü əhatə etsin
        bgcolor: greenPalette.light, // Açıq yaşıl arxa fon
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={6}
          sx={{
            p: 4,
            borderRadius: 4,
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Avatar
              alt={user.name}
              src={user.avatarUrl}
              sx={{
                width: 96,
                height: 96,
                mr: 3,
                border: `4px solid ${greenPalette.dark}`,
              }}
            />
            <Box>
              <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', color: greenPalette.dark }}>
                {user.name}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: greenPalette.main }}>
                {user.email}
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 3, bgcolor: greenPalette.light }} />

          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="Profil bölmələri"
              textColor="inherit"
              TabIndicatorProps={{
                style: { backgroundColor: greenPalette.dark }
              }}
            >
              <Tab icon={<PersonIcon />} label="Şəxsi Məlumatlar" sx={{ color: greenPalette.main }} />
              <Tab icon={<ShoppingCartIcon />} label="Sifarişlər" sx={{ color: greenPalette.main }} />
              <Tab icon={<LocationOnIcon />} label="Ünvanlar" sx={{ color: greenPalette.main }} />
            </Tabs>
          </Box>

          {/* Tab Məzmunları */}
          <TabPanel value={value} index={0}>
            <Typography variant="body1" sx={{ mb: 1 }}><span style={{ fontWeight: 'bold' }}>Ad:</span> {user.name}</Typography>
            <Typography variant="body1"><span style={{ fontWeight: 'bold' }}>Email:</span> {user.email}</Typography>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <List>
              {user.orders.map((order) => (
                <ListItem key={order.id} divider>
                  <ListItemText
                    primary={`Sifariş #${order.id}`}
                    secondary={`Tarix: ${order.date}, Ümumi: ${order.total}`}
                  />
                  <Chip
                    label={order.status}
                    color={order.status === "Tamamlanıb" ? "success" : "warning"}
                  />
                </ListItem>
              ))}
            </List>
          </TabPanel>

          <TabPanel value={value} index={2}>
            <List>
              {user.addresses.map((address, index) => (
                <ListItem key={index} divider>
                  <ListItemIcon><LocationOnIcon sx={{ color: greenPalette.main }} /></ListItemIcon>
                  <ListItemText primary={address} />
                </ListItem>
              ))}
            </List>
          </TabPanel>
        </Paper>
      </Container>
    </Box>
  );
};

export default Profile;






