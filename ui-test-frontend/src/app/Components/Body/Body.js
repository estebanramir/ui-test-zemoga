"use client";
import { createContext, useEffect, useState } from "react";
import { Card } from "../Card/Card";
import './Body.css'
import { GridContext } from "../../Context";
import { CardGrid } from "../CardGrid/CardGrid";

const GRIDVALUES = {
    GRID: 'grid',
    LIST: 'list'}

export const Body = () => {
  const [data, setData] = useState([]);
  const[typeOfGrid, setTypeOfGrid] = useState(GRIDVALUES.LIST)
  const [isMobile, setIsMobile] = useState(false);
  const [ruleOfTumb, setRuleOfThumb] = useState(true);

  useEffect(() => {
    const checkDevice = () => {
      const isMobileWidth = window.innerWidth < 768;
      setIsMobile(isMobileWidth);
      setTypeOfGrid(typeOfGrid =>(isMobileWidth?GRIDVALUES.GRID:typeOfGrid)
        )
    };
    checkDevice();

    window.addEventListener('resize', checkDevice);

    return () => {
      window.removeEventListener('resize', checkDevice);
    };

  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/data");
        const data = await response.json();
        setData(data.data);
      } catch (e) {
        console.log(e, "error");
      }
    };
    fetchData();
  }, []);
  console.log("DATA", data);

  const handleChange = (e) => {
    setTypeOfGrid(e.target.value)
  }

  const setClassName = () => {
    return isMobile?'cards-grid-mobile':typeOfGrid === GRIDVALUES.LIST?'cards':'cards-grid'
  }

  const renderCards = () => {
    return (<div className={setClassName()}>
    {data.map((card, index) => {
    return typeOfGrid === GRIDVALUES.LIST?<Card info={card} setInfo={setData} />:<CardGrid info={card} setInfo={setData} isMobile={isMobile}/>})}
    </div>)
  };

  return (
    <GridContext.Provider value={typeOfGrid}>
        {ruleOfTumb &&   
      <aside class="banner banner-top" role="doc-tip" aria-label="Speak Out">
        <div class="banner__left">
          <span class="banner__hairline">Speak out. Be heard.</span>
          <span class="banner__title">Be counted</span>
        </div>
         
        <><div class="banner__right">
                      <p class="banner__text">
                          Rule of Thumb is a crowd sourced court of public opinion where
                          anyone and everyone can speak out and speak freely. It’s easy: You
                          share your opinion, we analyze and put the data in a public report.
                      </p>
                  </div><button class="icon-button" aria-label="close" onClick={()=>setRuleOfThumb(false)}>
                          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                              <g stroke="#000" stroke-width="2" fill="none" fill-rule="evenodd">
                                  <path d="M1 19L19 1M1 1l18 18" />
                              </g>
                          </svg>
                      </button></>
      </aside>
}
      <div className="body-container">
        {!isMobile &&
        <div className='body-filter'>

        <div className='filter-title'>Previous Rulings</div>
        <div>
          <select className='filter-select' value={typeOfGrid} onChange={handleChange}>
            <option value="grid">grid</option>

            <option value="list">list</option>
          </select>
        </div>
        </div>}
        {renderCards()}
      </div>
    </GridContext.Provider>
  );
};
