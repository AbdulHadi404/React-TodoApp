import {
    Card,
    CardActions,
    CardContent,
    Typography,
    IconButton
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { useMutation } from "@apollo/client";
import { DELETE_TODO, GET_TODO } from "../graphql/todos";

const TodoCard = ({ title, content, id }) => {
    const [deleteTodo] = useMutation(DELETE_TODO, {
        refetchQueries: [GET_TODO, "GetTodos"]
    });
    const handleDeleteTodo = () => {
        deleteTodo({ variables: { deleteTodoId: id } });
    };

    return (
        <Card sx={{ maxWidth: 225, margin: 2 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {content}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton>
                    <Edit />
                </IconButton>
                <IconButton onClick={handleDeleteTodo}>
                    <Delete />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default TodoCard;
