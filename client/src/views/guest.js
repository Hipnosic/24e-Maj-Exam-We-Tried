import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import axios from "axios";
=======
>>>>>>> dab7938fd369ea6e0f9c3c8722fa0c80e4a1f412
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Guest = () => {
  const [booksData, setBooksData] = useState(null);
  const [booksError, setBooksError] = useState("");

  const getData = async () => {
    try {
<<<<<<< HEAD
      const response = await axios.get("http://localhost:3000/library/books");
      setBooksData(response.data);
=======
      const response = await fetch("http://localhost:3000/library/books");
      if (!response.ok) {
        throw new Error("Request failed with status: " + response.status);
      }
  
      const data = await response.json();
      setBooksData(data);
>>>>>>> dab7938fd369ea6e0f9c3c8722fa0c80e4a1f412
    } catch (error) {
      setBooksError(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const DisplayTable = () => {
      return     <TableContainer component={Paper}
      style={{
        backgroundColor: 'white'
      }}
      >
        <Box
        sx={{
          bgcolor: 'lightgrey',
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
        <Typography component="h1" variant="h5">
        <h1>Booksters Website</h1>
        <p>Browsing as guest</p>
        </Typography>
        <TextField id="outlined-basic" label="Search" variant="outlined" />
          <Link to="/auth/login">
          <Button variant="contained">Login</Button>
          </Link>
      </Box>
        
      <Box
        sx={{
          bgcolor: 'lightgrey',
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
          </TableRow>
        </TableHead>
        <TableBody>
          {booksData.books.map((book) => (
            <TableRow
              key={book.author}
            >
              <TableCell component="th" scope="row">
                {book.author}
              </TableCell>
              <TableCell align="left">{book.quantity}</TableCell>
              <TableCell align="left">{book.title}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </Box>
    </TableContainer>
  }

  return (
    <div>
      {booksError && <p>Error: {booksError}</p>}
      {booksData && <DisplayTable />}
    </div>
  );
};

export default Guest;
