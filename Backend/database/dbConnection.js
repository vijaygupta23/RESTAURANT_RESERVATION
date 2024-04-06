import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "RestaurantApp",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};



//mongodb://localhost:27017//RestaurantApp
//mongodb+srv://vijay:<password>@cluster0.1zllmrs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0