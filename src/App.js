import React from "react";
import Header from './Components/Navbar'
import routes from './routes'
function App() {

  return (
    <div>
    <Header />
    {routes}
    </div>

  )
}

export default App;
