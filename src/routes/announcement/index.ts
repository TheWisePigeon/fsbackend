import { Router } from "express"
import announcementService from "../../services/announcement"

const router = Router()

router.route("/create").post(announcementService.createAnnoucement)

router.route("/get").get(announcementService.getAnnoucements)

router.route("/update").put(announcementService.updateAnnoucement)

router.route("/delete").delete(announcementService.deleteAnnoucement)

export default router
