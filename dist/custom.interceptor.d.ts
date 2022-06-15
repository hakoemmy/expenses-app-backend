/// <reference types="express" />
import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
export declare class CustomInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, handler: CallHandler): import("rxjs").Observable<import("express").Response<any, Record<string, any>>>;
}
