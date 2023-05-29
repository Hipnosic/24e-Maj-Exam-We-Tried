import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import List from "./list";

const Guest = () => {
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

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {booksError && <p>Error: {booksError}</p>}
      {booksData && <DisplayTable />}
      <p>Booksters Website</p>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />

      <Button variant="contained">Login</Button>
      <Button variant="outlined">Signup</Button>

      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Author</TableCell>
            <TableCell align="left">Quantity</TableCell>
            <TableCell align="left">Title</TableCell>
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
    </TableContainer>
    </div>
    
  );
};

export default Guest;
