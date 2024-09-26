import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Example data for quizzes
const exampleQuizzes = [
  { chapter: 'Chapter 1', quizzes: ['Quiz 1', 'Quiz 2'] },
  { chapter: 'Chapter 2', quizzes: ['Quiz 3', 'Quiz 4'] }
];

// CourseDetails component
function CourseDetails() {
  const { state } = useLocation();
  const { courseName, chapters } = state || {};
  const [selectedChapter, setSelectedChapter] = useState(null);

  const handleShowQuizzes = (chapter) => {
    setSelectedChapter(chapter);
  };

  // Find quizzes for the selected chapter
  const quizzes = exampleQuizzes.find(q => q.chapter === selectedChapter)?.quizzes || [];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={8}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  {courseName} - Chapters
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                {chapters && chapters.length > 0 ? (
                  <TableContainer component={Paper} sx={{ maxWidth: '100%' }}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>
                            <MDTypography variant="button" color="text" fontWeight="medium">
                              Chapter Name
                            </MDTypography>
                          </TableCell>
                          <TableCell>
                            <MDTypography variant="button" color="text" fontWeight="medium">
                              Quiz Button
                            </MDTypography>
                          </TableCell>
                          <TableCell>
                            <MDTypography variant="button" color="text" fontWeight="medium">
                              Quiz Score
                            </MDTypography>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {chapters.map((chapter, index) => (
                          <TableRow key={index}>
                            <TableCell>
                              <MDTypography variant="body2" color="text.secondary">
                                {chapter}
                              </MDTypography>
                            </TableCell>
                            <TableCell>
                              <Button
                                variant="gradient"
                                color="secondary"
                                onClick={() => handleShowQuizzes(chapter)}
                              >
                                Show Quizzes
                              </Button>
                            </TableCell>
                            <TableCell>
                              {/* Replace with actual score data */}
                              <MDTypography variant="body2" color="text.secondary">
                                {/* Example score */}
                                {index * 10}
                              </MDTypography>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                ) : (
                  <MDTypography variant="body2" color="text.secondary" align="center" mt={3}>
                    No chapters available.
                  </MDTypography>
                )}
                {selectedChapter && (
                  <MDBox mt={8}>
                  <MDBox mt={3}>
                    <Card>
                      <MDBox
                        mx={2}
                        mt={-3}
                        py={3}
                        px={2}
                        variant="gradient"
                        bgColor="success"
                        borderRadius="lg"
                        coloredShadow="success"
                      >
                        <MDTypography variant="h6" color="white" >
                          Quizzes for {selectedChapter}
                        </MDTypography>
                      </MDBox>
                      <MDBox pt={3}>
                        {quizzes.length > 0 ? (
                          <TableContainer component={Paper} sx={{ maxWidth: '100%' }}>
                            <Table>
                              <TableHead>
                                <TableRow>
                                  <TableCell>
                                    <MDTypography variant="button" color="text" fontWeight="medium">
                                      Quiz Name
                                    </MDTypography>
                                  </TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {quizzes.map((quiz, index) => (
                                  <TableRow key={index}>
                                    <TableCell>
                                      <MDTypography variant="body2" color="text.secondary">
                                        {quiz}
                                      </MDTypography>
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </TableContainer>
                        ) : (
                          <MDTypography variant="body2" color="text.secondary" align="center">
                            No quizzes available for this chapter.
                          </MDTypography>
                        )}
                      </MDBox>
                    </Card>
                  </MDBox>
                  </MDBox>
                )}
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default CourseDetails;
