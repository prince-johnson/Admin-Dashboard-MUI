import React from 'react';
import { useState } from "react";
import { Sidebar, Menu, MenuItem, ProSidebarProvider } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
// import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const SidebarComponent = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <React.Fragment>
            <ProSidebarProvider>
                <Box sx={{
                    "& .pro-sidebar-inner": {
                        background: `${colors.primary[400]} !important`,
                    },
                    "& .pro-icon-wrapper": {
                        backgroundColor: "transparent !important",
                    },
                    "& .pro-inner-item": {
                        padding: "5px 35px 5px 20px !important",
                    },
                    "& .pro-inner-item:hover": {
                        color: "#868dfb !important",
                    },
                    "& .pro-menu-item.active": {
                        color: "#6870fa !important",
                    },
                }}>
                    <Sidebar>
                        {/* USER */}
                        {
                            isCollapsed && (
                                <Box mb="25px">
                                    <Box display="flex" justifyContent="center" alignItems="center">
                                        <img
                                            alt="profile-user"
                                            width="100px"
                                            height="100px"
                                            src={`../../../assets/user.png`}
                                            style={{ cursor: "pointer", borderRadius: "50%" }}
                                        />
                                    </Box>
                                    <Box>
                                        <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{ m: "10px 0 0 0" }} >Prince Johnson</Typography>
                                        <Typography varient="h5" color={colors.greenAccent[500]}>VP Fancy Admin</Typography>
                                    </Box>
                                </Box>
                            )
                        }
                    </Sidebar>
                </Box>
            </ProSidebarProvider>
        </React.Fragment>
    );
}

export default SidebarComponent;