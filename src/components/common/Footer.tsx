import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            py: 2,
            display: 'flex',
            justifyContent: 'center',
        }}>
            <Typography>
                Copyright © 2023 Entekhab Group. All rights reserved.
            </Typography>
        </Box>
    );
};

export default Footer;