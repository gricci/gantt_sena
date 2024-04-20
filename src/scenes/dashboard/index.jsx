import NotesIcon from '@mui/icons-material/Notes';
import ListIcon from '@mui/icons-material/List';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import GroupIcon from '@mui/icons-material/Group';
import { Box, IconButton, Typography, Menu, MenuItem, useTheme, Select } from "@mui/material";
import { tokens } from "../../theme";
import { useState } from "react";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import PieChart from "../../components/PieChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { Assignment } from '@mui/icons-material';


const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedChart, setSelectedChart] = useState('line');
  const [selectedActivity, setSelectedActivity] = useState('');

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleChartSelect = (chartName) => {
    setSelectedChart(chartName);
    handleCloseMenu();
  };

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <IconButton onClick={handleOpenMenu}>
          <ExpandMoreIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
        >
          <MenuItem onClick={() => handleChartSelect('line')}>Line Chart</MenuItem>
          <MenuItem onClick={() => handleChartSelect('pie')}>Pie Chart</MenuItem>
          <MenuItem onClick={() => handleChartSelect('bar')}>Bar Chart</MenuItem>
        </Menu>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
<Box
  gridColumn="span 3"
  backgroundColor={colors.primary[400]}
  display="flex"
  alignItems="center"
  justifyContent="center"
  padding="10px"
>
  {/* Icono */}
  <Box marginRight="10px">
    <NotesIcon sx={{ color: colors.greenAccent[600], fontSize: "40px" }} />
  </Box>

  {/* Texto y números */}
  <Box>
    <Typography variant="h4" fontWeight="bold">12,361</Typography>
    <Typography variant="subtitle1" fontSize="16px">Actividades</Typography>
  </Box>
</Box>
<Box
  gridColumn="span 3"
  backgroundColor={colors.primary[400]}
  display="flex"
  alignItems="center"
  justifyContent="center"
  padding="10px"
>
  {/* Icono */}
  <Box marginRight="10px">
    <ListIcon sx={{ color: colors.greenAccent[600], fontSize: "40px" }} />
  </Box>

  {/* Texto y números */}
  <Box>
    <Typography variant="h4" fontWeight="bold">431,225</Typography>
    <Typography variant="subtitle1" fontSize="16px">Tareas</Typography>
  </Box>
</Box>
<Box
  gridColumn="span 3"
  backgroundColor={colors.primary[400]}
  display="flex"
  alignItems="center"
  justifyContent="center"
  padding="10px"
>
  {/* Icono */}
  <Box marginRight="10px">
    <GroupIcon sx={{ color: colors.greenAccent[600], fontSize: "40px" }} />
  </Box>

  {/* Texto y números */}
  <Box>
    <Typography variant="h4" fontWeight="bold">32,441</Typography>
    <Typography variant="subtitle1" fontSize="16px">Colaboradores</Typography>
  </Box>
</Box>
<Box
  gridColumn="span 3"
  backgroundColor={colors.primary[400]}
  display="flex"
  alignItems="center"
  justifyContent="center"
  padding="10px"
>
  {/* Icono */}
  <Box marginRight="10px">
    <AssignmentIndIcon sx={{ color: colors.greenAccent[600], fontSize: "40px" }} />
  </Box>

  {/* Texto y números */}
  <Box>
    <Typography variant="h4" fontWeight="bold">Juan Carreño</Typography>
    <Typography variant="subtitle1" fontSize="16px">Encargado</Typography>
  </Box>
</Box>



        {/* ROW 2 */}
        <Box
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          {selectedChart === 'line' && selectedActivity === '' && <LineChart />}
          {selectedChart === 'pie' && selectedActivity === '' && <PieChart />}
          {selectedChart === 'bar' && selectedActivity === '' && <BarChart />}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
