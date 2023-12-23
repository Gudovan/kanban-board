import React from 'react';

const TicketCard = ({ ticket }) => {
  const priorityColors = {
    4: 'red',
    3: 'orange',
    2: 'yellow',
    1: 'green',
    0: 'gray',
  };

  return (
    <div className="p-4 bg-white shadow rounded mb-4">
      {/* <h3 className="text-lg font-semibold">{ticket.title}</h3>
      <p className="text-sm text-gray-500 mb-2">Status: {ticket.status}</p>
      <p className="text-sm text-gray-500 mb-2">Assigned to: {ticket.user}</p>
      <p className={`text-sm text-${priorityColors[ticket.priority]} font-bold`}>
        Priority: {ticket.priority}
      </p>
      Add any additional ticket details based on your design */}
      <h1>List Of Tickets</h1>
      {/* {ticket.map((t1,index)=>(
        <ul key={index}>
          {t1.map((t,sIndex)=>(
            <li key={sIndex}>{t}</li>
          ))}
        </ul>
      ))} */}

      {Object.keys(ticket).map((key) => (
        <div key={key}>
          <h2>{key}</h2>
          <ul>
            {ticket[key].map((item, index) => (
              <div className='card'>
                <li key={index}>
                  <p className='card-id'>{item.id}</p>
                  <p className='card-title'>{item.title}</p>
                  
                  <p>{item.status}</p>
                  
                 
                
                </li>
              </div>
            ))
            }
          </ul>
        </div>

      ))
      }




    </div>


  )
}
export default TicketCard;