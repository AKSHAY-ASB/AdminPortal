import { useMemo, useState } from "react";
import {
  MRT_EditActionButtons,
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { modules, subModules } from "../../utils";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddUsers = () => {
  const [validationErrors, setValidationErrors] = useState({});

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "Id",
        enableEditing: false,
        size: 80,
      },
      {
        accessorKey: "moduleName",
        header: "Module Name",
        editVariant: "select",
        editSelectOptions: modules,
        muiEditTextFieldProps: {
          select: true,
          error: !!validationErrors?.moduleName,
          helperText: validationErrors?.moduleName,
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              moduleName: undefined,
            }),
        },
        size: 250,
      },
      {
        accessorKey: "subModule",
        header: "Sub Module",
        editVariant: "select",
        editSelectOptions: subModules,
        muiEditTextFieldProps: {
          select: true,
          error: !!validationErrors?.subModule,
          helperText: validationErrors?.subModule,
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              subModule: undefined,
            }),
        },
        size: 250,
      },
      {
        accessorKey: "request",
        header: "Comment for Request",
        muiEditTextFieldProps: {
          required: true,
          error: !!validationErrors?.request,
          helperText: validationErrors?.request,
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              request: undefined,
            }),
        },
        size: 300,
      },
    ],
    [validationErrors]
  );

  const { mutateAsync: createUser, isLoading: isCreatingUser } =
    useCreateUser();
  const {
    data: fetchedUsers = [],
    isError: isLoadingUsersError,
    isFetching: isFetchingUsers,
    isLoading: isLoadingUsers,
  } = useGetUsers();
  const { mutateAsync: updateUser, isLoading: isUpdatingUser } =
    useUpdateUser();
  const { mutateAsync: deleteUser, isLoading: isDeletingUser } =
    useDeleteUser();

  const handleCreateUser = async ({ values, table }) => {
    const newValidationErrors = validateUser(values);
    if (Object.values(newValidationErrors).some((error) => error)) {
      setValidationErrors(newValidationErrors);
      return;
    }
    setValidationErrors({});
    await createUser(values);
    table.setCreatingRow(null);
  };

  const handleSaveUser = async ({ values, table }) => {
    const newValidationErrors = validateUser(values);
    if (Object.values(newValidationErrors).some((error) => error)) {
      setValidationErrors(newValidationErrors);
      return;
    }
    setValidationErrors({});
    await updateUser(values);
    table.setEditingRow(null);
  };

  const openDeleteConfirmModal = (row) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      deleteUser(row.original.id);
    }
  };

  const table = useMaterialReactTable({
    columns,
    data: fetchedUsers,
    createDisplayMode: "modal",
    editDisplayMode: "modal",
    enableEditing: true,
    getRowId: (row) => row.id,
    positionActionsColumn: "last",
    displayColumnDefOptions: { "mrt-row-actions": { size: 360 } },
    muiToolbarAlertBannerProps: isLoadingUsersError
      ? {
          color: "error",
          children: "Error loading data",
        }
      : undefined,
    muiTableContainerProps: {
      sx: {
        minHeight: "500px",
      },
    },
    onCreatingRowCancel: () => setValidationErrors({}),
    onCreatingRowSave: handleCreateUser,
    onEditingRowCancel: () => setValidationErrors({}),
    onEditingRowSave: handleSaveUser,
    renderCreateRowDialogContent: ({ table, row, internalEditComponents }) => (
      <>
        <DialogTitle variant="h6">Create New Request</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          {internalEditComponents}
        </DialogContent>
        <DialogActions>
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </DialogActions>
      </>
    ),
    renderEditRowDialogContent: ({ table, row, internalEditComponents }) => (
      <>
        <DialogTitle variant="h3">Edit User</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          {internalEditComponents}
        </DialogContent>
        <DialogActions>
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </DialogActions>
      </>
    ),
    renderRowActions: ({ row, table }) => (
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <Tooltip title="Edit">
          <IconButton onClick={() => table.setEditingRow(row)}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton color="error" onClick={() => openDeleteConfirmModal(row)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>
    ),
    renderTopToolbarCustomActions: ({ table }) => (
      <Button
        variant="contained"
        onClick={() => {
          table.setCreatingRow(true);
        }}
      >
        Create New Request
      </Button>
    ),
    state: {
      isLoading: isLoadingUsers,
      isSaving: isCreatingUser || isUpdatingUser || isDeletingUser,
      showAlertBanner: isLoadingUsersError,
      showProgressBars: isFetchingUsers,
    },
  });

  return <MaterialReactTable table={table} />;
};

function useCreateUser() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (user) => {
      const response = await axios.post("http://localhost:3000/requests", user);
      return response.data;
    },
    onMutate: async (newUser) => {
      await queryClient.cancelQueries(["users"]);
      const previousUsers = queryClient.getQueryData(["users"]);
      const maxId = previousUsers.reduce(
        (max, user) => Math.max(max, user.id),
        0
      );
      newUser.id = maxId + 1;
      queryClient.setQueryData(["users"], (old) => [...old, newUser]);
      return { previousUsers };
    },
    onError: (err, newUser, context) => {
      queryClient.setQueryData(["users"], context.previousUsers);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["users"]);
      navigate("/productConfiguration");
    },
  });
}

function useGetUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:3000/requests");
      return response.data;
    },
    refetchOnWindowFocus: false,
  });
}

function useUpdateUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (user) => {
      const response = await axios.put(
        `http://localhost:3000/requests/${user.id}`,
        user
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    },
  });
}

function useDeleteUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (userId) => {
      await axios.delete(`http://localhost:3000/requests/${userId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    },
  });
}

const queryClient = new QueryClient();

const RequestModule = () => (
  <QueryClientProvider client={queryClient}>
    <AddUsers />
  </QueryClientProvider>
);

export default RequestModule;

const validateRequired = (value) => !!value.length;

function validateUser(user) {
  return {
    moduleName: !validateRequired(user.moduleName)
      ? "Module Name is Required"
      : "",
    subModule: !validateRequired(user.subModule)
      ? "Sub Module is Required"
      : "",
    request: !validateRequired(user.request) ? "Request is Required" : "",
  };
}
