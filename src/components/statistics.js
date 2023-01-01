import React from 'react'
import Appbar from './Appbar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import TimelineIcon from '@mui/icons-material/Timeline';
import {Link} from 'react-router-dom';
function Statistics() {
    //Function to Calculate standard deviation of list of numbers 
    const standardDeviation = (arr, usePopulation = false) => {
        const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;
        return Math.sqrt(
          arr
            .reduce((acc, val) => acc.concat((val - mean) ** 2), [])
            .reduce((acc, val) => acc + val, 0) /
            (arr.length - (usePopulation ? 0 : 1))
        );
      };
    // Measured data of temperature and TDS
    let temperature_TDS_data=[[22.1,339],[27,392],[32.3,435],[37.8,488],[43,538],[48.1,606],[52.6,663],[57,708],[62.5,759],[68,802],[74,832],[79,883],[81.9,916]]
    let collected_data=temperature_TDS_data;
    let temp_data=[];
    let tds_data=[];
    temperature_TDS_data.sort();
    for (let i=0;i<temperature_TDS_data.length;i++){
        temp_data.push(temperature_TDS_data[i][0]);
        tds_data.push(temperature_TDS_data[i][1]);
    }
    // Calculating standard deviation and mean of temperature and TDS data 
    let temp_std=standardDeviation(temp_data) ;
    let tds_std=standardDeviation(tds_data) ;
    let temp_mean = temp_data.reduce((a, b) => a + b, 0) / temp_data.length;
    let tds_mean = tds_data.reduce((a, b) => a + b, 0) / tds_data.length;
    
    //Calculating corelation coeffecient
    const calculateCorrelation = require("calculate-correlation");
    const correlation = calculateCorrelation(temp_data, tds_data);
    //function for item 
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

  return (
    <Box sx={{ flexGrow: 1 }}>
    <Appbar/>
    <h1 align="center" style={{color:"#191C4D"}}>Soil Salinty Data Analysis</h1>
    <Grid container spacing={2}>
      <Grid item xs={4} >
      <h3 align="center" style={{color:"red"}}>Statistics for collected data</h3>
        <Item>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 400 }} aria-label="simple table">
                    <TableBody>
                        <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell align="center"><b>Mean of temperatur data </b></TableCell>
                            <TableCell align="center">{temp_mean}</TableCell>
                        </TableRow>
                        <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell align="center"><b>Standard Deviation of temperatur data</b></TableCell>
                            <TableCell align="center">{temp_std}</TableCell>
                        </TableRow>
                        <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell align="center"><b>Mean of TDS data</b></TableCell>
                            <TableCell align="center">{tds_mean}</TableCell>
                        </TableRow>
                        <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell align="center"><b>Standard Deviation of TDS data</b></TableCell>
                            <TableCell align="center">{tds_std}</TableCell>
                        </TableRow>
                        <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell align="center"><b>Correlation Coeffecient</b></TableCell>
                            <TableCell align="center">{correlation}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Item>
        <Item><Link to="/graphs" style={{textDecoration:"none",color:'white'}}><Button variant="contained" ><EqualizerIcon/><TimelineIcon/>  View Visual Data   </Button></Link></Item>
      </Grid>
      <Grid item xs={8}>
      <h3 align="center" style={{color:"black"}}>Data collected from the sensors</h3>
        <Item>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="center"><b>ID (index)</b> </TableCell>
                        <TableCell align="center"><b>Temperature</b> </TableCell>
                        <TableCell align="center"><b>TDS</b></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {collected_data.map((data) => (
                        <TableRow
                        key={collected_data.indexOf(data)}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell align="center" >{collected_data.indexOf(data)}</TableCell>
                        <TableCell align="center">{data[0]}</TableCell>
                        <TableCell align="center">{data[1]}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Item>
      </Grid>
    </Grid>
  </Box>


  )
}

export default Statistics




