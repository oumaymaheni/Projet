import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import Header from "layouts/profile/components/Header";

function Overview() {
  const [isEditing, setIsEditing] = useState(false);
  const [userId, setUserId] = useState("66d97ec12099283fd805bf6e"); // Remplacez cet ID par celui réel
  const [profileInfo, setProfileInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    Password: "", // Masqué par défaut
    niveau_etude: "",
    specialite: "",
  });

  useEffect(() => {
    const fetchProfileInfo = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/etudiants/${userId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch profile information");
        }
        const data = await response.json();
        setProfileInfo({
          firstName: data.prenom,
          lastName: data.nom,
          email: data.email,
          Password: "**********", // Masqué par défaut
          niveau_etude: data.niveau_etude,
          specialite: data.specialite,
        });
      } catch (error) {
        console.error("Error fetching profile information:", error);
      }
    };
    fetchProfileInfo();
  }, [userId]);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileInfo({ ...profileInfo, [name]: value });
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSave = async () => {
    if (!userId) {
      console.error("User ID is required");
      return;
    }
    try {
      const response = await fetch(`http://127.0.0.1:5000/etudiants/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nom: profileInfo.lastName,
          prenom: profileInfo.firstName,
          email: profileInfo.email,
          mot_de_passe: profileInfo.Password,
          niveau_etude: profileInfo.niveau_etude,
          specialite: profileInfo.specialite,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to update user");
      }
      
      setProfileInfo((prevProfileInfo) => ({
        ...prevProfileInfo,
        Password: "****", // Masquer le mot de passe après modification
      }));
      
      setIsEditing(false); // Quitter le mode édition après la sauvegarde
    } catch (error) {
      console.error("Error while saving profile:", error);
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header
        firstName={profileInfo.firstName}
        lastName={profileInfo.lastName}
      >
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
            <Divider orientation="vertical" md={{ ml: -2, mr: 1 }} />
            {!isEditing ? (
              <>
                <ProfileInfoCard title="Profile Information" info={profileInfo} shadow={false} />
                <MDBox mt={2}>
                  <Button variant="contained" color="dark" onClick={handleEditToggle}>
                    Modifier le Profil
                  </Button>
                </MDBox>
              </>
            ) : (
              <MDBox p={2}>
                <MDTypography variant="h6" fontWeight="medium">
                  Edit Profile Information
                </MDTypography>
                <TextField
                  label="First Name"
                  name="firstName"
                  value={profileInfo.firstName}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Last Name"
                  name="lastName"
                  value={profileInfo.lastName}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Email"
                  name="email"
                  value={profileInfo.email}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Niveau d'étude"
                  name="niveau_etude"
                  value={profileInfo.niveau_etude}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Spécialité"
                  name="specialite"
                  value={profileInfo.specialite}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Password"
                  name="Password"
                  type="password"
                  value={profileInfo.Password}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                />
                <MDBox mt={5} display="flex" justifyContent="space-between">
                  <MDButton variant="contained" color="info" onClick={handleSave}>
                    Save
                  </MDButton>
                  <Button variant="contained" color="dark" onClick={handleCancel}>
                    Cancel
                  </Button>
                </MDBox>
              </MDBox>
            )}
            <Divider orientation="vertical" sx={{ mx: 0 }} />
          </Grid>
        </MDBox>
      </Header>
    </DashboardLayout>
  );
}

export default Overview;
