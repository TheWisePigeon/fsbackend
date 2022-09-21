import { Router } from "express"
import formationService from "../../services/formation"

const router = Router()

router.route("/create").post(formationService.createFormation)

router.route("/get").get(formationService.getFormations)

router.route("/get/:id").post(formationService.getFormation)

router.route("/update/:id").post(formationService.updateFormation)

router.route("/delete/:id").post(formationService.deleteFormation)

export default router
