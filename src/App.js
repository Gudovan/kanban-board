import React, { useEffect } from 'react';
import useKanbanStore from './lib/store';
import { fetchData } from './lib/api';
import KanbanBoard from './components/KanbanBoard';

const App = () => {
  const { tickets } = useKanbanStore();

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData().then((data) => {
      // Update state with fetched data
      console.log('fetched data',data)
      useKanbanStore.setState({ tickets: data });
      console.log("aidh",tickets)
    });
  }, []);

  return (
    <div className="container mx-auto my-8 p-8 bg-gray-200">
      <h1 className="text-3xl font-bold mb-8">Kanban Board</h1>
      {/* Render the Kanban board with grouping and sorting options */}
      <KanbanBoard  tickets={useKanbanStore.getState().tickets}/>
      {/* <KanbanBoard/> */}
    </div>
  );
};

export default App;