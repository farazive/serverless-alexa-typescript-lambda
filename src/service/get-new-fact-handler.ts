'use strict';

import {AbstractHandler} from "./_handler";
import {HandlerInput} from 'ask-sdk-core';

/**
 * @name GetNewFactHandler
 *  @class
 */
export class GetNewFactHandler extends AbstractHandler {

    private readonly data = [
        "this is a random fact 1",
        "this is a random fact 2",
        "this is a random fact 3",
        "this is a random fact 4",
        "this is a random fact 5",
    ];

    public canHandle(handlerInput: HandlerInput): boolean {
        const request = handlerInput.requestEnvelope.request;

        return (request.type === 'LaunchRequest')
            || (request.type === 'IntentRequest' && request.intent.name === 'GetNewFactIntent');
    }

    public handle(handlerInput: HandlerInput) {
        const factArr = this.data;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = 'Here\'s your fact: ' + randomFact;

        return handlerInput
            .responseBuilder
            .speak(speechOutput)
            .withSimpleCard('Random fact', randomFact)
            .getResponse();
    }
}

