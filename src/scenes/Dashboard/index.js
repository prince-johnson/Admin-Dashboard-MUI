import { Box } from "@mui/material"
import Header from '../../components/Header';

const Dashboard = () => {
    return <Box>
        <Box display="flex" justifyItems="space-between" alignItems="center">
            <Header title="Dashboard"
                subtitle="Welcome to your dashboard">
            </Header>
        </Box>
    </Box>
}
export default Dashboard;