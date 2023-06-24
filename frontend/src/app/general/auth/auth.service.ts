import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {RequestResponse, ResponseStatusHandler} from "../response-status/response-status.service";
import {BehaviorSubject} from "rxjs";
import {User} from "./user-model";

@Injectable()
export class AuthService{

    user = new BehaviorSubject<User>(null!);
    constructor(
        private router: Router,
        private httpClient: HttpClient,
        private responseStatusHandler: ResponseStatusHandler
    ) {
    }
    createNewUser(firstName: string,lastName: string, password: string, email: string,birthdate: Date) {
        password.normalize("NFKC");
        return this.httpClient.post<RequestResponse>("http://localhost:8765/user", {
            firstName: firstName,
            lastName: lastName,
            password: password,
            email: email,
            birthdate: birthdate
        })
    }
}