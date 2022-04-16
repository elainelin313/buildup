import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from '@mui/styles';
import theme from './Theme.js';
import NavButton from './NavButton.js';
import BuildOutLogo from '../BuildoutLogo.svg';
import '../App.css';

function HomePage() {
    let navigate = useNavigate();
    async function goToCreateWorkoutPage() {
      navigate("/createworkoutpage");
    }

    return (
      <div className="Home">

          <div className="nav"> 
            <div className="buildouttext">
              <a>BuildOut</a>
            </div>
              <div className="navbuttons">
                login
              </div>
              <div className="navbuttons">
                signup
              </div>
          </div>

          <div className="hero">

            <div className="leftcolumn">
              <img src={BuildOutLogo} alt="BuildOut Logo" />
            </div>

            <div className="rightcolumn">
              <h1> workouts curated
                  <br></br>
                    just for you </h1>
                <p>design your perfect workout,
                  <br></br> 
                  with hundreds of different 
                  <br></br>
                  workout types and equipment
                </p>
                <div>
                <NavButton 
                    onClick={() => goToCreateWorkoutPage()}
                    variant="outlined"
                >
                    Get Started
                </NavButton>
                </div>
            </div>

          </div>

          
      </div>
    );
  }
  
  export default HomePage;