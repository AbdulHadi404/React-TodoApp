import { gql } from "@apollo/client";

export const GET_TODO = gql`
    query GetTodos {
        todos {
            id
            title
            content
        }
    }
`;

export const CREATE_TODO = gql`
    mutation CreateTodo($createTodoTodoInput: TodoInput) {
        createTodo(todoInput: $createTodoTodoInput) {
            id
            content
            title
        }
    }
`;

export const UPDATE_TODO = gql`
    mutation UpdateTodo($updateTodoId: ID!, $updateTodoTodoInput: TodoInput) {
        updateTodo(id: $updateTodoId, todoInput: $updateTodoTodoInput) {
            content
            id
            title
        }
    }
`;

export const DELETE_TODO = gql`
    mutation DeleteTodo($deleteTodoId: ID!) {
        deleteTodo(id: $deleteTodoId) {
            id
            title
            content
        }
    }
`;
