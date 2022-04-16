import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

function CreateWorkoutPage() {
    let navigate = useNavigate();
    async function goToMyWorkoutsPage() {
      navigate("/myworkoutspage");
    }
    
    return (
      <div className="CreateWorkoutPage">
          <h3>CreateWorkoutPage</h3>
          <Button 
            onClick={() => goToMyWorkoutsPage()}
            variant="outlined"
          >
            Click me to go to MyWorkoutsPage
          </Button>
      </div>
    );
  }
  
  export default CreateWorkoutPage;