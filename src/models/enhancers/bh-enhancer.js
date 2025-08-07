import { getKey, hasKey } from '../../utils/keys.js';
import { strictFormat, stringifyTurns } from '../../utils/text.js';

export class BHEnhancer {
    constructor(config) {
        this.config = config;
    }

    async sendRequest(model, turns, systemPrompt, stop_seq='***') {
        let res = await model.sendRequest(turns, systemPrompt, stop_seq='***');
        console.log(`[info] Enhancer.sendRequest (systemPrompt): \x1b[33m${systemPrompt} \x1b[0m [Enhencer]`);
        console.log(`[info] Enhancer.sendRequest (turns): \x1b[33m${stringifyTurns(turns)} \x1b[0m [Enhencer]`);
        return res;
    }
    
    async sendVisionRequest(model, messages, systemMessage, imageBuffer) {
        let res = await model.sendVisionRequest(messages, systemMessage, imageBuffer);
        return res;
    }
}