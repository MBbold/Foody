import { Box } from "@mui/system"
import { Outlet } from "react-router-dom"
import { NavBar } from "../component/NavBar"
import { Sidebar } from "../component/Sidebar"
import DehazeIcon from '@mui/icons-material/Dehaze';


export const Layout = () => {
    return (
        <>
            <Box sx={{ width: '100vw', display: 'flex' }}>
                <Sidebar />
                <Box p={1} sx={{ display: { xs: "block", sm: "none" }, backgroundColor: 'adminColor.main', color: '#FFF' }}>
                    <DehazeIcon />
                </Box>
                <Box sx={{
                    width: '100%',
                }}>
                    <NavBar />
                    <Outlet />
                </Box>
            </Box>
        </>
    )
}