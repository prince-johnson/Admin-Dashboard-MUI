import { Typography, Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockData } from '../../data/mockData';

import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from "@mui/icons-material";
import Header from "../../components/Header";;

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = ({ field: 'id', headerName: "ID" },
        { filed: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell" },
        { field: 'age', headerName: "age", type: "number", headerAlign: 'left', align: 'left' },
        { filed: "phone", headerName: "phone number", felx: 1 },
        { field: 'email', headerName: "Email", flex: 1 },
        {
        field: "access", headerName: "Access Level", flex: 1, renderCell: ({ row: { access } }) => {
            return (
                <Box width="60%" m="0 auto" p="5px" display="flex" justifyContent="center" 
                backgroudColor={
                    access === "admin" ? colors.greenAccent[600] : colors.greenAccent[700]
                }
                borderRadius="4px"
                >
                    {access === 'admin' && <AdminPanelSettingsOutlined />}
                    {access === 'manager' && <SecurityOutlined/>}
                    {access === 'user' && <LockOpenOutlined/>}
                    <Typography color={colors.grey[100]} sx={{ ml:"5px"}}>
                        {access}
                    </Typography>

                </Box>
            )
        }
    }
    );
    return (
        <Box>
            <Header title="" subtitle="" ></Header>
            <Box>
                <DataGrid rows={mockData} columns={columns}>

            </DataGrid>
        </Box>
        </Box >
    )
}