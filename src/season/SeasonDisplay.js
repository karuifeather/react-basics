import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  summer: {
    text: "Yay!! Let's hit the beach!!",
    iconName: 'sun',
  },
  winter: {
    text: "Buurr!! It's chilly outside!!",
    iconName: 'snowflake',
  },
};

const getSeason = (lat, month) => {
  // Apr(3) to Sept(8) and lat > 0: summer
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
