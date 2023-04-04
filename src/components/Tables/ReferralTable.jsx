import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import ReferralSearchBar from '../SearBars/ReferralSearchBar';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Api from '../../config';
import { toast } from 'react-toastify';
import { formatNumber } from '../../constant';
const columns = [
	{ id: 'createdAt', label: '일자', minWidth: 200 },
	{ id: 'fullName', label: '이름', minWidth: 200 },

	{
		id: 'walletAddress',
		label: '입금지갑',
		minWidth: 200,
		align: 'left',
	},
	{
		id: 'depositedWon',
		label: '입금액(원)',
		minWidth: 200,
		align: 'left',
	},
	{
		id: 'myReward',
		label: '캐시 보상',
		minWidth: 200,
		align: 'left',
	},
	{
		id: 'statusSign',
		label: '상태',
		minWidth: 200,
		align: 'left',
	},
];

export default function ReferralTable() {
	let [page, setPage] = useState(0);
	let [rowsPerPage, setRowsPerPage] = useState(100);
	let [totalCount, seTotalCount] = useState(0);
	let [filter, setFilter] = useState('all');
	let [nextPage, setNextPage] = useState(1);
	let [referralHistory, setreferralHistory] = useState([]);
	let [userUpdateHistory, setUserUpdateHistory] = useState({
		status: null,
		id: null,
	});
	const statusFormat = (item) => {
		return item == 0
			? '입금대기'
			: item == 1
			? '락업기간'
			: item == 2
			? '출금가능'
			: item == 3
			? '출금대기'
			: '출금완료';
	};
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
			let { data } = await Api.post(
				'admin/getAllReferralCashRewardHistory',
				filter == 'all'
					? {
							page: ++page,
							limit: rowsPerPage,
					  }
					: {
							page: ++page,
							limit: rowsPerPage,
							status: filter,
					  }
			);
			console.log('data.data', data.data);
			for (let i = 0; i < data.data.length; i++) {
				data.data[i].createdAt =
					new Date(
						parseInt(data.data[i]._id.toString().substring(0, 8), 16) * 1000
					).toLocaleDateString() +
					' ' +
					new Date(
						parseInt(data.data[i]._id.toString().substring(0, 8), 16) * 1000
					).toLocaleTimeString();
				data.data[i].fullName = data.data[i].referredTo.fullName;
				data.data[i].walletAddress = data.data[i].referredTo.walletAddress;
				data.data[i].statusSign = statusFormat(data.data[i].status);
				data.data[i].depositedWon = formatNumber(data.data[i].depositedWon);
				data.data[i].myReward = formatNumber(data.data[i].myReward);
			}
			setreferralHistory(data.data);
		} catch (error) {
			console.error('error while handle page change', error);
		}
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};
	const getReferralHistory = async () => {
		try {
			let { data } = await Api.post(
				'admin/getAllReferralCashRewardHistory',
				filter == 'all'
					? {
							page: '1',
							limit: rowsPerPage,
					  }
					: {
							page: '1',
							limit: rowsPerPage,
							status: filter,
					  }
			);
			console.log('data', data.data);
			for (let i = 0; i < data.data.length; i++) {
				data.data[i].createdAt =
					new Date(
						parseInt(data.data[i]._id.toString().substring(0, 8), 16) * 1000
					).toLocaleDateString() +
					' ' +
					new Date(
						parseInt(data.data[i]._id.toString().substring(0, 8), 16) * 1000
					).toLocaleTimeString();
				data.data[i].fullName = data.data[i].referredTo.fullName;
				data.data[i].walletAddress = data.data[i].referredTo.walletAddress;
				data.data[i].statusSign = statusFormat(data.data[i].status);
				data.data[i].depositedWon = formatNumber(data.data[i].depositedWon);
				data.data[i].myReward = formatNumber(data.data[i].myReward);
			}
			setreferralHistory(data.data);
			seTotalCount(data.meta.totalCount);
		} catch (error) {
			console.error('error while get pusrchase history', error);
		}
	};
	useEffect(() => {
		getReferralHistory();
	}, [rowsPerPage, filter]);
	const updateReferralHistory = async () => {
		try {
			if (userUpdateHistory.status != null) {
				let response = await Api.post(
					'admin/updateReferralCashRewardStatus',
					userUpdateHistory
				);
				toast.success(response.data.showableMessage);
				setUserUpdateHistory({
					status: null,
					id: null,
				});
				getReferralHistory();
			} else {
				toast.info('Please change the status');
			}
		} catch (error) {
			toast.error(error.response.data.showableMessage);
			console.error('error while update user history', error);
		}
	};
	return (
		<Paper sx={{ width: '100%', overflow: 'hidden' }}>
			<ReferralSearchBar filterAciton={setFilter} filter={filter} />
			{referralHistory.length > 0 && (
				<TableContainer
					className="navBarBg121 text-warning"
					sx={{ maxHeight: 440 }}
				>
					<Table stickyHeader aria-label="sticky table">
						<TableHead>
							<TableRow>
								{columns.map((column) => (
									<TableCell
										className="fw-bold  bgColors text-warning"
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
							{referralHistory.map((row, index) => {
								return (
									<TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
										{columns.map((column) => {
											const value = row[column.id];
											return (
												<TableCell
													key={column.id}
													align={column.align}
													className="navBarBg121"
												>
													{column.format && typeof value === 'number'
														? column.format(value)
														: value}
												</TableCell>
											);
										})}
										<button
											type="button"
											className="btn  btn-outline-warning shadow-none"
											data-bs-toggle="modal"
											data-bs-target={`#exampleModal${index}`}
										>
											<BorderColorIcon />
										</button>

										{/* <!-- Modal --> */}
										<div
											className="modal fade"
											id={`exampleModal${index}`}
											tabIndex="-1"
											aria-labelledby="exampleModalLabel"
											aria-hidden="true"
										>
											<div className="modal-dialog modal-dialog-centered">
												<div className="modal-content">
													<div className="modal-header">
														<h5
															className="modal-title"
															id="exampleModalToggleLabel"
														>
															Status Action
														</h5>
														<button
															type="button"
															className="btn-close"
															data-bs-dismiss="modal"
															aria-label="Close"
														></button>
													</div>
													<div className="modal-body text-center  mb-5">
														<select
															className="form-select"
															name=""
															id=""
															value={
																userUpdateHistory.id === row._id
																	? userUpdateHistory.status
																	: row.status || '0'
															}
															onChange={(e) => {
																setUserUpdateHistory({
																	status: e.target.value,
																	id: row._id,
																});
															}}
														>
															<option value="0">
																입금대기
																{/* Deposite pending */}
															</option>
															<option value="1">
																락업기간
																{/* LockedUp */}
															</option>
															<option value="2">
																출금가능
																{/* Withdraw Available */}
															</option>
															<option value="3">
																출금대기
																{/* Withdraw Pending */}
															</option>
															<option value="4">
																출금완료
																{/* Withdrawal complete */}
															</option>
														</select>
													</div>
													<div
														className="d-flex justify-content-around mb-5 px-3"
														style={{ gap: '12px' }}
													>
														<button
															className="btn btn-outline-success w-100"
															onClick={updateReferralHistory}
														>
															저장
														</button>
														{/* <button type="button" className='btn btn-danger w-100 ' data-bs-dismiss="modal" aria-label="Close">No?</button> */}
													</div>
												</div>
												{/* <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalToggleLabel">Status Action</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div className="modal-body text-start">
                            <div>
                              <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                <label className="htmlForm-check-label" for="exampleRadios1">
                                  Deposite pending
                                </label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
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
                          <div className="d-flex justify-content-around mb-5 px-3" style={{ gap: "12px" }}>
                            <button className='btn btn-outline-success w-100'>Save</button>
                            <button className='btn btn-danger w-100'>Cancal</button>
                          </div>
                        </div> */}
											</div>
										</div>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</TableContainer>
			)}
			{referralHistory.length > 0 && (
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
