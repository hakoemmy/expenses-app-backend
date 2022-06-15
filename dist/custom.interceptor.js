"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomInterceptor = void 0;
const express_1 = require("express");
const rxjs_1 = require("rxjs");
class CustomInterceptor {
    intercept(context, handler) {
        console.log("THIS IS INTERECEPTING THE REQUEST");
        console.log({ context });
        return handler.handle().pipe((0, rxjs_1.map)((data) => {
            console.log("THIS IS INTERECEPTING THE RESPONSE");
            const reponse = Object.assign(Object.assign({}, data), { createdAt: data.created_at });
            delete reponse.updated_at;
            delete reponse.created_at;
            return express_1.response;
        }));
    }
}
exports.CustomInterceptor = CustomInterceptor;
//# sourceMappingURL=custom.interceptor.js.map