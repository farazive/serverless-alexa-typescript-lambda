'use strict';

import {Kernel} from "./kernel/kernel";
import {SkillBuilders as AlexaSkillBuilder} from "ask-sdk";
import {ErrorHandler} from "./service/error-handler";

/**
 * @name Application
 * @class
 */
class Application {
    constructor(private kernel: Kernel) {
    }

    getContainer() {
        return this.kernel.getContainer();
    }

    boot() {
        return this.kernel.boot();
    }
}

// Prepare
const kernel = new Kernel();
const app = new Application(kernel);

let container = app.getContainer();

export let handler = container
    .alexaStandardSkillBuilder
    .addRequestHandlers(
        container.getNewFactHandler
    )
    .addErrorHandlers(container.errorHandler)
    .lambda();
