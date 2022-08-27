import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; 
import { UserData } from "./Data";
import { Box } from "@chakra-ui/react";
 


function LineChart({ data }) {
      
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      
      title: {
        display: true
        
        
      },
    },
  };

      const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
          {
            label: "Users Gained",
            data: UserData.map((data) => data.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
                borderWidth: 2,
            fill:true
          },
        ],
      });
      
    return   <Box >
    <Line  height={200}   data={data} options={options} /> </Box>;  
  }
  
  export default LineChart;