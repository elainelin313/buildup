import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from '@mui/styles';
import theme from './Theme.js';
import NavButton from './NavButton.js';

function HomePage() {
    let navigate = useNavigate();
    async function goToCreateWorkoutPage() {
      navigate("/createworkoutpage");
    }

    return (
        <div className="HomePage">
            <h3>HomePage</h3>
            
                <NavButton 
                    onClick={() => goToCreateWorkoutPage()}
                    variant="outlined"
                >
                    Click me to go to CreateWorkoutPage
                </NavButton>
            
        </div>
    );
  }
  
  export default HomePage;