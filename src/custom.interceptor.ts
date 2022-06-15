import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { response } from "express";
import { map } from "rxjs";

export class CustomInterceptor implements NestInterceptor{
 intercept(context: ExecutionContext, handler: CallHandler){
     console.log("THIS IS INTERECEPTING THE REQUEST");
     console.log({context})
    return handler.handle().pipe(
        map((data) => {
            console.log("THIS IS INTERECEPTING THE RESPONSE"); 
           const reponse = {
                ...data,
                createdAt: data.created_at
            };
            delete reponse.updated_at;
            delete reponse.created_at;

            return response;
        })
    );
     
 }
}