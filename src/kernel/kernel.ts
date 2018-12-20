'use strict';

import * as Bottle from "bottlejs";
import {Container} from "./container";
import {IContainer} from "bottlejs";
import {StandardSkillBuilder} from "ask-sdk";

import {CreateGameHandler} from "../service/create-game-handler";
import {PredictResultHandler} from "../service/predict-result-handler";
import {GetNewFactHandler} from "../service/get-new-fact-handler";
import {ErrorHandler} from "../service/error-handler";

declare module "bottlejs" { // Use the same module name as the import string

    interface IContainer {
        createGameHandler: CreateGameHandler;
        predictResultHandler: PredictResultHandler;
        getNewFactHandler: GetNewFactHandler;
        errorHandler: ErrorHandler;
        alexaStandardSkillBuilder: StandardSkillBuilder
    }
}

/**
 * @name Kernel
 * @class
 */
export class Kernel {

    private readonly container: IContainer;

    /**
     * Builds the Kernel and container
     */
    constructor() {

        // Create builder
        const containerBuilder = new Bottle();

        // Perform DI
        new Container(containerBuilder);

        // Execute deferred functions
        containerBuilder.resolve({});

        // Store container
        this.container = containerBuilder.container;
    }

    getContainer() {
        return this.container;
    }

    boot() {
        console.log('kernel booted');
        // return this.container.talk.talkMethod("faraz");
    }
}
