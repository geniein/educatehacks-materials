import { Helmet } from 'react-helmet-async';
import React, { useContext, useEffect, useState } from 'react';
import {
  Card,
  Table,
  Stack,
  Paper,
  Avatar,
  Button,
  Popover,
  Checkbox,
  TableRow,
  MenuItem,
  TableBody,
  TableCell,
  Container,
  Typography,
  IconButton,
  TableContainer,
  TablePagination,
  Box,
} from '@mui/material';
//icon
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import config from '../../utils/config';
import InboxHead from './InboxHead';
import inbox from '../../mock/inbox';
import { Context } from '../../utils/contextProvider';
import InboxContainer from './InboxContainer';
// import Modal from '../../components/Modal/Modal';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'title', label: 'Title', alignRight: false },
  { id: 'author', label: 'Author', alignRight: false },
  { id: 'createdAt', label: 'Date', alignRight: false },  
  { id: '' },
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  
  if (query) {    
    return array.filter((_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

const Inbox = () =>{

  const [open, setOpen] = useState(null);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('name');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [inBoxList, setInBoxList] = useState([]);
  const [inBoxListRender, setInBoxListRender] = useState(false);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = inBoxList.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };
  //hooks
  useEffect(()=>{
    const server = config.server+"/inbox/getlist";
    
    axios
    .get(server)
    .then((res)=>{         
        if(res.data)setInBoxList(res.data);        
    })
    
  },[])

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - inBoxList.length) : 0;

  const filteredUsers = applySortFilter(inBoxList, getComparator(order, orderBy), filterName);

  const isNotFound = !filteredUsers.length && !!filterName;
    //Modal
//   const [showModal, setShowModal] = useState(false);
    const { loggedUser, showModal, setShowModal, modalFlag, setModalFlag } = useContext(Context);  

  const onClickViewModal = (id, e) =>{    
    e.preventDefault();
    setShowModal(!showModal);
    setModalFlag({flag:"VIEW",id:id.id});
  }

  const onClickPostModal = (e) =>{    
    setShowModal(!showModal);
    setModalFlag({flag:"POST"});
  }

  return (
    <>
      <Helmet>
        <title> Inbox</title>
      </Helmet>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
          Inbox
          </Typography>
          {loggedUser.occupation =="TEACHER" && <Button variant="contained" startIcon={<AddIcon/>} onClick={onClickPostModal}>
            New Post
          </Button> 
            }        
        </Stack>
      <InboxContainer inboxTitle={"NOTICE"} inboxType={"NOTICE"} inboxState={["UNCHECKED","CHECKED"]}/>
      <InboxContainer inboxTitle={"Not confirmed yet"} inboxType={"MESSAGE"} inboxState={["UNCHECKED"]}/>
      <InboxContainer inboxTitle={"Confirmed"} inboxType={"MESSAGE"} inboxState={["CHECKED"]}/>
    </>
  );
}

export default Inbox 