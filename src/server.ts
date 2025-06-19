import { createApp } from "./app";

const app = createApp();
const port: number = 3000;

app.listen(port, () => {
    console.log(`Server running in ${port}`);
});