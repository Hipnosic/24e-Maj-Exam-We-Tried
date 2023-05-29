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
import DisplayTable from "./list";

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
      {booksData && <DisplayTable getData />}
      <p>Booksters Website</p>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />

      <Button variant="contained">Login</Button>
      <Button variant="outlined">Signup</Button>
    </div>
    
  );
};

export default Guest;
