import { useState } from 'react';

// components
import SliderTabs from './SliderTabs';
// import data
import tabsData from '../data/tabs.json';

export default function Slider() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (e, index) => {
    e.preventDefault();
    setActiveTabIndex(index);
  };

  // let tabLabel = 1;

  return (
    <div className="slider">
      <ul className="slider__ul flex" aria-labelledby="tabs-title">
        <li className="slider__li">
          <a
            className="slider__a"
            onClick={(e) => handleTabClick(e, 0)}
            href="#simple-bookmarking"
          >
            Simple Bookmarking
          </a>
        </li>
        <li className="slider__li">
          <a
            className="slider__a"
            onClick={(e) => handleTabClick(e, 1)}
            href="#speedy-searching"
          >
            Speedy Searching
          </a>
        </li>
        <li className="slider__li">
          <a
            className="slider__a"
            onClick={(e) => handleTabClick(e, 2)}
            href="#easy-sharing"
          >
            Easy Searching
          </a>
        </li>
      </ul>
      <div className="slider__panels flex">
        {tabsData.info.map((tab, index) => (
          <div
            key={tab.id}
            id={`tab-${index}`}
            className={`panel ${
              activeTabIndex === index ? 'active' : 'hidden'
            }`}
            aria-hidden={activeTabIndex === index ? 'true' : 'false'}
          >
            <SliderTabs
              id={tab.id}
              title={tab.title}
              description={tab.text}
              image={tab.img}
              ariaLabelBy={`tab-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
