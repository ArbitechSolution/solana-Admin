import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import CoinHistorySearchBar from "../SearBars/CoinHistorySearchBar";
import EditModal from "../EditModal/EditModal";
import BorderColorIcon from '@mui/icons-material/BorderColor';

const columns = [
  { id: "date", label: "Date", minWidth: 200 },
  { id: "name", label: "Name", minWidth: 200 },
  { id: "id", label: "\u00a0ID", minWidth: 200 },

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
    id: "Token_Quantity",
    label: "Token Quantity",
    minWidth: 200,
    align: "left",
  },
  {
    id: "Status",
    label: "Status",
    minWidth: 200,
    align: "left",
  },
];

function createData(
  date,
  name,
  id,
  Deposit,
  Deposit_Amount,
  Token_Quantity,
  Status
) {
  return {
    date,
    name,
    id,
    Deposit,
    Deposit_Amount,
    Token_Quantity,
    Status,
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

export default function CoinTable() {
  const [page, setPage] = React.useState(0);
  const[modelShow, setModelShow]=React.useState(false)
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
      <CoinHistorySearchBar></CoinHistorySearchBar>
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
               
   
               {/* <!-- Button trigger modal --> */}
<button type="button" class="btn shadow-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
<BorderColorIcon/>
</button>

{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalToggleLabel">Status Action</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body text-start">
      <div>
      <div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
  <label className="htmlForm-check-label" for="exampleRadios1">
   Deposite pending
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
  <label className="htmlForm-check-label" for="exampleRadios2">
   LockedUp 
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
  <label className="htmlForm-check-label" for="exampleRadios3">
    Withdraw Available
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="option4" />
  <label className="htmlForm-check-label" for="exampleRadios4">
    Withdraw Pending
  </label>
</div>
      </div>
      </div>
    <div className="d-flex justify-content-around mb-5 px-3" style={{gap:"12px"}}>
      <button className='btn btn-outline-success w-100'>Save</button>
      <button className='btn btn-danger w-100'>Cancal</button>
    </div>
    </div>
  </div>
</div>



                
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
