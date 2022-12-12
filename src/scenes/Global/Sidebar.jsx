import React from 'react';
import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
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

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem
            active={selected === title}
            style={{ color: colors.grey[100] }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
            {/* <Link to={to} /> */}
        </MenuItem>
    )
}


const SidebarComponent = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <React.Fragment>
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
                <Sidebar defaultCollapsed={isCollapsed}
                >
                    {/* USER */}



                    <Menu
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        renderExpandIcon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={
                            {
                                margin: "10px 0 20px 0",
                                color: colors.grey[100]
                            }
                        }
                    >

                        {!isCollapsed && (

                            
                                <Box mb="25px">
                                    <Box display="flex" justifyContent="center" alignItems="center">
                                        <Typography>
                                            Admins
                                        </Typography>
                                        <IconButton>
                                            <MenuOutlinedIcon />
                                        </IconButton>
                                        <img
                                            alt="profile-user"
                                            width="100px"
                                            height="100px"
                                            src={`../../../assets/user.png`}
                                            style={{ cursor: "pointer", borderRadius: "50%" }} />

                                    </Box>
                                    <Box>
                                    <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{ m: "10px 0 0 0" }} >Prince Johnson</Typography>
                                    <Typography varient="h5" color={colors.greenAccent[500]}>VP Fancy Admin</Typography>
                                </Box>
                                <Box padding={isCollapsed ? undefined :
                                    "10%"}>
                                    <Item title="Dashboard"
                                        // to="/"
                                        icon={<HomeOutlinedIcon />}
                                        selectd={selected}
                                        setSelected={setSelected}
                                    />
                                    <Typography
                                        varient="h6"
                                        color={colors.grey[300]}
                                        sx={{ m: "15px 0 5px 20px" }}> Data</Typography>
                                    <Item title="manage Team"
                                        // to="/team"
                                        icon={<PeopleOutlinedIcon />}
                                        selectd={selected}
                                        setSelected={setSelected}
                                    />

                                    <Item title="Contacts Information"
                                        // to="/contacts"
                                        icon={<ContactsOutlinedIcon />}
                                        selectd={selected}
                                        setSelected={setSelected}
                                    />

                                    <Item title="Invoce Balances"
                                        // to="/invoices"
                                        icon={<ReceiptOutlinedIcon />}
                                        selectd={selected}
                                        setSelected={setSelected}
                                    />
                                    <Typography varient="h6"
                                        color={colors.grey[300]}
                                        sx={{ m: "15px 0 0 0" }}> Pages</Typography>

                                    <Item title="Profile Form"
                                        // to="/form"
                                        icon={<PersonOutlinedIcon />}
                                        selectd={selected}
                                        setSelected={setSelected}
                                    />
                                    <Item title="Calendar"
                                        // to="/calendar"
                                        icon={<CalendarTodayOutlinedIcon />}
                                        selectd={selected}
                                        setSelected={setSelected}
                                    />
                                    <Item title="FAQ"
                                        // to="/faq"
                                        icon={<HelpOutlineOutlinedIcon />}
                                        selectd={selected}
                                        setSelected={setSelected}
                                    />
                                    <Typography varient="h6"
                                        color={colors.grey[300]}
                                        sx={{ m: "15px 0 0 0" }}> Charts</Typography>
                                    <Item title="Bar Charts"
                                        // to="/bar"
                                        icon={<BarChartOutlinedIcon />}
                                        selectd={selected}
                                        setSelected={setSelected}
                                    />
                                    <Item title="Pie Chart"
                                        // to="/pie"
                                        icon={<PieChartOutlineOutlinedIcon />}
                                        selectd={selected}
                                        setSelected={setSelected}
                                    />
                                    <Item title="Line Chart"
                                        // to="/line"
                                        icon={<TimelineOutlinedIcon />}
                                        selectd={selected}
                                        setSelected={setSelected}
                                    />
                                    <Item title="Geography"
                                        // to="/geo"
                                        icon={<MapOutlinedIcon />}
                                        selectd={selected}
                                        setSelected={setSelected}
                                    />
                                </Box>
                                </Box>


                                

                        )}
                    </Menu>




                </Sidebar>
            </Box>
        </React.Fragment >
    );
}

export default SidebarComponent;