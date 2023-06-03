import React from "react";

function useDashboard(props) {
  console.log(props);
  if (props.allEventData && props.allEventData[0]) {
    const MyselectedEventIs = props.allEventData[0].filter(
      (x) => x.id == props.eventSelectedId
    );
    console.log(MyselectedEventIs);
    var ticketCounts = {};

    // Initialize ticket counts for all ticket types
    let event = MyselectedEventIs[0]; // Assuming there is only one selected event
    for (let i = 0; i < event?.ticketTypes.length; i++) {
      let ticketType = event.ticketTypes[i];
      ticketCounts[props.eventSelectedId] = {
        ...(ticketCounts[props.eventSelectedId] || {}),
        [ticketType.id]: {
          sold: 0,
          left: Number(ticketType.count),
          name: ticketType.name,
          price: ticketType.price,
        },
      };
    }

    // Iterate over event statistics and update sold counts
    for (let i = 0; i < props.eventDetailsStats?.length; i++) {
      let stat = props.eventDetailsStats[i];
      let ticketTypeId = stat.type.id;

      if (ticketCounts[props.eventSelectedId][ticketTypeId]) {
        ticketCounts[props.eventSelectedId][ticketTypeId].sold += 1;
        ticketCounts[props.eventSelectedId][ticketTypeId].left -= 1;
      }
    }
  }

  return {
    eventSoldleftDict: ticketCounts,
  };
}

export default useDashboard;
