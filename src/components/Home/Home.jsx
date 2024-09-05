import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Rating from '@mui/material/Rating';
import Grid from '@mui/material/Grid'


const style = {
    py: 0,
    width: '100%',
    maxWidth: 360,
    borderRadius: 2,
    border: '1px solid',
    borderColor: 'divider',
    backgroundColor: 'background.paper',
  };
  
const Home = () => {
    
    return (
        <> 
            <h1>My skills</h1>
            <Grid container spacing={2}>
                <Grid size={5}>
                    <List sx={style}>
                        <ListItem>
                            <ListItemText primary="HTML5/CSS3" />
                            <Rating name="disabled" value={5}  />
                        </ListItem>
                        <Divider component="li" />
                        <ListItem>
                            <ListItemText primary="Figma/ Photoshop" />
                            <Rating name="disabled" value={4.2} />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem>
                            <ListItemText primary="React.JS" />
                            <Rating name="disabled" value={4}  />
                        </ListItem>
                        <Divider variant="middle" component="li" />
                        <ListItem>
                            <ListItemText primary="WooCommerce/ Elementor" />
                            <Rating name="disabled" value={4.5} />
                        </ListItem>
                    </List>
                </Grid>
                <Grid size={5}>
                    <List sx={style}>
                        <ListItem>
                            <ListItemText primary="Java Script/ JQuery" />
                            <Rating name="disabled" value={4}  />
                        </ListItem>
                        <Divider component="li" />
                        <ListItem>
                            <ListItemText primary=" PHP/ Type Script" />
                            <Rating name="disabled" value={3.2} />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem>
                            <ListItemText primary="Bootstrap(3-5)" />
                            <Rating name="disabled" value={5}  />
                        </ListItem>
                    </List> 
                </Grid>
            </Grid>
        </>
    );
};

export default Home;
