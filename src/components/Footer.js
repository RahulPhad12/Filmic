import {Box, Typography} from '@mui/material';

const Footer = _ => {
  return (
    <Box pb={4}>
      <hr />
      <Typography variant='h6' align='center'>Developed by Rahul</Typography>
      <Typography variant='h6' align='center'>
        <a href="https://github.com/RahulPhad12/Filmic" target="_blank" rel="noreferrer">
          Github Source Code
        </a>
      </Typography>
    </Box>
  )
}

export default Footer;