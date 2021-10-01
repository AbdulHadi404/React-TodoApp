import {Box,Paper,Typography,Button,TextField} from '@mui/material';
import {Add} from '@mui/icons-material';
import TodoCard from './TodoCard';

export default function InputCard() {
  return (
<Paper style={{marginTop:"2vh",minWidth: 1000,minHeight: 700}} elevation={5}>
  <Typography align="center" gutterBottom fontWeight="light" fontSize="60px" variant="inherit">Todos</Typography>
  <Box  style={{display:'flex',justifyContent:'center', alignContent:'center'}}>
      <TextField  variant="outlined" label="Title"  />
      <TextField  style={{marginLeft:15}} variant="outlined" label="Content"  />
      <Button color="success" variant="contained" style={{marginLeft:15}}  endIcon={<Add />}>
Add
      </Button>
    </Box>
    <Box
      sx={{
        marginTop: '5vh',
        display: 'flex',
        flexWrap: 'wrap',
        justifySelf: 'center',
        alignSelf: 'center',
        '& > :not(style)': {
          m: 3,
        },
      }}
      >
        
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
      
    </Box>
      </Paper>
  );
}