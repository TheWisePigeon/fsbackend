import { Router } from "express"
import formationService from "../../services/formation"

const router = Router()

router.route("/create").post(formationService.createFormation)

router.route("/get").get(formationService.getFormations)

router.route("/update").put(formationService.updateFormation)

router.route("/delete").delete(formationService.deleteFormation)

export default router
