import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

function SignUpPage() {
    let navigate = useNavigate();
    async function goToProfilePage() {
      navigate("/profilepage");
    }

    return (
      <div className="SignUpPage">
          
        <div className="SignUpPage-Wrapper">
            <div>
                <h2 className="title">Create Account</h2>
            </div>
            <form className="form-wrapper">
                <div className="name">
                    <label className="label">Full Name </label>
                    <input className="input" type="text"/>
                </div>
                <div className="birthday">
                    <label className="label">Birthday </label>
                    <input className="input" type="text" />
                </div>
                <div className="email">
                    <label className="label">Email </label>
                    <input className="input" type="email" />
                </div>
                <div className="password">
                    <label className="label">Password</label>
                    <input className="input" type="password" />
                </div>
                <div className="signup-button">
                    <button className="submit">
                    Sign Up !
                    </button>
                </div>
            </form>
        </div>

        <div className = "SpotifySign">
            <button className = "SpotifyButton">
                Connect With Spotify
            </button>
        </div>
        

          
          <Button 
            onClick={() => goToProfilePage()}
            variant="outlined"
          >
            Click me to go to Profile Page
          </Button>
      </div>
    );
  }
  
  export default SignUpPage;