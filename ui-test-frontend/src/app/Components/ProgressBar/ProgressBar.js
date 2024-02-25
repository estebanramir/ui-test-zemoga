import { GridContext } from "@/app/Context";
import { useContext } from "react";
import './ProgressBar.css'

export const ProgressBar = ({positive, negative}) => {
  const grid = useContext(GridContext)

    const tempProgress = (positive / (positive + negative)) * 100;
    const progress = tempProgress.toFixed(2)
    const negProgress = (100 - progress).toFixed(2)
    console.log("🚀 ~ ProgressBar ~ progress:", progress)

    const Parentdiv = {
      height: '40px',
      width: '100%',
      position: 'absolute',
      display: 'flex',
      bottom: 0,
    };
  
    const Childdiv = {
      height: "100%",
      width: `${progress}%`,
      backgroundColor: 'rgba(var(--color-green-positive), .6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      
    };
    const Childdivv = {
      height: "100%",
      width: `${negProgress}%`,
      backgroundColor: 'rgba(var(--color-yellow-negative), .6)',
      textAlign: "right",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
    };
  
    const progresstext = {
      padding: 10,
      color: 'white',
      Font:'Lato',
      Weight:400,
    };

    return(<div style={Parentdiv} className='parent-div'>
        <div style={Childdiv}>
        <img src="/thumbs-up.svg" alt="thumbs up" className='icon-image-up'/>
          <span style={progresstext}>{`${(progress)}%`}</span>
        </div>
        <div style={Childdivv}>
          <span style={progresstext}>{`${(negProgress)}%`}</span>
          <img src="/thumbs-down.svg" alt="thumbs down" className='icon-image-down'/>
        </div>
      </div>)

}