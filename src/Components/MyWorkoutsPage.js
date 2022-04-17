import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import theme from './Theme.js';
import NavButton from './NavButton.js';
import './MyWorkoutsPage.css';

const PoseCard = styled(Button)(() => ({
    width: 100,
    height: 100,
    justifyContent: 'center',
    backgroundColor: theme.palette.background.paper,
    borderColor: '#ffffff',
    '&:hover': {
        borderColor: '#eeeeee',
    },
    borderRadius: theme.overrides.MuiButton.root.borderRadius,
}));

function CuratedWorkoutCard() {
    return (
        <div></div>
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
          <div className="column">
            <div className="multi-select-options">
                options
            </div>
            <div className="scroll">
                <div class="trio">
                    <PoseCard>test</PoseCard>
                    <PoseCard>test</PoseCard>
                    <PoseCard>test</PoseCard>
                </div>
                <div className="trio">
                    <PoseCard>test</PoseCard>
                    <PoseCard>test</PoseCard>
                    <PoseCard>test</PoseCard>
                </div>
                <div className="trio">
                    <PoseCard>test</PoseCard>
                    <PoseCard>test</PoseCard>
                    <PoseCard>test</PoseCard>
                </div>
                <div className="trio">
                    <PoseCard>test</PoseCard>
                    <PoseCard>test</PoseCard>
                    <PoseCard>test</PoseCard>
                </div>
                <div className="trio">
                    <PoseCard>test</PoseCard>
                    <PoseCard>test</PoseCard>
                    <PoseCard>test</PoseCard>
                </div>
                <div className="trio">
                    <PoseCard>test</PoseCard>
                    <PoseCard>test</PoseCard>
                    <PoseCard>test</PoseCard>
                </div>
            </div>
            <NavButton
                onClick={() => goToActiveWorkoutPage()}
                variant="outlined"
            >
                Click me to go to Active Workout Page
            </NavButton>
          </div>
          <div className="column">
              <div className="header">

              </div>
              <div className="scroll">
                  <CuratedWorkoutCard />
                  <CuratedWorkoutCard />
                  <CuratedWorkoutCard />
              </div>
          </div>
      </div>
    );
  }
  
  export default MyWorkoutsPage;