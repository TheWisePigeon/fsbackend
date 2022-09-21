import { Request, Response } from "express"
import Annoucement from "../../models/announcement"
import utils from "../../utils"
const { logger } = utils

const createAnnoucement = async (req: Request, res: Response) => {
    const { title, media, description } = req.body
    const newAnnouncement = new Annoucement({
        title,
        media,
        description
    })
    newAnnouncement.save((err, result) => {
        if (err) {
            logger("error", `Failed to insert anouncement ${err.message} `)
            return res.status(500).send("Something went wrong")
        }
        logger("success", `New announcement added ${result.id}`)
    })
    return res.status(200).send({
        data: newAnnouncement
    })
}

const getAnnoucements = async ( _req: Request, res: Response) => {
    try {
        const announcements = await Annoucement.find()
        logger("success", "Announcements fetched")
        return res.status(200).send({
            data: announcements
        })
    } catch (error) {
        logger("error", `Failed to fetch announcements ${error}`)
        return res.status(500).send("Something went wrong")
    }
}

const updateAnnoucement = async (req: Request, res: Response) => {
    const id = req.body.id
    const { title, media, description } = req.body
    await Annoucement.findByIdAndUpdate(id, {title, media, description})
    const updatedAnnouncement = await Annoucement.findById(id)
    res.status(200).send({
        data: updatedAnnouncement
    })
}

const deleteAnnoucement = async (req: Request, res: Response) => {
    const id = req.body.id
    const deletedAnnouncement = await Annoucement.findByIdAndDelete(id)
    return res.status(200).send({
        data: deletedAnnouncement
    })
}

const announcementService = {
    createAnnoucement,
    getAnnoucements,
    updateAnnoucement,
    deleteAnnoucement
}

export default announcementService