import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

function MyWorkoutsPage() {
    let navigate = useNavigate();
    async function goToActiveWorkoutPage() {
      navigate("/activeworkoutpage");
    }

    return (
      <div className="MyWorkoutsPage">
          <h3>MyWorkoutsPage</h3>
          <Button 
            onClick={() => goToActiveWorkoutPage()}
            variant="outlined"
          >
            Click me to go to ActiveWorkoutPage
          </Button>
      </div>
    );
  }
  
  export default MyWorkoutsPage;