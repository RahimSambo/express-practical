const mongoose = require("mongoose");

const connection =
  "mongodb+srv://abdulrahimsambo25_db_user:Million$Pr0ject@cluster0.b9z7bxc.mongodb.net/?appName=Cluster0";

mongoose
  .connect(connection)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.log("Connection failed:", error);
  });

// mongodb+srv://abdulrahimsambo25_db_user:<db_password>@cluster0.b9z7bxc.mongodb.net/?appName=Cluster0
// mongodb+srv://abdulrahimsambo25_db_user:<db_password>@cluster0.b9z7bxc.mongodb.net/?appName=Cluster0
