import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from "react-router-dom";

function PoseCard() {
    return (
        <Card sx={{ width: 200, height: 200 }}>
            <h6>Card</h6>
            <CardMedia>
                {/*Here you would put the image of the workout*/}
            </CardMedia>
        </Card>
    );
}

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
          <div>
              <PoseCard />
              <PoseCard />
              <PoseCard />
          </div>
      </div>
    );
  }
  
  export default MyWorkoutsPage;