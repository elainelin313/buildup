import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

function HomePage() {
    let navigate = useNavigate();
    async function goToCreateWorkoutPage() {
      navigate("/createworkoutpage");
    }

    return (
      <div className="HomePage">
          <h3>HomePage</h3>
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