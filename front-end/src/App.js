import React from 'react';

// Drag and Drop Lib's
import { DndProvider} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import RouterController from './controllers/RouterController';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>  
      <RouterController />      
    </DndProvider>
  );
}

export default App;
