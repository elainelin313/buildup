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
            <Typography variant="h3" noWrap component="div">
              Welcome Back!
            </Typography>
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
            right: '65px',
            bottom: '300px',
          }}>
            <h3> Your month in workouts </h3>
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
            left: '220px',
            top: '60px',
          }}>
            <h3> Today</h3>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            left: '220px',
            top: '82px',
          }}>
            <h4> Saturday, April 16</h4>
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
            right: '130px',
            top: '250px',
          }}>
            <h3> Joe Bruin </h3>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            left: '250px',
            bottom: '40px',
          }}>
            <Box color="white" bgcolor="#9BB1FF" p={20} style={{borderRadius: '10px'}}>
              Friend Activity
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
            <Box color="white" bgcolor="#9BB1FF" p={20} style={{borderRadius: '10px'}}>
              Messages
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
            <Box color="white" bgcolor="white" p={5} style={{borderRadius: '10px', width: '500px', height: '210px'}}>
              
            </Box>
          </div>

        </Box>
      </Box>
    );
  }
  
  export default ProfilePage;