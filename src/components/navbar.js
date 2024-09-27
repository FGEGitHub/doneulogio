import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
import logo from "../Assets/logonav.png";

const pages = ['Datos', 'Estadisticas', 'Mapas'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const isLogo = {
    width: "60px",
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#1A393C' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* LOGO a la izquierda */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img style={isLogo} src={logo} alt="logo" />
          </Box>

          {/* Botones de navegación justo a la derecha del logo */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 2 }}>
            {pages.map((page, index) => (
              <Button
                key={page}
                component={Link}
                to={`/admin/${page.toLowerCase()}`}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Mantén el resto de los elementos alineados a la derecha */}
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Tooltip title="Facebook">
              <IconButton
                aria-label="facebook"
                href="https://www.facebook.com"
                target="_blank"
                sx={{
                  color: 'white',
                  backgroundColor: '#3b5998',
                  marginRight: '8px',
                  '&:hover': {
                    backgroundColor: '#2d4373',
                  },
                }}
              >
                <FacebookIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Instagram">
              <IconButton
                aria-label="instagram"
                href="https://www.instagram.com"
                target="_blank"
                sx={{
                  color: 'white',
                  backgroundColor: '#E4405F',
                  marginRight: '8px',
                  '&:hover': {
                    backgroundColor: '#C13584',
                  },
                }}
              >
                <InstagramIcon />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>

        {/* Menú móvil */}
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
            marginTop: '45px',
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
