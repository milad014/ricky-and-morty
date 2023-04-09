import { AppBar, Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import logo from '@/assets/logo.png'
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';

const Header = () => {
    return (
        <AppBar position="relative" color="primary" title="Rick and Morty Characters">
            <Toolbar className="flex justify-between">
                <Box className="flex gap-4">
                    <Typography variant="h6" mx={4} color="inherit">
                        Rick and Morty
                    </Typography>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Typography variant="h6" color="white">
                            Characters
                        </Typography>
                    </Link>
                </Box>
                <Box>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <img src={logo} alt="Entekhab Group" width={32} height={32} />
                    </Link>
                </Box>

            </Toolbar>
        </AppBar>
    );
};

export default Header;