'use strict';


import {AbstractHandler} from "./_handler";
import {HandlerInput} from 'ask-sdk-core';

/**
 * @name CreateGameHandler
 *  @class
 */
export class CreateGameHandler extends AbstractHandler {

    public canHandle(handlerInput: HandlerInput): boolean {
        const request = handlerInput.requestEnvelope.request;

        return (request.type === 'LaunchRequest')
            || (request.type === 'IntentRequest' && request.intent.name === 'CreateGameIntent');
    }

    public handle(handlerInput: HandlerInput) {
        return handlerInput.responseBuilder.speak("Creating game").getResponse();
    }
}

