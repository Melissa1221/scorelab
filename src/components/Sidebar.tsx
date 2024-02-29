import { AppBar, Box, CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox'
import QuizIcon from '@mui/icons-material/Quiz'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import '../styles/sidebar.css'
import FormTeacher from './FormTeacher';
import Instructions from './Instructions';

const drawerWidth = 270


const sidebar = () => {
  return (
    <>
      <CssBaseline/>
      
      <AppBar
        position='fixed' sx={{width:'calc(100% - ${drawerWidth}px)', ml: '${drawerWidth}'}}    
        className='appbar'>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
              User
          </Typography>
        </Toolbar>
      </AppBar>

        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',

            },
            
          }}
          variant='permanent'
          anchor='left'
          className='drawer'
          
        >
          <Toolbar className='toolbar'>
            <Typography variant="h5" noWrap component="div" className='logo-text' >
              SCORELAB
            </Typography>
            <List>
              {['Mis evaluaciones', 'Crear evaluación', 'Estadísticas' ,'Mi perfil', 'Salir' ].map((text, index) => (
                <ListItem key={text} disablePadding>

                  
                  <ListItemButton className='ListItemButton'>

                    <ListItemIcon>
                      {
                        index === 0 ? <QuizIcon sx={{color: '#fff'}}/> : 
                        (index === 1 ? <AddCircleIcon sx={{color: '#fff'}}/>: 
                        (index === 2 ? <AccountBoxIcon sx={{color: '#fff'}}/>: 
                        (index === 3 ? <LeaderboardIcon sx={{color: '#fff'}}/> : 
                        (index === 4 ? <ExitToAppIcon sx={{color: '#fff'}}/> : <InboxIcon/>)))) 
                      }
                    </ListItemIcon>
                    <ListItemText primary = {text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Toolbar>
        </Drawer>
        <div style={{display:'flex'}} className='box-content'>
        <FormTeacher/>
        <Instructions/>
        </div>
    
      
    </>
  )
}

export default sidebar