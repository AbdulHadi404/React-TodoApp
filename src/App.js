import "./App.css";
import CardComponent from "./components/CardComponent";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const App = () => {
    const client = new ApolloClient({
        cache: new InMemoryCache(),
        uri: "http://localhost:4000/graphql"
    });
    return (
        <ApolloProvider client={client}>
            <div className="App">
                <CardComponent />
            </div>
        </ApolloProvider>
    );
};

export default App;
