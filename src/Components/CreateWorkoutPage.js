import OptionButton from './OptionButton.js';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

function CreateWorkoutPage() {
    let navigate = useNavigate();
    async function goToMyWorkoutsPage() {
      navigate("/myworkoutspage");
    }
    
    return (
      <div className="CreateWorkoutPage">
          <div className="header">

          </div>
          <div className="selection-area">
              <div className="button-col">
                <div className="button-group">
                    <Typography variant="h6">What do we want to work on?</Typography>
                </div>
                <div className="time-selection">

                </div>
                <div className="button-group">
                    <Typography variant="h6">How difficult do we want it to be?</Typography>
                </div>
              </div>
              <div className="button-col">
                <div className="button-group">
                    <Typography variant="h6">What equipments do we have?</Typography>
                </div>
                <div className="button-group">
                    <Typography variant="h6">Include stretches?</Typography>
                </div>
              </div>

          </div>
          <div className="nav-button-box">

          </div>
          <h3>CreateWorkoutPage</h3>
          <Button 
            onClick={() => goToMyWorkoutsPage()}
            variant="outlined"
          >
            Click me to go to MyWorkoutsPage
          </Button>
          <OptionButton text="Option" />
      </div>
    );
  }
  
  export default CreateWorkoutPage;