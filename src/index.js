import app from "./app";

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log('apollo server on 4000/graphql');
});