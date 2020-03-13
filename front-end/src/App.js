import React from 'react';
import { DndProvider} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Routes from './routes';

import GlobalStyle from "./styles/global";

import Header from './components/Header';




function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Header />
      <Routes />      
      <GlobalStyle />
    </DndProvider>
  );
}

export default App;
