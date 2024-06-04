import Model from "./Model";
import React, { useState } from "react";
function App() {
  const [showModel, setShowModel] = useState(false);
  const openModel = () => setShowModel(true);
  const closeModel = () => setShowModel(false);
  return (
    <div className="App">
      <button onClick={openModel}>Show Model</button>
      {showModel && 
      <Model onClose={closeModel}>
        This is my first Custome model for real!!
      </Model>}
    </div>
  );
}

export default App;
