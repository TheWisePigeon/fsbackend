import chalk from "chalk"

type logType = "success" | "warning" | "error"

const logger = (type: logType, message: string)=>{
    switch (type) {
        case "success":
            console.log(chalk.green(message))
            break;
        case "warning":
            console.log(chalk.yellow(message))
        case "error":
            console.log(chalk.red(message))
    }
}

export default logger