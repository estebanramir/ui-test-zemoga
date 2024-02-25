import { useContext, useState } from "react";
import "./CardGrid.css";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { CardVoteSection } from "../CardVoteSection/CardVoteSection";
import { GridContext } from "@/app/Context";

export const CardGrid = ({ info, setInfo, isMobile }) => {
  const grid = useContext(GridContext);
  console.log("🚀 ~ Card ~ grid:", grid);
  const isPopular = () => {
    return info.votes.negative < info.votes.positive;
  };

  return (
    <aside
      className="card-container-grid"
      role="doc-tip"
      aria-label="Submit a name"
      background={info.picture}
    >
      <img
        sizes="(max-heigth: 150px) 1440px, 100vw"
        src={info.picture}
        alt={info.name}
        role="none"
        className="card-image-grid"
      />
      <div>
        
      </div>
      <div className="card-info-grid">
        {isPopular() ? (
          <div className="icon-result-grid" aria-label="thumbs up">
            <img src="/thumbs-up.svg" alt="thumbs up" className="icon-image" />
          </div>
        ) : (
          <div className="icon-result-grid" aria-label="thumbs down">
            <img
              src="/thumbs-down.svg"
              alt="thumbs down"
              className="icon-image"
            />
          </div>
        )}
        <div className="Card-grid-info-contianer">
          <div class="card-info-title-grid">{info.name}</div>
          <p class="card-info-desc-grid">{info.description}</p>
        </div>
      </div>
      <CardVoteSection info={info} setInfo={setInfo} />
      <ProgressBar
        positive={info.votes.positive}
        negative={info.votes.negative}
      />
    </aside>
  );
};
