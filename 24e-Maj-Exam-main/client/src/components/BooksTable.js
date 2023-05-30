import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import GroupedButtons from "./GroupedButtons";

const BooksTable = ({ loggedInAsUser, loggedInAsAdmin }) => {
  console.log("loggedInAsUser: ", loggedInAsUser);

  const [booksData, setBooksData] = useState(null);
  const [booksError, setBooksError] = useState("");

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/library/books");
      setBooksData(response.data);
    } catch (error) {
      setBooksError(error.message);
    }
  };

  const handleEdit = async () => {
    console.log("edit");
  };

  const handleDelete = async () => {
    console.log("delete");
  };

  useEffect(() => {
    getData();
  }, []);

  const DisplayTable = () => {
    return (
      <TableContainer
        component={Paper}
        style={{
          backgroundColor: "white",
        }}
      >
        <Box
          sx={{
            bgcolor: "lightgrey",
            boxShadow: 3,
            borderRadius: 2,
            // px: 50,
            py: 2,
            marginTop: 2,
            marginBottom: 4,
            marginLeft: 6,
            marginRight: 6,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            // justifycontent: "space-between",
          }}
        >
          <TextField id="outlined-basic" label="Search" variant="outlined" />
        </Box>

        <Box
          sx={{
            bgcolor: "lightgrey",
            boxShadow: 3,
            borderRadius: 2,
            // px: 50,
            py: 2,
            marginTop: 2,
            // marginBottom: 4,
            marginLeft: 6,
            marginRight: 6,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            // justifycontent: "space-between",
          }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography component="h1" variant="h5">
                    Author
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography component="h1" variant="h5">
                    Quantity
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography component="h1" variant="h5">
                    Title
                  </Typography>
                </TableCell>
                {(loggedInAsUser || loggedInAsAdmin) && (
                  <TableCell align="left">
                    <Typography component="h1" variant="h5">
                      Order
                    </Typography>
                  </TableCell>
                )}
                {loggedInAsAdmin && (
                  <TableCell align="left">
                    <Typography component="h1" variant="h5">
                      Action
                    </Typography>
                  </TableCell>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {booksData.books.map((book) => (
                <TableRow key={book.author}>
                  <TableCell component="th" scope="row">
                    {book.author}
                  </TableCell>
                  <TableCell align="left">{book.quantity}</TableCell>
                  <TableCell align="left">{book.title}</TableCell>
                  {(loggedInAsUser || loggedInAsAdmin) && (
                    <TableCell align="left">
                      <GroupedButtons />
                    </TableCell>
                  )}
                  {loggedInAsAdmin && (
                    <TableCell align="left">
                      <Button onClick={handleEdit}>Edit</Button>
                      <Button onClick={handleDelete}>Delete</Button>
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </TableContainer>
    );
  };

  return (
    <div>
      {booksError && <p>Error: {booksError}</p>}
      {booksData && <DisplayTable />}
    </div>
  );
};

export default BooksTable;
