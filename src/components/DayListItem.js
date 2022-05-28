import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";


export default function DayListItem(props) {
  const dayListItemClass = classNames('day-list__item', {
    'day-list__item--selected': props.selected,
    'day-list__item--selected': props.spots === 0
  })

  function formatSpots(spots) {
    if (spots === 0) {
      return 'no spots remaining';
    }
    if (spots === 1) {
      return `1 spot remaining`;
    }
    if (spots > 1) {
      return `${spots} spots remaining`;
    }
  }

  return (
    <li 
      className={dayListItemClass} 
      onClick={() => props.setDay(props.name)} 
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );  
}


// import React from "react";
// import "components/DayListItem.scss";
// import classNames from "classnames";

// export default function DayListItem(props) {
//   return (
//     <li onClick={() => props.setDay(props.name)}>
//       <h2 className="text--regular">{props.name}</h2>
//       <h3 className="text--light">{props.spots} spots remaining</h3>
//     </li>
//   );
// }