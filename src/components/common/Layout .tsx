import { Box, Container } from '@mui/material';

import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <Header />
      <Box sx={{ flexGrow: 1 }}>
        <Container
          maxWidth="xl"
          component="main"
          sx={{ p: 5, height: '100%' }}
        >
          {children}
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;