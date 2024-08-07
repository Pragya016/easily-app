import { Router } from "express";
import { JobsController } from "../controllers/jobController.js";
import { Auth } from "../middlewares/authMiddleware.js";
import { ApplicantsController } from "../controllers/applicantsController.js";

const jobRoutes = Router();
const auth = new Auth();
const applicantsController = new ApplicantsController();

// job routes
jobRoutes.get('/', JobsController.displayJobView);
jobRoutes.get('/job-details/:id', JobsController.displayJobDetails);
// rooutes for recruiter actions
jobRoutes.get('/new', auth.checkCookie, JobsController.postNewJob)
jobRoutes.post('/new', JobsController.postJob)
jobRoutes.get('/update-job/:id', JobsController.displayUpdateJobForm);
jobRoutes.post('/update-job', JobsController.updateJobDetails)
jobRoutes.delete('/job-details/:id', JobsController.deleteJob)

jobRoutes.post('/job-details/:id', applicantsController.addApplicant)

export default jobRoutes;