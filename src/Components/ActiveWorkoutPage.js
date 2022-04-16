import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

function ActiveWorkoutPage() {
    let navigate = useNavigate();
    async function goToProfilePage() {
      navigate("/profilepage");
    }

    return (
      <div className="ActiveWorkoutPage">
          <h3>ActiveWorkoutPage</h3>
          <Button 
            onClick={() => goToProfilePage()}
            variant="outlined"
          >
            Click me to go to ProfilePage
          </Button>
      </div>
    );
  }
  
  export default ActiveWorkoutPage;