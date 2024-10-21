import SidebarWithHeader from "./components/shared/SideBar.jsx";
import { Text, Box } from "@chakra-ui/react";
import { Line } from "react-chartjs-2";
import 'chart.js/auto';

const Home = () => {
  const data = {
    labels: [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
    ],
    datasets: [
      {
        label: "Client Counts",
        data: [21, 19, 26, 27, 18, 18, 13, 15, 20, 23, 25, 30],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)"
      }
    ]
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <SidebarWithHeader>
      <Text fontSize="4xl" mb={4}>Dashboard</Text>
      <Box width="100%" height="400px">
        <Line data={data} options={options} />
      </Box>
    </SidebarWithHeader>
  );
};

export default Home;
