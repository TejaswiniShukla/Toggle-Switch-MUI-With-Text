import { Box, Button, FormControlLabel, Typography,  } from "@mui/material";
import "./App.css";
import { useState } from "react";
import styled from "@emotion/styled";
import Switch, { SwitchProps } from '@mui/material/Switch';
import { grey } from "@mui/material/colors";

const CustomizeSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 56,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(29px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#ABC465',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#ABC465',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
       
           "grey",
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity:  0.3,
    },
    '&:not(.Mui-checked) .MuiSwitch-thumb': {
      color: 'red',
    },
    '&.Mui-checked .MuiSwitch-thumb': {
      
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor:  'grey',
    opacity: 1,
    '&:before, &:after': {
      display: 'inline-block',
      position: 'absolute',
      color: 'black',
      textAlign: 'center',
      fontSize:"12px"
    },
    '&:before': {
      content: '"in"',
      left: 5,
      top:2,
      textAlign:'left'
     
    },
    '&:after': {
      content: '"out"',
      right: 3.3,
      top:5,
      fontSize:'10px',
      textAlign:'right'
    },

  },
}));

function App() {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <div className="App">
      <div className="header">
        <p>MUI Toggle Switch Feature </p>
      </div>
      <div className="page-header">
        <Button variant="contained" color="success" sx={{padding:'15px'}}>
       
          <FormControlLabel
        label=   {checked ? 'Available' : 'Not Available'}
   
      control={
        <CustomizeSwitch
      
          checked={checked}
          onChange={handleChange}
       
        />
      }
      
    />
  
        </Button>
      </div>
      <div className="box">
      { checked && <Box sx={{width:"300px",height:'300px',backgroundColor:'white',borderRadius:'30px',color:'black',textAlign:'center' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Typography>
                   <b> Welcome The In-Out Text Toggle Switch Session</b>
             </Typography>
        </Box>}
      </div>
    </div>
  );
}

export default App;
