import {
    Box,
    Paper,
    Typography,
    Button,
    TextField,
    Alert
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { makeStyles } from "@material-ui/core/styles";
import TodoCard from "./TodoCard";
import { useQuery, useMutation } from "@apollo/client";
import { CREATE_TODO, GET_TODO } from "../graphql/todos";
import { useState } from "react";

const useStyle = makeStyles({
    paper: {
        marginTop: "2vh",
        minWidth: 1000,
        minHeight: 700
    },
    box: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center"
    },
    box1: {
        marginTop: "5vh",
        display: "flex",
        flexWrap: "wrap",
        justifySelf: "center",
        alignSelf: "center",
        "& > :not(style)": {
            m: 3
        }
    },
    alert: {
        width: 250,
        margin: "auto",
        marginTop: 20,
        alignItems: "center",
        alignSelf: "center"
    }
});

export default function CardComponent() {
    const styles = useStyle();

    const { data, loading } = useQuery(GET_TODO);

    const [alert, setAlert] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [createTodo] = useMutation(CREATE_TODO, {
        refetchQueries: [GET_TODO, "GetTodos"]
    });

    if (loading) {
        return <h1> Loading Todos </h1>;
    }

    const handleAddTodo = () => {
        setAlert(false);
        title === "" || content === ""
            ? setAlert("No Fields should be empty!")
            : createTodo({
                  variables: {
                      createTodoTodoInput: { title: title, content: content }
                  }
              });
    };

    return (
        <Paper className={styles.paper} elevation={5}>
            <Typography
                align="center"
                gutterBottom
                fontWeight="light"
                fontSize="60px"
                variant="inherit"
            >
                Todos
            </Typography>
            <Box className={styles.box}>
                <TextField
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    variant="outlined"
                    label="Title"
                />
                <TextField
                    required
                    onChange={(e) => setContent(e.target.value)}
                    style={{ marginLeft: 15 }}
                    variant="outlined"
                    label="Content"
                />
                <Button
                    onClick={handleAddTodo}
                    color="success"
                    variant="contained"
                    style={{ marginLeft: 15 }}
                    endIcon={<Add />}
                >
                    Add
                </Button>
            </Box>
            {!!alert && (
                <Alert className={styles.alert} severity="error">
                    {alert}
                </Alert>
            )}
            <Box className={styles.box1}>
                {data &&
                    data.todos.map((todo) => {
                        return (
                            <TodoCard
                                id={todo.id}
                                title={todo.title}
                                content={todo.content}
                            />
                        );
                    })}
            </Box>
        </Paper>
    );
}
