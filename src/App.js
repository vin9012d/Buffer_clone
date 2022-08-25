

import LineChart from "./components/Test";
import { Analytics } from "./pages/Analytics";
import { Channels } from "./pages/Channels";
import { Mainroute } from "./pages/Mainroute";

function App() {
  return (
    <div className="App">
      <Channels />
      <LineChart />
      <Analytics />
      <Mainroute />
    </div>
  );
}

export default App;
