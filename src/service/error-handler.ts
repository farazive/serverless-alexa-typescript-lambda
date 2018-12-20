'use strict';


import {AbstractHandler} from "./_handler";

/**
 * @name ErrorHandler
 *  @class
 */
export class ErrorHandler  {

    public canHandle() {
        return true;
    };

    public handle(handlerInput, error) {
        console.log(`Error handled: ${error.message}`);
        console.log(`Error stack: ${error.stack}`);
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        return handlerInput.responseBuilder
            .speak(requestAttributes.t('ERROR_MESSAGE'))
            .reprompt(requestAttributes.t('ERROR_MESSAGE'))
            .getResponse();
    };
}

