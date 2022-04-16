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
          sx={{ width: `calc(100% - 150px)`, ml: `100vh`}}
          style={{ background: '#9BB1FF' }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Welcome, Isabelle
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: '150px',
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: '150px',
              boxSizing: "border-box"
            }
          }}
          variant="permanent"
          anchor="left"
          style={{ background: '#9BB1FF' }}
        >
          <Toolbar />
          <List>
            {["", "", "", "Home", "Schedule", "Workouts", "Exercises", "Settings"].map(
              (text, index) => (
                <ListItem button key={text}>
                  
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
        </Box>
      </Box>
    );
  }
  
  export default ProfilePage;