import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import BuildOutLogo from '../BuildoutLogo.svg';
import '../App.css';

function HomePage() {
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
                <div className="getstartedbutton">
                  <a>
                    Get started
                  </a>
                </div>
            </div>

          </div>

          <Button 
            onClick={() => goToCreateWorkoutPage()}
            variant="outlined"
          >
            Click me to go to CreateWorkoutPage
          </Button>
      </div>
    );
  }
  
  export default HomePage;