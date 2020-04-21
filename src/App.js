import React from 'react';

function getTitle(title){
  return title;
}

function App(){
  return(
    <div>
      <h1>
        Hey {getTitle('Reacting')}
      </h1>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" />
    </div>
  )
}

export default App;
