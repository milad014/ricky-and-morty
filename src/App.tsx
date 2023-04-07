import { useState } from 'react'

import { Copyright } from '@mui/icons-material';
import { Container, Box, Typography } from '@mui/material';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Container maxWidth="sm">
      <Box className={'bg-red-400'} sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Material UI Vite.js example
        </Typography>
        <Copyright />
      </Box>
    </Container>
  )
}

export default App
