import OptionButton from './OptionButton.js';
import NavButton from './NavButton.js';
import { useNavigate } from "react-router-dom";
import './CreateWorkoutPage.css';
import StyledTypography from './StyledTypography.js'

function CreateWorkoutPage() {
    let navigate = useNavigate();
    async function goToMyWorkoutsPage() {
      navigate("/myworkoutspage");
    }
    
    return (
      <div className="CreateWorkoutPage">
            <div className="header">
                <StyledTypography variant="h2" fontSize='40px' fontWeight='bold'>Hi Elaine,</StyledTypography>
                <StyledTypography variant="h2" fontSize='40px'>Let's create the perfect workout for you today!</StyledTypography>
            </div>
            <div className="selection-area">
                <div className="button-col">
                    <StyledTypography variant="h6">What do we want to work on?</StyledTypography>
                    <div className="button-group">
                        <OptionButton text="Option" />
                        <OptionButton text="Option" />
                        <OptionButton text="Option" />
                        <OptionButton text="Option" />
                        <OptionButton text="Option" />
                        <OptionButton text="Option" />
                        <OptionButton text="Option" />
                        <OptionButton text="Option" />
                    </div>
                    <div className="time-selection">
                        Time Selection
                    </div>
                    <StyledTypography variant="h6">How difficult do we want it to be?</StyledTypography>
                    <div className="button-group">
                        <OptionButton text="Option" />
                        <OptionButton text="Option" />
                        <OptionButton text="Option" />
                        <OptionButton text="Option" />
                        <OptionButton text="Option" />
                        <OptionButton text="Option" />
                        <OptionButton text="Option" />
                        <OptionButton text="Option" />
                    </div>
                </div>
                <div className="button-col">
                    <StyledTypography variant="h6">What equipments do we have?</StyledTypography>
                    <div className="button-group">
                        <OptionButton text="Option" />
                        <OptionButton text="Option" />
                        <OptionButton text="Option" />
                        <OptionButton text="Option" />
                        <OptionButton text="Option" />
                        <OptionButton text="Option" />
                        <OptionButton text="Option" />
                        <OptionButton text="Option" />
                        <OptionButton text="Option" />
                        <OptionButton text="Option" />
                    </div>
                    <StyledTypography variant="h6">Include stretches?</StyledTypography>
                    <div className="button-group">
                        <OptionButton text="Option" />
                        <OptionButton text="Option" />
                        <OptionButton text="Option" />
                        <OptionButton text="Option" />
                        <OptionButton text="Option" />
                        <OptionButton text="Option" />
                        <OptionButton text="Option" />
                        <OptionButton text="Option" />
                    </div>
                </div>
                <div className="nav-button-box">
                    <NavButton 
                        onClick={() => goToMyWorkoutsPage()}
                        variant="outlined"
                    >
                        Go to My Workouts
                    </NavButton>
                </div>
            </div>
          
      </div>
    );
  }
  
  export default CreateWorkoutPage;