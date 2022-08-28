import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; 
import { UserData } from "./Data";
import { Box } from "@chakra-ui/react";
 


function Barchart({ data }) {
      const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          
          title: {
            display: true
            
            
          },
        },
      };

      
      
  return <Box >
  <Bar  height={200}  data={data} options={options} /> 
     </Box>;  
  }
  
  export default Barchart;