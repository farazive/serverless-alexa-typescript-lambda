'use strict';


import {AbstractHandler} from "./_handler";
import {HandlerInput} from 'ask-sdk-core';

/**
 * @name PredictResultHandler
 * @class
 */
export class PredictResultHandler extends AbstractHandler {
    canHandle(handlerInput: HandlerInput): boolean {
        const request = handlerInput.requestEnvelope.request;

        return (request.type === 'LaunchRequest')
            || (request.type === 'IntentRequest' && request.intent.name === 'PredictResultIntent');
    }

    handle(handlerInput: HandlerInput) {
        return handlerInput.responseBuilder.speak("Predicting result").getResponse();
    }
}
