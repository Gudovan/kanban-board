import React from 'react';
import TicketCard from './TicketCard';
import useKanbanStore from '../lib/store';

const KanbanBoard = ({ tickets }) => {
  console.log('kanboard',tickets)
  const { groupingOption, sortOption } = useKanbanStore();

  // Group tickets based on the selected option
  const groupedTickets = groupTickets(tickets, groupingOption);

  // Sort tickets based on the selected option
  const sortedTickets = sortTickets(groupedTickets, sortOption);
  // function createTicket(ticket){
  //   return (
  //     <TicketCard ticket={ticket} />
  //   )
  // }

  return (
     
    <div className="flex">
      {/* {createTicket.map(tickets)} */}
      <TicketCard ticket={tickets} />
    </div>
  );
};

// Helper function to group tickets based on the selected option
const groupTickets = (tickets, option) => {
  // Implement grouping logic based on the selected option
  // For simplicity, this example assumes tickets have a 'status', 'user', and 'priority' property
  if(!Array.isArray(tickets) || !option){
    return {};
  }
  switch (option) {
    case 'status':
      return groupBy(tickets, 'status');
    case 'user':
      return groupBy(tickets, 'userID');
    case 'priority':
      return groupBy(tickets, 'priority');
    default:
      return groupBy(tickets, 'status');
  }
};

// Helper function to sort tickets based on the selected option
const sortTickets = (groupedTickets, option) => {
  // Implement sorting logic based on the selected option
  // For simplicity, this example assumes tickets have a 'priority' and 'title' property

  switch (option) {
    case 'priority':
      return sortByPriority(groupedTickets);
    case 'title':
      return sortByTitle(groupedTickets);
    default:
      return sortByPriority(groupedTickets);
  }
};

// Helper function to group tickets by a specific property
const groupBy = (arr, property) => {
  return arr.reduce((grouped, item) => {
    const key = item[property];
    (grouped[key] = grouped[key] || []).push(item);
    return grouped;
  }, {});
};

// Helper function to sort tickets by priority
const sortByPriority = (groupedTickets) => {
  return Object.keys(groupedTickets).reduce((sorted, group) => {
    sorted[group] = groupedTickets[group].sort((a, b) => b.priority - a.priority);
    return sorted;
  }, {});
};

// Helper function to sort tickets by title
const sortByTitle = (groupedTickets) => {
  return Object.keys(groupedTickets).reduce((sorted, group) => {
    sorted[group] = groupedTickets[group].sort((a, b) => a.title.localeCompare(b.title));
    return sorted;
  }, {});
};

export default KanbanBoard;