import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {RequestResponse, ResponseStatusHandler} from "../response-status/response-status.service";
import {catchError, tap} from "rxjs";

@Injectable()
export class AuthService{

    constructor(
        private router: Router,
        private httpClient: HttpClient,
        private responseStatusHandler: ResponseStatusHandler
    ) {
    }
    createNewUser(login: string, password: string, email: string) {
        password.normalize("NFKC");
        return this.httpClient.post<RequestResponse>("http://localhost:8765/user/register", {
            login: login,
            password: password,
            email: email
        })
    }
}