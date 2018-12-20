'use strict';
import {HandlerInput} from 'ask-sdk-core';
import {Response} from "ask-sdk-model";

/**
 * @name AbstractHandler
 * @class
 * @abstract
 */
//todo: implements RequestHandler from node_modules/ask-sdk-runtime/dist/dispatcher/request/handler/RequestHandler.d.ts
export abstract class AbstractHandler {
    public abstract canHandle(handlerInput: HandlerInput): boolean;
    public abstract handle(handlerInput: HandlerInput): Response;
}