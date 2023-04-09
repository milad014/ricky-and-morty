import { AppBar, Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import logo from '@/assets/logo.png'

const Header = () => {
    return (
        <AppBar position="relative" color="primary" title="Rick and Morty Characters">
            <Toolbar>
                <img src={logo} alt="Entekhab Group" width={32} height={32} />
                <Typography variant="h6" mx={4} color="inherit">
                    Rick and Morty Characters
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;