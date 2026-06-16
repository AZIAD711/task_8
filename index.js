import app from "./app.js";
import {connectionOfDatabase} from "./src/database/connection.js";
const databaseConnction = await connectionOfDatabase();
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});