import express from "express";
import { db } from "../Config/db.config";
import { router } from "../Routes/posts.routes";

import { postServices } from "../Services/post.service";

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/v1/posts", router);

//db connection then server connection
db.then(() => {
  app.listen(8080, () =>
    console.log("Server is listening on http://localhost:8080")
  );
});
