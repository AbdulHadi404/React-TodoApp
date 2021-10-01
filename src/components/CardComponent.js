import { Box, Paper, Typography, Button, TextField } from '@mui/material';
import { Add } from '@mui/icons-material';
import { makeStyles } from '@material-ui/core/styles';
import TodoCard from './TodoCard';


const useStyle = makeStyles({
  paper: {
    marginTop: "2vh",
    minWidth: 1000,
    minHeight: 700
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
  },
  box1:{
    marginTop: '5vh',
          display: 'flex',
          flexWrap: 'wrap',
          justifySelf: 'center',
          alignSelf: 'center',
          '& > :not(style)': {
            m: 3,
          }
  }
});

export default function CardComponent() {
  const styles = useStyle();
  return (
    <Paper className={styles.paper} elevation={5}>
      <Typography align="center" gutterBottom fontWeight="light" fontSize="60px" variant="inherit">Todos</Typography>
      <Box className={styles.box}>
        <TextField variant="outlined" label="Title" />
        <TextField style={{marginLeft: 15}} variant="outlined" label="Content" />
        <Button color="success" variant="contained" style={{marginLeft: 15}} endIcon={<Add />}>
          Add
        </Button>
      </Box>
      <Box
        className={styles.box1}
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