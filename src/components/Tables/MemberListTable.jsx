import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import MemberSearchBar from "../SearBars/MemberSearchBar";

const columns = [
  { id: "name", label: "Name", minWidth: 200 },
  { id: "id", label: "\u00a0ID", minWidth: 100 },
  {
    id: "Phone",
    label: "Phone",
    minWidth: 200,
    align: "left",
  },
  {
    id: "Email",
    label: "Email",
    minWidth: 200,
    align: "left",
  },
  {
    id: "Deposit",
    label: "Deposit Wallet",
    minWidth: 200,
    align: "left",
  },
  {
    id: "Deposit_Amount",
    label: "Deposit Amount(won)",
    minWidth: 200,
    align: "left",
  },
  {
    id: "Total_Coin",
    label: "Total Coin",
    minWidth: 200,
    align: "left",
  },
  {
    id: "LookUp_Coin",
    label: "LookUp_Coin",
    minWidth: 200,
    align: "left",
  },
  {
    id: "Total_Cash",
    label: "Total Cash",
    minWidth: 200,
    align: "left",
  },
  {
    id: "LookUp_Cash",
    label: "LookUp Cash",
    minWidth: 200,
    align: "left",
  },
  {
    id: "Invitation_code",
    label: "Invitation code",
    minWidth: 200,
    align: "left",
  },
];

function createData(
  name,
  id,
  Phone,
  Email,
  Deposit,
  Deposit_Amount,
  Total_Coin,
  LookUp_Coin,
  Total_Cash,
  LookUp_Cash,
  Invitation_code
) {
  return {
    name,
    id,
    Phone,
    Email,
    Deposit,
    Deposit_Amount,
    Total_Coin,
    LookUp_Coin,
    Total_Cash,
    LookUp_Cash,
    Invitation_code,
  };
}

const rows = [
  createData(
    "India",
    "IN",
    1324171354,
    3287263,
    3287263,
    3287263,
    3287263,
    3287263,
    3287263,
    3287263,
    3287263
  ),
  createData(
    "China",
    "CN",
    1403500365,
    9596961,
    3287263,
    3287263,
    3287263,
    3287263,
    3287263,
    3287263,
    3287263
  ),
  createData(
    "Italy",
    "IT",
    60483973,
    301340,
    3287263,
    3287263,
    3287263,
    3287263,
    3287263,
    3287263,
    3287263
  ),
  createData(
    "United States",
    "US",
    327167434,
    9833520,
    3287263,
    3287263,
    3287263,
    3287263,
    3287263,
    3287263,
    3287263
  ),
  createData(
    "Canada",
    "CA",
    37602103,
    9984670,
    3287263,
    3287263,
    3287263,
    3287263,
    3287263,
    3287263,
    3287263
  ),
  createData(
    "Australia",
    "AU",
    25475400,
    7692024,
    3287263,
    3287263,
    3287263,
    3287263,
    3287263,
    3287263,
    3287263
  ),
  createData(
    "Germany",
    "DE",
    83019200,
    357578,
    3287263,
    3287263,
    3287263,
    3287263,
    3287263,
    3287263,
    3287263
  ),
  createData(
    "Ireland",
    "IE",
    4857000,
    70273,
    3287263,
    3287263,
    3287263,
    3287263,
    3287263,
    3287263,
    3287263
  ),
  createData(
    "Mexico",
    "MX",
    126577691,
    1972550,
    3287263,
    3287263,
    3287263,
    3287263,
    3287263,
    3287263,
    3287263
  ),
  createData(
    "Japan",
    "JP",
    126320000,
    377973,
    3287263,
    3287263,
    3287263,
    3287263,
    3287263,
    3287263,
    3287263
  ),
  createData(
    "France",
    "FR",
    67022000,
    640679,
    3287263,
    3287263,
    3287263,
    3287263,
    3287263,
    3287263,
    3287263
  ),
  createData(
    "United Kingdom",
    "GB",
    67545757,
    242495,
    3287263,
    3287263,
    3287263,
    3287263,
    3287263,
    3287263,
    3287263
  ),
  createData(
    "Russia",
    "RU",
    146793744,
    20098246,
    3287263,
    3287263,
    3287263,
    3287263,
    3287263,
    3287263,
    3287263
  ),
  createData(
    "Nigeria",
    "NG",
    200962417,
    923768,
    3287263,
    3287263,
    3287263,
    3287263,
    3287263,
    3287263,
    3287263
  ),
  createData(
    "Brazil",
    "BR",
    210147125,
    8515767,
    3287263,
    3287263,
    3287263,
    3287263,
    3287263,
    3287263,
    3287263
  ),
];

export default function MemberListTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <MemberSearchBar></MemberSearchBar>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  className="fw-bold "
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
