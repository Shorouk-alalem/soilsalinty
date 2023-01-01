import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Appbar from './Appbar';
import img1 from './TDSvsTemp.png';
import img2 from './Temp.png';
import img3 from './TDS.png';
import img4 from './regression.png';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Graphs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} >
    <Appbar />
      <h1 align="center" style={{color:"#191C4D"}}>Soil Salinty Visual Data</h1>
      <h3 align="center" style={{color:"red"}}>(Please select a graph)</h3>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Relation between temperature and TDS" {...a11yProps(0)} />
          <Tab label="Temperature Data" {...a11yProps(1)} />
          <Tab label="TDS Data" {...a11yProps(2)} />
          <Tab label="Regression Line" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} >
        <img src={img1} alt="graph" style={{marginLeft:"25rem"}}></img>
        <p style={{marginLeft:"18rem"}}>This graph represents the relation between the temperature and TDS using the collected data.</p>
      </TabPanel>
      <TabPanel value={value} index={1} >
        <img src={img2}  alt="graph" style={{marginLeft:"25rem"}}></img>
        <p style={{marginLeft:"18rem"}}>This graph represents the mean and standard deviation of the temperature collected data.</p>
      </TabPanel>
      <TabPanel value={value} index={2} >
        <img src={img3}  alt="graph" style={{marginLeft:"25rem"}}></img>
        <p style={{marginLeft:"18rem"}}>This graph represents the mean and standard deviation of the TDS collected data.</p>
      </TabPanel>
      <TabPanel value={value} index={3} >
        <img src={img4}  alt="graph" style={{marginLeft:"25rem"}}></img>
        <p style={{marginLeft:"18rem"}}>This graph represents the Regression Line of the temperature and TDS collected data.</p>
      </TabPanel>
    </Box>
  );
}