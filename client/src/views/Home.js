import { React, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BooksTable from "../components/Books/BooksTable";
<<<<<<< HEAD
import UsersTable from "../components/AdminView/UsersTable";
=======
import UsersTable from "../components/Users/UsersTable";
>>>>>>> dab7938fd369ea6e0f9c3c8722fa0c80e4a1f412
import { Container } from "@mui/material";

const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export default function Home() {
  // TODO: get from session storage
  const userData = JSON.parse(sessionStorage.getItem("userData"));

  const loggedInAsUser = userData && userData.role === "USER" ? true : false;
  const loggedInAsAdmin = userData && userData.role === "ADMIN" ? true : false;
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      {loggedInAsAdmin || loggedInAsUser ? (
        loggedInAsAdmin ? (
          <>
            {/* Admin vy */}
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Books" />
                  <Tab label="Users" />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <BooksTable loggedInAsUser={false} loggedInAsAdmin={true} />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <UsersTable />
              </TabPanel>
            </Box>
          </>
        ) : (
          <>
            {/* User vy */}
            <BooksTable loggedInAsUser={true} loggedInAsAdmin={false} />
          </>
        )
      ) : (
        <>
          {/* Guest vy */}
          <BooksTable loggedInAsUser={false} loggedInAsAdmin={false} />
        </>
      )}
    </Container>
  );
}
