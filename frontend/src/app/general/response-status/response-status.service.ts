import {Injectable} from "@angular/core";
import {ResponseStatus} from "./response-codes";
import {HttpErrorResponse} from "@angular/common/http";

export interface RequestResponse {
    responseMessage: string,
    statusType: string,
    statusCode: number
}

@Injectable()
export class ResponseStatusHandler {
    public handleStatusMessage(status: RequestResponse){
        let message;
        switch (status.responseMessage) {
            case ResponseStatus.STATUS_USER_CREATED:
                message = ResponseStatus.STATUS_USER_CREATED;
        }
    }

    public handleRequestError(errorStatus: HttpErrorResponse) {
        let errorMessage = "UNKNOWN_ERROR_OCCURED";

        switch (errorStatus.error.responseMessage) {
            case ResponseStatus.STATUS_ACCOUNT_LOCKED:
                errorMessage = ResponseStatus.STATUS_ACCOUNT_LOCKED;
        }}
}