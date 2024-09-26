import React from 'react';
import { useNavigate } from 'react-router-dom';
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';
import MDAvatar from 'components/MDAvatar';
import MDProgress from 'components/MDProgress';
import MDBadge from 'components/MDBadge';

// Images
import html5Image from 'assets/images/html5.png';
import cssImage from 'assets/images/css.png';
import jsImage from 'assets/images/js.png';
import symfImage from 'assets/images/symfony.png';
import logoGithub from "assets/images/small-logos/github.svg";

// Composant pour les projets
const Project = ({ image, name }) => (
  <MDBox display="flex" alignItems="center" lineHeight={1}>
    <MDAvatar src={image} name={name} size="sm" variant="rounded" />
    <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
      {name}
    </MDTypography>
  </MDBox>
);

export default function Data() {
  const navigate = useNavigate();

  const handleDetailsClick = (courseName, chapters) => {
    navigate('/course-details', { state: { courseName, chapters } });
  };

  return {
    columns: [
      { Header: 'courses', accessor: 'project', width: '30%', align: 'left' },
      { Header: 'chapters', accessor: 'chapitres', align: 'center' },
      { Header: 'budget', accessor: 'budget', align: 'left' },
      { Header: 'payment_date', accessor: 'payment_date', align: 'center' },
      { Header: 'status', accessor: 'status', align: 'center' },
      { Header: 'action', accessor: 'action', align: 'center' },
    ],

    rows: [
      {
        project: <Project image={html5Image} name="HTML5" />,
        chapitres: 3,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            250D
          </MDTypography>
        ),
        payment_date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            09/08/2024
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="finish" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        action: (
          <MDTypography
            component="span"
            variant="caption"
            color="text"
            fontWeight="medium"
            onClick={() => handleDetailsClick("HTML5", ["Introduction", "Structure", "Forms"])}
            style={{ cursor: 'pointer' }}
          >
            details
          </MDTypography>
        ),
      },
        {
          project: <Project image={logoGithub} name="Github" />,
          chapitres: 3,
          budget: (
            <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
             gratuit
            </MDTypography>
          ),
          payment_date: 
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          -
         </MDTypography>,
         status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="not yet" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            details
          </MDTypography>
        ),
        },
        {
          project: <Project image={cssImage} name="CSS" />,
          chapitres: 2,
          budget: (
            <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
              200D
            </MDTypography>
          ),
          payment_date: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            26/06/2024
            </MDTypography>
          ),
          status: (
            <MDBox ml={-1}>
              <MDBadge badgeContent="not yet" color="dark" variant="gradient" size="sm" />
            </MDBox>
          ),
          action: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              details
            </MDTypography>
          ),
        },
        {
          project: <Project image={jsImage} name="JavaScript" />,
          chapitres: 4,
          budget: (
            <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
             180D
            </MDTypography>
          ),
          payment_date: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            25/05/2024
            </MDTypography>
          ),
          status: (
            <MDBox ml={-1}>
              <MDBadge badgeContent="finish" color="success" variant="gradient" size="sm" />
            </MDBox>
          ),
          action: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              details
            </MDTypography>
          ),
        },
        {
          project: <Project image={symfImage} name="Symfony" />,
          chapitres: 5,
          budget: (
            <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
             300D
            </MDTypography>
          ),
          payment_date: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              23/04/2018
            </MDTypography>
          ),
          status: (
            <MDBox ml={-1}>
              <MDBadge badgeContent="not yet" color="dark" variant="gradient" size="sm" />
            </MDBox>
          ),
          action: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              details
            </MDTypography>
          )
      },
      // Ajoutez les autres lignes de la même manière
    ],
  };
}
