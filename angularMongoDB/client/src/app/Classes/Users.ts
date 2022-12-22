import { formatDate } from "@angular/common";
import { RouterLink } from "@angular/router";

export class Users {
    "name": string;
    "email": string;
    "password": string;
    "phone": string;
    "dob": Date;
    "gender": string;
    "photo": string;
    "isLoggedIn": boolean;
}