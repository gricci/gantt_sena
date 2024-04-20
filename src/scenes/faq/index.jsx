import { useState } from "react";
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Button, Modal, TextField, IconButton } from "@mui/material";
import Header from "../../components/Header";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";

const Observations = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Estado para controlar el índice del accordion abierto
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Estado para controlar si la modal está abierta o cerrada
  const [openModal, setOpenModal] = useState(false);

  // Estado para almacenar el título y el contenido de la nueva observación
  const [newObservation, setNewObservation] = useState({ title: "", content: "" });

  // Función para manejar el cambio en el estado del accordion
  const handleChangeAccordion = (panel) => (event, isExpanded) => {
    setExpandedIndex(isExpanded ? panel : null);
  };

  // Función para manejar el cambio en el formulario de la nueva observación
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setNewObservation((prevObservation) => ({
      ...prevObservation,
      [name]: value
    }));
  };

  // Función para manejar el clic en el botón de guardar
  const handleSaveObservation = () => {
    // Aquí puedes realizar la lógica para guardar la nueva observación
    console.log("Nueva observación guardada:", newObservation);
    // Cerrar la modal
    setOpenModal(false);
    // Limpiar el estado de la nueva observación
    setNewObservation({ title: "", content: "" });
  };

  return (
    <Box m="20px">
      <Header 
      title="OBSERVATIONS"
      subtitle="Project name"
      />

      {/* Botón para crear una nueva observación */}
      <Box display="flex" justifyContent="flex-end" mb={2}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => setOpenModal(true)}
        >
          New Observation
        </Button>
      </Box>

      {/* Lista de observaciones */}
      {/* ROW 1 */}
      <Accordion
        expanded={expandedIndex === 'panel1'}
        onChange={handleChangeAccordion('panel1')}
        sx={{ "&:hover": { cursor: "pointer", backgroundColor: "#f0f0f0" } }}
      >
        <AccordionSummary
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography color={colors.greenAccent[500]} variant="h5">
            Desarrollo del módulo de inicio de sesión
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            La implementación del módulo de inicio de sesión se completó con éxito. Se realizaron pruebas exhaustivas y se corrigieron los errores encontrados. El módulo está listo para su despliegue en el entorno de producción.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Observaciones adicionales */}
      {/* Aquí puedes agregar más observaciones utilizando el mismo patrón */}
      <Accordion
        expanded={expandedIndex === 'panel2'}
        onChange={handleChangeAccordion('panel2')}
        sx={{ "&:hover": { cursor: "pointer", backgroundColor: "#f0f0f0" } }}
      >
        <AccordionSummary
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography color={colors.greenAccent[500]} variant="h5">
            Revisión del diseño de la interfaz de usuario
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Se llevó a cabo una revisión exhaustiva del diseño de la interfaz de usuario. Se realizaron ajustes en la disposición de los elementos y se agregaron nuevas funcionalidades según las sugerencias del equipo de desarrollo.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expandedIndex === 'panel3'}
        onChange={handleChangeAccordion('panel3')}
        sx={{ "&:hover": { cursor: "pointer", backgroundColor: "#f0f0f0" } }}
      >
        <AccordionSummary
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography color={colors.greenAccent[500]} variant="h5">
            Configuración del servidor de base de datos
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Se configuró el servidor de base de datos según los requisitos del proyecto. Se implementaron medidas de seguridad adicionales y se realizaron pruebas de rendimiento para garantizar un funcionamiento óptimo.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expandedIndex === 'panel4'}
        onChange={handleChangeAccordion('panel4')}
        sx={{ "&:hover": { cursor: "pointer", backgroundColor: "#f0f0f0" } }}
      >
        <AccordionSummary
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography color={colors.greenAccent[500]} variant="h5">
            Integración de la API de terceros
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Se integró la API de un proveedor externo para acceder a datos adicionales. Se establecieron conexiones seguras y se realizaron pruebas de integración para garantizar la compatibilidad con el sistema existente.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expandedIndex === 'panel5'}
        onChange={handleChangeAccordion('panel5')}
        sx={{ "&:hover": { cursor: "pointer", backgroundColor: "#f0f0f0" } }}
      >
        <AccordionSummary
          aria-controls="panel5bh-content"
          id="panel5bh-header"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography color={colors.greenAccent[500]} variant="h5">
            Implementación de pruebas automatizadas
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Se desarrollaron pruebas automatizadas para garantizar la estabilidad del sistema. Se configuraron flujos de trabajo de integración continua para ejecutar pruebas automáticamente después de cada actualización de código.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Modal para crear una nueva observación */}
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 0, maxWidth: 600 }}>
          <Box p={5}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
              <Typography variant="h4">New Observation</Typography>
              <IconButton onClick={() => setOpenModal(false)}><CloseIcon /></IconButton>
            </Box>
            <TextField
              name="title"
              label="Title"
              variant="outlined"
              fullWidth
              value={newObservation.title}
              onChange={handleFormChange}
              mb={2}
            />
            <TextField
              name="content"
              label="Content"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={newObservation.content}
              onChange={handleFormChange}
              mb={2}
            />
            <Box display="flex" justifyContent="flex-end">
              <Button variant="contained" color="primary" onClick={handleSaveObservation} sx={{ mr: 2 }}>Save</Button>
              <Button variant="outlined" onClick={() => setOpenModal(false)}>Cancel</Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Observations;
