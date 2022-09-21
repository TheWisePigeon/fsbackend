import { Router } from "express"
import announcementService from "../../services/announcement"

const router = Router()

router.route("/create").post(announcementService.createAnnoucement)

router.route("/get").get(announcementService.getAnnoucements)

router.route("/get/:id").post(announcementService.getAnnoucement)

router.route("/update/:id").post(announcementService.updateAnnoucement)

router.route("/delete/:id").post(announcementService.deleteAnnoucement)

export default router
