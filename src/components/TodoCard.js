import {Card,CardActions,CardContent,Typography,IconButton} from '@mui/material';
import {Delete,Edit} from '@mui/icons-material';


const TodoCard = () => {
    return (
        <Card sx={{ maxWidth: 225 , margin: 2}}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton>
                    <Edit />
                </IconButton>
                <IconButton>
                    <Delete />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default TodoCard