import React, {useState} from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import '../App.css';
import action1 from '../action1.jpg';
import action2 from '../action2.jpg';
import action3 from '../action3.jpg';
import action4 from '../action4.jpg';
import arrow1 from '../arrow1.svg';
import arrow2 from '../arrow2.svg';
import { listSubheaderClasses } from '@mui/material';

const playlistdata = [
  {
      image: action1 
  },
  {
      image: action2
  },
  {
      image: action3
  },
  {
      image: action4
  },
]


function ImageSlider({slides}) {
  const [current, setCurrent] = useState(0);
  const length = slides.length; 
  
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1 );
  }

  const prevSlide = () => {
    setCurrent(current ===  0 ? length - 1 : current - 1 );
  }

  console.log(current)

  //if there's no data return null
  if(!Array.isArray(slides) || slides.length <= 0)
  {
    console.log(slides.length);
    return null;
  }

  return (
      <div className='Slider'>            
            <div className="leftarrow" onClick={prevSlide}>
              <img src={arrow1} alt="left arrow" />
            </div>

                {/* {playlistdata.map((slide, index) => {
                    return(
                      <img src={action1} alt ="workout image" />  
                      <img src={slide.image} alt ="workout image" className='image'/>  
                    )
                })} */}
                {playlistdata.map((slide, index) => {
                    return (
                      <div className={index === current ? 'slide active' : 'slide'} key ={index}>
                        {index === current && (
                          <div className="Bigworkoutcards">
                              <img src={slide.image} alt ="workout image" className='image'/> 
                            </div> 
                        )}
                      </div>
                    );
                })}                
            <div className="rightarrow" onClick={nextSlide}>
              <img src={arrow2} alt="right arrow" />
            </div>
       </div>

  );

}


function ActiveWorkoutPage() {
    let navigate = useNavigate();
    async function goToProfilePage() {
      navigate("/profilepage");
    }



    return (
      <div className="Active">
          
          <div className='ActiveTitle'>
            Joyce's ab workout
          </div>

          <ImageSlider slides={playlistdata} />

          {/* <div className='Slider2'>
            <div className='Bigworkoutcards'>

            </div>
            <div className='Bigworkoutcards'>
              test!1
            </div>
            <div className='Bigworkoutcards'>
              test!2
            </div>
          </div> */}


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