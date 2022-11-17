import React from 'react'
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack';
import FlagIcon from '@mui/icons-material/Flag';
import Button from '@mui/material/Button'

function AppbarComp() {
  return (
    <div>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', backgroundColor: 'green' }} >
            <Stack direction='row' sx={{ ml: 25, my: 2 }}>
                <img src='https://th.bing.com/th/id/OIP.QUamwUDk7dysxZa_n68QMgAAAA?pid=ImgDet&rs=1' height={90} width={90} sx={{ marginLeft: '90px', m: 2 }} alt='imh' />
                <Typography variant="h5" sx={{ m: 1, fontWeight: "600", mt: 3 }}>Taxas State Parks</Typography>
            </Stack>
            <Stack spacing={9} mr={20}>
                <Stack direction='row' spacing={2} sx={{ color: '#fff' }}>
                    <FlagIcon />
                    <Typography sx={{ fontWeight: '500' }}>item:1</Typography>
                    <Typography sx={{ fontWeight: '500' }}>Check Out Now</Typography>
            </Stack>
            <Stack>
                <Button variant="contained" size="small" sx={{ fontWeight: '600', textTransform: 'none', backgroundColor: '#000', width: '180px' }}>
                 Sign In or Sign Up
                </Button>
            </Stack>
            </Stack>
        </Box>
        <Box sx={{ backgroundColor: '#000' }}>
            <Stack direction='row' spacing={2}  >
                <Button sx={{ fontSize: '17px', color: '#fff', ml: 4, my: 1, fontWeight: '700' }}>MAKE RESERVATIONS</Button>
                <Button sx={{ fontSize: '17px', color: '#fff', my: 1, fontWeight: '700' }}>CAMPING THIS WEEKEND</Button>
                <Button sx={{ fontSize: '17px', color: '#fff', my: 1, fontWeight: '700' }}>GIFT CARDS</Button>
                <Button sx={{ fontSize: '17px', color: '#fff', my: 1, fontWeight: '700' }}>ANNUAL PASSES AND STORE</Button>
                <Button sx={{ fontSize: '17px', color: '#fff', my: 1, fontWeight: '700' }}>DONATE</Button>
                <Button sx={{ fontSize: '17px', color: '#fff', my: 1, fontWeight: '700' }}>RESERVATION POLICIES</Button>
                <Button sx={{ fontSize: '17px', color: '#fff', my: 1, fontWeight: '700' }}>MY ACCOUNT</Button>
                
            </Stack>
        </Box>
    </div>
  )
}

export default AppbarComp