import { Request, Response } from "express"
import Formation from "../../models/formation"
import logger from "../../utils/logger"

const createFormation = async (req: Request, res: Response) => {
    const { name, price, duration, description } = req.body
    const newFormation = new Formation({
        name, price, duration, description
    })
    newFormation.save((err, result) => {
        if (err) {
            logger("error", `Failed to create formation ${err.message}`)
            return res.status(500).send("Something went wrong")
        }
        return res.status(200).send({
            data: result
        })
    })
}

const getFormations = async (req: Request, res: Response) => {
    try {
        const formations = await Formation.find()
        return res.status(200).send({
            data: formations
        })
    } catch (error) {
        return res.status(500).send(`Something went wrong ${error}`)

    }
}


const updateFormation = async (req: Request, res: Response) => {
    const { id, name, price, duration, description } = req.body
    await Formation.findByIdAndUpdate(id, {name, price, duration, description})
    const updatedFormation = await Formation.findById(id)
    return res.status(200).send({
        data: updatedFormation
    })
}

const deleteFormation = async (req: Request, res: Response) => {
    const { id } = req.body
    const deletedFormation = await Formation.findByIdAndDelete(id)
    return res.status(200).send({
        data: deletedFormation
    })
}

const formationService = {
    createFormation,
    getFormations,
    updateFormation,
    deleteFormation
}

export default formationService