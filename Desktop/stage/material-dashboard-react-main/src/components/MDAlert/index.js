import { useState } from "react";
import PropTypes from "prop-types";
import Fade from "@mui/material/Fade";
import MDBox from "components/MDBox";
import MDAlertRoot from "components/MDAlert/MDAlertRoot";
import MDAlertCloseIcon from "components/MDAlert/MDAlertCloseIcon";

function MDAlert({ color, dismissible, children, onClose, ...rest }) {
  const [alertStatus, setAlertStatus] = useState("mount");

  const handleAlertStatus = () => {
    setAlertStatus("fadeOut");
    if (onClose) {
      onClose(); // Call the onClose prop when closing
    }
  };

  const alertTemplate = (mount = true) => (
    <Fade in={mount} timeout={300}>
      <MDAlertRoot ownerState={{ color }} {...rest}>
        <MDBox display="flex" alignItems="center" color="white">
          {children}
        </MDBox>
        {dismissible ? (
          <MDAlertCloseIcon onClick={handleAlertStatus}>
            &times;
          </MDAlertCloseIcon>
        ) : null}
      </MDAlertRoot>
    </Fade>
  );

  switch (alertStatus) {
    case "mount":
      return alertTemplate();
    case "fadeOut":
      setTimeout(() => setAlertStatus("unmount"), 300); // Change timeout to match Fade duration
      return alertTemplate(false);
    default:
      return null;
  }
}

MDAlert.defaultProps = {
  color: "primary",
  dismissible: false,
  onClose: null, // Default to no-op if not provided
};

MDAlert.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  dismissible: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func, // Add onClose prop type
};

export default MDAlert;
