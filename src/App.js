import logo from './logo.svg';
import './App.css';
import { Mainroute } from './pages/Mainroute';
import Analyticssidebar from './components/Analyticssidebar';
import { Box, Heading } from '@chakra-ui/react';
import { Analytics } from './pages/Analytics';
import LineChart from './components/Test';


function App() {
  return (
    <Box className="App">
    <LineChart />
      <Mainroute />
      <Heading>fksdljflsdfjsdl</Heading>
      <Heading>fksdljflsdfjsdl</Heading>
      <Heading>fksdljflsdfjsdl</Heading>
      <Analytics />
      <Analyticssidebar />
  
    </Box>
  );
}

export default App;
