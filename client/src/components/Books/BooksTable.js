// BooksTable.js-filen är en React-komponent som ansvarar för att rendera en tabell med böcker. Den hämtar bokdata från en server, visar böckerna i tabellformat och tillhandahåller funktioner som sökning, beställning, redigering och radering av böcker baserat på användarens roll (admin eller användare). Komponenten använder olika Material-UI-komponenter för styling och interaktion, och den hanterar datahämtning och API-förfrågningar med hämta API.
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import GroupedButtons from "./GroupedButtons";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import "./Books.scss";

const BooksTable = ({ loggedInAsUser, loggedInAsAdmin }) => {
  // console.log("loggedInAsUser: ", loggedInAsUser);
  const userData = JSON.parse(sessionStorage.getItem("userData"));

  const [booksData, setBooksData] = useState(null);
  const [booksError, setBooksError] = useState("");

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:3000/library/books");
      if (!response.ok) {
        throw new Error("Request failed with status: " + response.status);
      }

      const data = await response.json();
      setBooksData(data.books);
    } catch (error) {
      setBooksError(error.message);
    }
  };

  const handleEdit = async (book) => {
    const data = JSON.stringify({ book });

    fetch("http://localhost:3000/library/books", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorization: userData.token,
      },
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === undefined) {
          alert("Failed");
        } else {
          alert(data.message);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDelete = async (book) => {
    const data = JSON.stringify({ title: book });
    console.log(data);

    fetch("http://localhost:3000/admin/books", {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        authorization: userData.token,
      },
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === undefined) {
          alert("Failed");
        } else {
          window.location.reload(false);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const DisplayTable = () => {
    return (
      <>
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
            justifyContent: "center",
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
            marginBottom: 3,
            // marginBottom: 4,
            marginLeft: 6,
            marginRight: 6,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            // justifycontent: "space-between",
          }}
        >
          <Table
            data-testid="books-table"
            sx={{ minWidth: 650 }}
            aria-label="simple table"
          >
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
                    <Typography
                      component="h1"
                      variant="h5"
                      inputProps={{ "data-testid": "order-row" }}
                    >
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
              {booksData.map((book) => (
                <TableRow key={book.author} disabled={true}>
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
                      <PrimaryButton
                        variant="contained"
                        sx={{ m: 2 }}
                        onClick={handleEdit}
                      >
                        Edit
                      </PrimaryButton>
                      <PrimaryButton
                        variant="contained"
                        data-testid="Delete"
                        onClick={() => handleDelete(book.title)}
                      >
                        Delete
                      </PrimaryButton>
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </>
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
