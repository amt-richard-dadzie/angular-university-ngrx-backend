import * as express from "express";
import { Application, Response, Request } from "express";
import { getAllCourses, getCourseByUrl } from "./get-courses.route";
import { searchLessons } from "./search-lessons.route";
import { loginUser } from "./auth.route";
import { saveCourse } from "./save-course.route";
import { createCourse } from "./create-course.route";
import { deleteCourse } from "./delete-course.route";

const bodyParser = require("body-parser");

const app: Application = express();

const cors = require("cors");

app.use(cors({ origin: true }));

app.use(bodyParser.json());

app.route("/").get((req: Request, res: Response) => {
  res.status(200).json({ health: "good" });
});

app.route("/api/login").post(loginUser);

app.route("/api/courses").get(getAllCourses);

app.route("/api/course").post(createCourse);

app.route("/api/course/:id").put(saveCourse);

app.route("/api/course/:id").delete(deleteCourse);

app.route("/api/courses/:courseUrl").get(getCourseByUrl);

app.route("/api/lessons").get(searchLessons);

const port = 9000;

app.listen(port
  , () => {
  console.log(
    "HTTP REST API Server running at http://localhost:" +
    port
  );
});

export default app;
