import { Request, Response } from "express";
import { COURSES } from "./db-data";

export function saveCourse(req: Request, res: Response) {
  console.log("Saving course ...");

  const id = req.params["id"],
    reqBody = req.body;


  COURSES[id] = {
    ...COURSES[id],
    ...reqBody.changes,
  };

  setTimeout(() => {
    res.status(200).json(COURSES[id]);
  }, 2000);
}
