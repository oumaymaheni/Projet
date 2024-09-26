import { useState, useEffect } from "react";
import axios from "axios";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAlert from "components/MDAlert";
import MDSnackbar from "components/MDSnackbar";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function Notifications({ email }) {
  const [notifications, setNotifications] = useState([]);
  const [successSB, setSuccessSB] = useState(false);

  useEffect(() => {
    if (email) {
      axios.get(`http://localhost:5000/cours/notifications/${email}`)
        .then(response => {
          setNotifications(response.data);
          if (response.data.length > 0) {
            openSuccessSB();
          }
        })
        .catch(error => {
          console.error("There was an error fetching the notifications!", error);
        });
    }
  }, [email]);

  const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);

  const handleDelete = (notificationId) => {
    axios.delete(`http://localhost:5000/cours/notifications/${notificationId}`)
      .then(() => {
        // Remove the deleted notification from the state
        setNotifications(notifications.filter(notification => notification.id !== notificationId));
      })
      .catch(error => {
        console.error("There was an error deleting the notification!", error);
      });
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={6} mb={3}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Card>
              <MDBox p={2}>
                <MDTypography variant="h5">Notifications</MDTypography>
              </MDBox>
              <MDBox pt={2} px={2}>
                {notifications.map((notification) => (
                  <MDAlert key={notification.id} color="info" dismissible>
                    <MDBox display="flex" justifyContent="space-between" alignItems="center">
                      <MDTypography>{notification.message}</MDTypography>
                      <IconButton onClick={() => handleDelete(notification.id)} color="error">
                        <DeleteIcon />
                      </IconButton>
                    </MDBox>
                  </MDAlert>
                ))}
              </MDBox>
            </Card>
          </Grid>

          <Grid item xs={12} lg={8}>
            <Card>
              <MDBox p={2} lineHeight={0}>
                <MDTypography variant="h5">Messagerie</MDTypography>
                <MDTypography variant="button" color="text" fontWeight="regular">
                  Aucune Récommendation pour l'instant
                </MDTypography>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      {successSB && (
        <MDSnackbar
          color="success"
          icon="check"
          title="Nouveau Cours"
          content="Un nouveau cours a été ajouté. Consultez les notifications pour plus de détails."
          dateTime="à l'instant"
          open={successSB}
          onClose={closeSuccessSB}
          bgWhite
        />
      )}
    </DashboardLayout>
  );
}

export default Notifications;
