import DIsplay from "./components/DIsplay";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="h-screen bg-black">
        <div className="h-[90%] flex">
          <Sidebar />
          <DIsplay />
        </div>
        <Player />
      </div>
    </>
  );
}

export default App;
