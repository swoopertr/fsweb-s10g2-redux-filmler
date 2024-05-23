import logger from "redux-logger";
import { tunc_logger } from "./tunc_middleware";
import { sinanLogger } from "./sinanMiddleware";
import { egemen_logger } from "./egemen_middleware";
import { elif_logger } from "./elif_middleware";
import { nebiLogger } from "./nebi_middleware";

const middlewares = [logger, tunc_logger, sinanLogger, egemen_logger, elif_logger, nebiLogger]

export default middlewares;