import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { Calendar }  from 'react-multi-date-picker';
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import BuildoutLogo from '../BuildoutLogo.svg';
import userPhoto from '../userPhoto.png';
import Barbell from '../Barbell.svg';
import Exercise from '../Exercise.svg';
import home from '../home.svg';
import schedule from '../schedule.svg';
import settings from '../settings.svg';
import ListItemIcon from "@mui/material/ListItemIcon";
import theme from './Theme.js';
import { styled } from '@mui/material/styles';

const StyledTypography = styled(Typography)(() => ({
  fontFamily: theme.typography.fontFamily,
}));

function ProfilePage() {
    let navigate = useNavigate();
    async function goToHomePage() {
      navigate("/homepage");
    }

    const [value, setValue] = useState(new Date())


    return (
      <Box sx={{ backgroundColor: '#efefff', display: "flex", height: '100vh'}}>
        <CssBaseline />
        
        <AppBar
          position="fixed"
          sx={{ width: `calc(100% - 200px)`, ml: `100vh`}}
          style={{ background: '#9BB1FF' }}
        >
          <Toolbar>
            <StyledTypography variant="h3" noWrap component="div">
              Welcome Back!
            </StyledTypography>
          </Toolbar>
        </AppBar>

        <Drawer
          sx={{
            width: '200px',
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: '200px',
              boxSizing: "border-box"
            }
          }}
          variant="permanent"
          anchor="left"
          style={{ background: '#9BB1FF' }}
        >
          <Toolbar />
          <img src={BuildoutLogo} alt="BuildOut Logo" height='150px' width='200px'/>
          <List>
            {["", "", "Home", "Schedule", "Workouts", "Exercises", "Settings"].map(
              (text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                  
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              )
            )}
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, bgcolor: "#efefe", p: 3 }}>
          <Toolbar />
          
          <div style={{
            display: 'flex',
            alignItems: 'left',
            justifyContent: 'left',
            position: 'fixed',
            right: '54px',
            bottom: '310px',
          }}>
            <StyledTypography variant="h6"> Your month in workouts </StyledTypography>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'left',
            justifyContent: 'left',
            position: 'fixed',
            right: '40px',
            bottom: '40px',
          }}>
              <Calendar
                backgroundColor = '#9BB1FF'
                value = {value}
                onChange = {setValue}
                mapDays={({ date }) => {
                let color
                if ([1, 3, 5, 6, 9, 10, 11, 12, 13, 15].includes(date.day)) color = "green"
                if ([2, 4, 7, 8, 14].includes(date.day)) color = "red"

                if (color) return { className: "highlight highlight-" + color }
               }}
              />
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            left: '218px',
            top: '73px',
          }}>
            <StyledTypography variant="h5"> Today</StyledTypography>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            left: '220px',
            top: '100px',
          }}>
            <StyledTypography variant="h6"> Saturday, April 16</StyledTypography>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            right: '100px',
            top: '100px',
          }}>
            <img src={userPhoto} alt="User Photo Logo" height='150px' width='150px'/>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            right: '123px',
            top: '255px',
          }}>
            <StyledTypography variant="h5"> Joe Bruin </StyledTypography>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            left: '250px',
            bottom: '40px',
          }}>
            <Box color="white" bgcolor="#9BB1FF" p={2} style={{borderRadius: '10px', width: '400px', height: '345px'}}>
              <StyledTypography variant="h6"> Friend Activity</StyledTypography>
            </Box>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            right: '322px',
            bottom: '40px',
          }}>
            <Box color="white" bgcolor="#9BB1FF" p={2} style={{borderRadius: '10px', width: '420px', height: '345px'}}>
              <StyledTypography variant="h6"> Messages </StyledTypography>
            </Box>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            left: '250px',
            top: '140px',
          }}>
            <Box color="black" bgcolor="white" p={2} style={{borderRadius: '10px', width: '500px', height: '210px'}}>
              <StyledTypography variant="h6"> Exercise Activity </StyledTypography>
            </Box>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            right: '123px',
            top: '300px',
          }}>
            <Box color="white" bgcolor="#9BB1FF" p={1.15} style={{borderRadius: '10px', width: '101px', height: '40px'}}>
              <StyledTypography> Edit Profile </StyledTypography>
            </Box>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            left: '267px',
            top: '185px',
          }}>
              <StyledTypography variant="h7" color="#808080"> avg: 33 min/day </StyledTypography>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            left: '280px',
            bottom: '270px',
          }}>
            <img src={userPhoto} alt="User Photo Logo" height='50px' width='50px'/>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            left: '280px',
            bottom: '175px',
          }}>
            <img src={userPhoto} alt="User Photo Logo" height='50px' width='50px'/>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            left: '280px',
            bottom: '85px',
          }}>
            <img src={userPhoto} alt="User Photo Logo" height='50px' width='50px'/>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            left: '340px',
            bottom: '290px',
          }}>
            <StyledTypography variant="h6"> Isabelle Choi </StyledTypography>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            left: '340px',
            bottom: '270px',
          }}>
            <StyledTypography variant="h7"> 45 minute cardio </StyledTypography>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            left: '340px',
            bottom: '195px',
          }}>
            <StyledTypography variant="h6"> Elaine Lin </StyledTypography>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            left: '340px',
            bottom: '175px',
          }}>
            <StyledTypography variant="h7"> Elaine's ab workout </StyledTypography>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            left: '340px',
            bottom: '105px',
          }}>
            <StyledTypography variant="h6"> Joyce Jeon </StyledTypography>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            left: '340px',
            bottom: '85px',
          }}>
            <StyledTypography variant="h7"> 15 min full body </StyledTypography>
          </div>


          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            right: '660px',
            bottom: '270px',
          }}>
            <img src={userPhoto} alt="User Photo Logo" height='50px' width='50px'/>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            right: '660px',
            bottom: '175px',
          }}>
            <img src={userPhoto} alt="User Photo Logo" height='50px' width='50px'/>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            right: '660px',
            bottom: '85px',
          }}>
            <img src={userPhoto} alt="User Photo Logo" height='50px' width='50px'/>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            right: '527px',
            bottom: '290px',
          }}>
            <StyledTypography variant="h6"> Kaylyn Phan </StyledTypography>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            right: '478px',
            bottom: '270px',
          }}>
            <StyledTypography variant="h7"> Great workout today! </StyledTypography>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            right: '518px',
            bottom: '195px',
          }}>
            <StyledTypography variant="h6"> Isabelle Choi </StyledTypography>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            right: '390px',
            bottom: '175px',
          }}>
            <StyledTypography variant="h7"> Good luck on your next workout! </StyledTypography>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            right: '535px',
            bottom: '105px',
          }}>
            <StyledTypography variant="h6"> Joyce Jeon </StyledTypography>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            right: '470px',
            bottom: '85px',
          }}>
            <StyledTypography variant="h7"> Have fun on your run!! </StyledTypography>
          </div>

        </Box>
      </Box>
    );
  }
  
  export default ProfilePage;