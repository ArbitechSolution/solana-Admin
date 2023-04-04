import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import MemberSearchBar from "../SearBars/MemberSearchBar";
import { resolveAfter2Seconds } from "../../constant";
import { formatNumber } from "../../constant";
import Api from "../../config";
const columns = [
  { id: "fullName", label: "이름", minWidth: 200 },
  { id: "date", label: "가입일자", minWidth: 200 },
  {
    id: "phoneNumber",
    label: "연락처",
    minWidth: 200,
    align: "left",
  },
  {
    id: "email",
    label: "이메일",
    minWidth: 200,
    align: "left",
  },
  {
    id: "walletAddress",
    label: "입금지갑",
    minWidth: 200,
    align: "left",
  },
  {
    id: "coinAmount",
    label: "코인수량",
    minWidth: 200,
    align: "left",
  },
  {
    id: "totalLockedPurchasedCoin",
    label: "락업코인",
    minWidth: 200,
    align: "left",
  },
  {
    id: "totalRewardCoin",
    label: "캐시보상 전체",
    minWidth: 200,
    align: "left",
  },
  {
    id: "totalLockedRewardCoin",
    label: "캐시보상 락업",
    minWidth: 200,
    align: "left",
  },
  {
    id: "refCode",
    label: "초대코드",
    minWidth: 200,
    align: "left",
  },
];

export default function MemberListTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(100);
  const [memberData, setMemberData] = useState([]);
  const [totalCount, seTotalCount] = useState(0);
  let [nextPage, setNextPage] = useState(1);
  const handleChangePage = async (event, newPage) => {
    try {
      let inPage = newPage;
      if (newPage < page) {
        inPage = --nextPage;
        setNextPage(inPage);
      } else {
        inPage = ++nextPage;
        setNextPage(inPage);
      }
      setPage(newPage);
      let { data } = await Api.post("admin/getAllUsers", {
        page: inPage,
        limit: rowsPerPage,
      });
      setMemberData(data.data.users);
    } catch (error) {
      console.error("error while handle change page", error);
    }
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const getMemberList = async () => {
    try {
      let { data } = await Api.post("admin/getAllUsers", {
        page: 1,
        limit: rowsPerPage,
      });
      for (let i = 0; i < data.data.users.length; i++) {
        data.data.users[i].totalLockedPurchasedCoin = formatNumber(
          data.data.users[i].totalLockedPurchasedCoin
        );
        data.data.users[i].totalRewardCoin = formatNumber(
          data.data.users[i].totalRewardCoin
        );
        data.data.users[i].totalLockedRewardCoin = formatNumber(
          data.data.users[i].totalLockedRewardCoin
        );
        data.data.users[i].coinAmount = formatNumber(
          data.data.users[i].coinAmount
        );
      }
      setMemberData(data.data.users);
      seTotalCount(data.meta.totalCount);
    } catch (error) {
      console.error("error while get member list", error);
    }
  };
  useEffect(() => {
    getMemberList();
  }, [rowsPerPage]);
  const searchWithName = async (value) => {
    try {
      await resolveAfter2Seconds(1000);
      if (value.length > 1) {
        let { data } = await Api.post("admin/getAllUsers", {
          page: 1,
          limit: rowsPerPage,
          name: value,
        });
        setMemberData(data.data.users);
        seTotalCount(data.meta.totalCount);
      } else if (value.length < 1) {
        let { data } = await Api.post("admin/getAllUsers", {
          page: 1,
          limit: rowsPerPage,
        });
        setMemberData(data.data.users);
        seTotalCount(data.meta.totalCount);
      }
    } catch (error) {
      console.error("search with name", error);
    }
  };
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <MemberSearchBar searchWithName={searchWithName} />
      {memberData.length > 0 && (
        <TableContainer
          className="navBarBg121 text-warning"
          sx={{ maxHeight: 800 }}
        >
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    className="fw-bold  bgColors text-warning "
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
              {memberData
                // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            className="navBarBg121"
                          >
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
      )}
      {memberData.length > 0 && (
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={totalCount}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
    </Paper>
  );
}
