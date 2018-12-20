'use strict';

import Bottle = require("bottlejs");
import {CreateGameHandler} from "../service/create-game-handler";
import {PredictResultHandler} from "../service/predict-result-handler";
import {GetNewFactHandler} from "../service/get-new-fact-handler";
import {SkillBuilders} from "ask-sdk";

/**
 * Performs Container DI
 * @param {Bottle} di
 */
export class Container {

    constructor(private di: Bottle) {
        di.service('alexaStandardSkillBuilder', SkillBuilders.standard);

        di.service('createGameHandler', CreateGameHandler, 'alexaStandardSkillBuilder');
        di.service('predictResultHandler', PredictResultHandler, 'alexaStandardSkillBuilder');
        di.service('getNewFactHandler', GetNewFactHandler, 'alexaStandardSkillBuilder');
    }
}
