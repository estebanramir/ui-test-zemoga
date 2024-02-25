import { useContext, useState } from "react";
import "./Card.css";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { CardVoteSection } from "../CardVoteSection/CardVoteSection";
import { GridContext } from "@/app/Context";

export const Card = ({ info, setInfo }) => {
    const grid = useContext(GridContext)

  const isPopular = () => {
    return info.votes.negative < info.votes.positive;
  };

  return (
    <aside className={grid==='list'?'card-container':'card-container-grid'} role="doc-tip" aria-label="Submit a name">
      <div className="card-left">
        {isPopular() ? (
          <div className="icon-result" aria-label="thumbs up">
            <img src="/thumbs-up.svg" alt="thumbs up" className="icon-image" />
          </div>
        ) : (
          <div className="icon-result" aria-label="thumbs down">
            <img
              src="/thumbs-down.svg"
              alt="thumbs down"
              className="icon-image"
            />
          </div>
        )}
        <img
          sizes="(max-heigth: 150px) 1440px, 100vw"
          src={info.picture}
          alt={info.name}
          role="none"
          className="card-image"
        />
      </div>
      <div className="card-center">
        <div class="card-info-title">{info.name}</div>
        <p class="card-info-desc">{info.description}</p>
      </div>
      <CardVoteSection info={info} setInfo={setInfo} />
      <ProgressBar
        positive={info.votes.positive}
        negative={info.votes.negative}
      />
    </aside>
  );
};
