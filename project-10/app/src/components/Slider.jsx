import { useState } from 'react';

// components
import SliderTabs from './SliderTabs';
// import data
import tabsData from '../data/tabs.json';
const tabsLink = [
  {
    name: 'Simple Bookmarking',
    href: '#simple-bookmarking',
  },
  {
    name: 'Speedy Searching',
    href: '#speedy-searching',
  },
  {
    name: 'Easy Sharing',
    href: '#easy-sharing',
  },
];

export default function Slider() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (e, index) => {
    e.preventDefault();
    setActiveTabIndex(index);

    const newLeft = index * 33.33 + '%'; // Adjust based on the number of tabs
    e.currentTarget.style.setProperty('--_left', newLeft);
  };

  // let tabLabel = 1;

  return (
    <div className="slider flex flex-col">
      <ul
        className="slider__ul flex"
        aria-labelledby="tabs-title"
        style={{ '--_left': activeTabIndex * 33.33 + '%' }}
      >
        {tabsLink.map((link, index) => (
          <li
            key={link.href}
            className="slider__li"
            aria-selected={activeTabIndex === index ? 'true' : 'false'}
          >
            <a
              className="slider__a"
              onClick={(e) => handleTabClick(e, index)}
              href={link.href}
            >
              {link.name}
            </a>
          </li>
        ))}
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
