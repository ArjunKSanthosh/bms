import { Router } from "express";
import * as mov from "./requesthandler.js";

const router=Router();
router.route("/addmovie").post(mov.addMovie);
router.route("/getmovie").get(mov.getMovies);

export default router;