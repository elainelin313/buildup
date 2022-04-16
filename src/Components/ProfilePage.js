import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

function ProfilePage() {
    let navigate = useNavigate();
    async function goToHomePage() {
      navigate("/homepage");
    }

    return (
      <div className="ProfilePage">
          <h3>ProfilePage</h3>
          <Button 
            onClick={() => goToHomePage()}
            variant="outlined"
          >
            Click me to go to HomePage
          </Button>
      </div>
    );
  }
  
  export default ProfilePage;