import './App.css';
import Navbar from './Components/Navbar/Navbar'
import AddTeam from './Pages/Team/AddTeam';
import AllRoutes from './Routes/AllRoutes'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>     

      {/* branch day03 */}
      {/* <h1>Team page</h1> */}
      {/* <AddTeam/> */}
    </div>
  );
}

export default App;
