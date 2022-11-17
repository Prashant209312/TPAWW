import React from 'react'
import {Button, Card, CardContent, Divider, Table, TableBody, TableCell, TableContainer,TableRow,Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function BodyComp() {
  return (
    <div>
        <Box backgroundColor='#e6e6e6'>
      <Card sx={{width:'80%',mx:'auto',mt:0}}>
        <CardContent>
          <Box sx={{display:'flex',justifyContent:'space-between'}}>
            <Stack direction='column'>
              <Typography variant='h4' sx={{fontWeight:600}}>Camping This Weekend</Typography>
              <Typography sx={{fontWeight:'700'}}>From Fri Nov 11 2022 to Sat Nov 12 2022</Typography>
            </Stack>
            
            <Stack direction='row' >
            <FilterAltIcon label='filter' sx={{height:'70px',color:'#00802b',m:0}}></FilterAltIcon>
              <Button>
                <Typography variant='h6' sx={{textDecoration:'none',color:'#00802b',textTransform:'none',fontWeight:'600'}}>Filters</Typography> 
                <ExpandMoreIcon color='inherit'></ExpandMoreIcon>
              </Button>       
            </Stack>
          </Box>
          <Divider sx={{mb:2}}/>
          <Box sx={{display:'flex',justifyContent:'space-between',backgroundColor:'#f2f2d9',p:1,flexWrap:'nowrap'}}>
            <Typography variant='h6' sx={{fontWeight:'600'}}>Sort By:</Typography>
            <Typography variant='h6' sx={{fontWeight:'600',color:'#00802b'}}>Name</Typography>
            <Typography variant='h6' sx={{fontWeight:'600'}}>Dist+(mi)</Typography>
            <Typography variant='h6' sx={{fontWeight:'600',color:'#00802b'}}>Lodging</Typography>
            <Typography variant='h6' sx={{fontWeight:'600',color:'#00802b'}}>RV/Trailer</Typography>
            <Typography variant='h6' sx={{fontWeight:'600',color:'#00802b'}}>Tent</Typography>
          </Box>
          <Box sx={{display:'flex',justifyContent:'space-between',backgroundColor:'#f2f2d9',p:1,mt:1}}>
            <Typography variant='h6' sx={{fontWeight:'600',mt:1}}>Campgrounds:1-10 of 87</Typography>
            <Stack sx={{display:'flex',justifyContent:'space-between'}} direction='row' >
              <Typography variant='h6' sx={{fontWeight:'600',m:1}}>Page</Typography>
              <Button sx={{color:'#000',display:'flex',justifyContent:'space-between',border:'1px solid black',my:1,width:50,height:35}}>
                <Typography variant='h6'>1</Typography>
                <UnfoldMoreIcon/>
              </Button>
              <Button disabled sx={{fontWeight:'600'}}><ArrowDropUpIcon/> Previous </Button>
              <Box sx={{mt:'10px',fontWeight:'600'}}>|</Box>
              <Button sx={{color:'#00802b',fontWeight:'600'}}>Next <ArrowDropDownIcon height={7}/></Button>
            </Stack>           
          </Box>
          <Box>
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">                
                <TableBody>
                  <TableRow>
                    <TableCell >
                      <Box >
                        <Typography variant='h6' sx={{fontSize:'20px',color:'#00802b',ml:3,fontWeight:'600',my:1}}>Abilene State Park</Typography>
                        <img   height="120" width="250" src='https://tpwd.texas.gov/state-parks/abilene/photo_gallery/abilene' alt ='logo'></img>
                      </Box>
                    </TableCell>
                    <TableCell >
                      <Typography variant='h6' sx={{fontSize:'20px',color:'#00802b',ml:4,fontWeight:'600'}}>Lodging</Typography>
                      <Typography variant='h6' sx={{fontSize:'20px',color:'#00802b',ml:4,fontWeight:'600',my:1}}>available</Typography>
                      <Button sx={{backgroundColor:'#00802b',color:'white',fontWeight:'600', width:'170px',pr:1,borderRadius:'0',textDecoration:'none',p:1}}>View Details</Button>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h6' sx={{fontSize:'20px',color:'#e60000',ml:5,fontWeight:'600'}}>RV/Trailer</Typography>
                      <Typography variant='h6' sx={{fontSize:'20px',color:'#e60000',ml:4,fontWeight:'600'}}>not available</Typography>
                      <Button sx={{backgroundColor:'#d9d9d9',color:'#000',fontWeight:'600', width:'170px',pr:1,borderRadius:'0'}}>Find NearBy Parks</Button>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h6' sx={{fontSize:'20px',color:'#e60000',ml:7,fontWeight:'600'}}>Tent</Typography>
                      <Typography variant='h6' sx={{fontSize:'20px',color:'#e60000',ml:3,fontWeight:'600'}}>not available</Typography>
                      <Button sx={{backgroundColor:'#d9d9d9',color:'#000',fontWeight:'600', width:'170px',pr:1,borderRadius:'0'}}>Find NearBy Parks</Button>
                    </TableCell>
                    
                  </TableRow>
                </TableBody>
                <TableBody>
                  <TableRow>
                    <TableCell >
                      <Typography variant='h6' sx={{fontSize:'20px',color:'#00802b',ml:3,fontWeight:'600',my:1}}>Abilene State Park</Typography>
                      <Box >
                        <img   height="120" width="250" src='https://i.pinimg.com/736x/a2/f0/09/a2f0092b3e05009bc5978a1d28b8fe8f--state-parks-atlanta.jpg' alt ='logo'></img>
                      </Box>
                    </TableCell>
                    <TableCell >
                      <Typography variant='h6' sx={{fontSize:'20px',ml:6,fontWeight:'600'}}>Lodging</Typography>
                      <Typography variant='h6' sx={{fontSize:'20px',ml:3,fontWeight:'600'}}>not applicable</Typography>
                      
                    </TableCell>
                    <TableCell>
                      <Typography variant='h6' sx={{fontSize:'20px',color:'#00802b',ml:5,fontWeight:'600'}}>RV/Trailer</Typography>
                      <Typography variant='h6' sx={{fontSize:'20px',color:'#00802b',ml:3,fontWeight:'600'}}>not available</Typography>
                      <Button sx={{backgroundColor:'#00802b',color:'white',fontWeight:'600', width:'170px',pr:1,borderRadius:'0',textDecoration:'none',p:1}}>View Details</Button>
                    
                    </TableCell>
                    <TableCell>
                      <Typography variant='h6' sx={{fontSize:'20px',color:'#00802b',ml:7,fontWeight:'600'}}>Tent</Typography>
                      <Typography variant='h6' sx={{fontSize:'20px',color:'#00802b',ml:3,fontWeight:'600'}}>not available</Typography>
                      <Button sx={{backgroundColor:'#00802b',color:'white',fontWeight:'600', width:'170px',pr:1,borderRadius:'0',textDecoration:'none',p:1}}>View Details</Button>
                    </TableCell>
                    
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          
        </CardContent>
      </Card>
    </Box>
    </div>
  )
}

export default BodyComp