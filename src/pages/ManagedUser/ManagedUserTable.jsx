import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'Employee ID', width: 150, headerAlign: 'center', align: 'center' },
  { field: 'employeeName', headerName: 'Employee Name', width: 200, headerAlign: 'center', align: 'center' },
  { field: 'emailId', headerName: 'Email ID', width: 250, headerAlign: 'center', align: 'center' },
  { field: 'module', headerName: 'Module', type: 'number', width: 200, headerAlign: 'center', align: 'center' },
  { field: 'status', headerName: 'Access Status', width: 150, headerAlign: 'center', align: 'center' },
  {
    field: 'action',
    headerName: 'Actions',
    width: 150,
    headerAlign: 'center',
    align: 'center',
    renderCell: (params) => (
      <Box sx={{
        '& :focus': {
          outline: 'none'
        }
      }}>
        <EditIcon className="cursor-pointer mr-2" style={{ color: '#006BD6', }} onClick={() => handleEdit(params.id)} />
        <DeleteIcon className="cursor-pointer" style={{ color: 'red' }}onClick={() => handleDelete(params.id)} />
      </Box>
    ),
  },
];

const rows = [
  { id: 1, employeeName: 'Snow', emailId: 'Jon@gmail.com', module: 35 , status: "Active"},
  { id: 2, employeeName: 'Lannister', emailId: 'Cersei@gmail.com', module: 42 , status: "Active"},
  { id: 3, employeeName: 'Lannister', emailId: 'Jaime@gmail.com', module: 45, status: "Active"},
  { id: 4, employeeName: 'Stark', emailId: 'Arya@gmail.com', module: 16, status: "Active"},
  { id: 5, employeeName: 'Targaryen', emailId: 'Daenerys@gmail.com', module: 33 , status: "Active"},
  { id: 6, employeeName: 'Melisandre', emailId: "a@gmail.com", module: 150 , status: "Active"},
  { id: 7, employeeName: 'Clifford', emailId: 'Ferrara@gmail.com', module: 44 , status: "Active"},
  { id: 8, employeeName: 'Frances', emailId: 'Rossini@gmail.com', module: 36 , status: "Active"},
  { id: 9, employeeName: 'Roxie', emailId: 'Harvey@gmail.com', module: 65 , status: "Active"},
];

const ManagedUserTable = () => {
  const handleEdit = (id) => {
    // Handle edit action
    console.log("Edit clicked for ID:", id);
  };

  const handleDelete = (id) => {
    // Handle delete action
    console.log("Delete clicked for ID:", id);
  };

  return (
    <>
      <div className="w-full flex flex-row items-center p-5">
        <h2 className="">Set Module Admin</h2>
        <p className="hidden lg:flex">
          <input type="text" placeholder="Search by ID / Name" className="outline-none px-4 py-2 rounded-lg" />
        </p>
      </div>

      <div className='w-full p-5'>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
          autoHeight
        />
      </div>
    </>
  );
};

export default ManagedUserTable;
