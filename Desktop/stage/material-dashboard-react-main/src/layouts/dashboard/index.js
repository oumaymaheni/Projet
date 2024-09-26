/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import MDTypography from "components/MDTypography";
import Icon from "@mui/material/Icon";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="The total of Courses availables"
                count="20"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Paid Course"
                count={5}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Completed course"
                count="1"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person_add"
                title="Number of users"
                count="+91"
              />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="Number of exams passed taken each month. "
                  chart={tasks}
                />
              </MDBox>
            </Grid>
            <MDBox>
            <Grid item xs={12} md={6} lg={8}>
    <MDBox
      variant="gradient"
      bgColor="white"
      borderRadius="lg"
      coloredShadow="white"
      py={2}
      pr={0.5}
      mt={3}  // Adjust this value to add more space
      height="12.5rem"
    >
              <MDTypography variant="h6" gutterBottom>
                Course Progress
              </MDTypography>

              <MDBox display="flex" alignItems="center" lineHeight={1.5}>
                <Icon
                  sx={{
                    fontWeight: "bold",
                    color: ({ palette: { success } }) => success.main,
                    mt: -0.5,
                  }}
                >
                  done
                </Icon>
                <MDTypography variant="body2" color="text">
                  &nbsp;You have completed the CSS course.
                </MDTypography>
              </MDBox>

              <MDBox display="flex" alignItems="center" lineHeight={1.5} mt={1}>
                <Icon
                  sx={{
                    fontWeight: "bold",
                    color: ({ palette: { error } }) => error.main,
                    mt: -0.5,
                  }}
                >
                  close
                </Icon>
                <MDTypography variant="body2" color="text">
                  &nbsp;The HTML course is not completed.
                </MDTypography>
              </MDBox>

              <MDBox display="flex" alignItems="center" lineHeight={1.5} mt={1}>
                <Icon
                  sx={{
                    fontWeight: "bold",
                    color: ({ palette: { warning } }) => warning.main,
                    mt: -0.5,
                  }}
                >
                  warning
                </Icon>
                <MDTypography variant="body2" color="text">
                  &nbsp;Your score on Chapter 1 of the HTML course is below 50.
                </MDTypography>
              </MDBox>
            </MDBox>
          </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
