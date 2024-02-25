import { useContext, useState } from "react";
import './CardVoteSection.css'
import { GridContext } from "@/app/Context";


export const CardVoteSection = ({info, setInfo}) => {
    const [voted, setVoted] = useState(false);
    const [selectedThumb, setSelectedThumb] = useState(0);
    const grid = useContext(GridContext)


    const handleUpVote = () => {
        setSelectedThumb(1);

    }

    const handleDownVote = () => {
        setSelectedThumb(-1);
    }

    const handleSubmitVote = () => {

        const submitVote = async () => {
            try{
                const response = await fetch('http://localhost:3001/data',{
                    headers: { Accept: "application/json",'Content-Type':'application/json' },
                    method: "PATCH",	
                    body: JSON.stringify({
                    name: info.name,
                    vote: selectedThumb
                    })
                })
                const data = await response.json();
                setInfo(data.data)
                setSelectedThumb(0)
                setVoted(true)
            }catch(e){
            }
        }
        submitVote()
        setSelectedThumb(0)
    }


    const yearDiff = (startDate, endDate) =>
        Math.max(0, endDate.getFullYear() - startDate.getFullYear());
    const monthDiff = (startDate, endDate) =>
        Math.max(0, startDate.getMonth() + endDate.getMonth());
    const DaysDiff = (startDate, endDate) =>
        Math.max(0, endDate - startDate / (1000 * 60 * 60 * 24));

  const getDifferences = () => {
    if (yearDiff(new Date(info.lastUpdated), new Date()) > 0) {
      const yearD = yearDiff(new Date(info.lastUpdated), new Date());
      return `${yearD} year${yearD > 1 ? "s" : ""} ago in ${info.category}`;
    } else if (monthDiff(new Date(info.lastUpdated), new Date()) > 0) {
      const monthD = monthDiff(new Date(info.lastUpdated), new Date());
      return `${monthD} month${monthD > 1 ? "s" : ""} ago in ${info.category}`;
    } else {
      const DaysD = DaysDiff(new Date(info.lastUpdated), new Date());
      return `${DaysD} month${DaysD > 1 ? "s" : ""} ago in ${info.category}`;
    }
  };

  console.log(selectedThumb)

    return(
        <div className="card-rigth">
        {!voted ? (
          <div class="voting-section">
            <div className={`card-coting-message${grid==='grid'?'-grid':''}`}>{getDifferences()}</div>
            <div className="voting-container">
              <button
                className={`icon-button-vote${grid==='grid'?'-grid':''}`}
                aria-label={selectedThumb ===1?'thumbs up selected':'thumbs up'}
                onClick={handleUpVote}
              >
                <img src="/thumbs-up.svg" alt="thumbs up" />
              </button>
              <button
                class={`icon-button-vote${grid==='grid'?'-grid':''}`}
                aria-label={selectedThumb ===-1?'thumbs down selected':'thumbs down'}
                onClick={handleDownVote}
              >
                <img src="/thumbs-down.svg" alt="thumbs down" />
              </button>

              <button
                className='submitt-vote'
                disabled={selectedThumb===0}
                onClick={handleSubmitVote}
              >
                Vote Now
              </button>
            </div>
          </div>
        ) : (
          <div class="">
            <div className='card-coting-message'>Thank you for your Vote</div>
            <div className="voting-container-vote">
            <button className='submitt-vote-grid' onClick={()=>setVoted(false)}>Vote Again</button>
            </div>
          </div>
        )}
      </div>
    )
}