import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../Classes/Users'; 

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private httpClient: HttpClient) { }

  // dataUrl = "http://localhost:3000/users"

  dataUrl = "http://localhost:3001"

  // -----to get data of all the users in the database---------
  getUserDatabaseAPI(): Observable<Users[]> {
    return this.httpClient.get<Users[]>(`${this.dataUrl}/`);
  }

  // --------to  update isLoggedIn status post login---------
  updateIsLoggedInStatusAPI(userId: String, isLoggedIn: boolean):Observable<Users>{
    return this.httpClient.patch<Users>(`${this.dataUrl}/${userId}`, isLoggedIn);
  }

  // --------to add data of a user to the database post registration process------
  postUserDataAPI(userDetail: Users): Observable<Users> {
    return this.httpClient.post<Users>(`${this.dataUrl}/`, userDetail)
    console.log(Users);
  }

  // ------------to display the user details post logging in--------------
  getUserDataByIdAPI(userId: String): Observable<Users> {
    return this.httpClient.get<Users>(`${this.dataUrl}/${userId}`)
  }

  // -------------to update the details of a logged in user--------------
  putUserDataByIdAPI(userId: String, userDetail: Users): Observable<Users> {
    return this.httpClient.put<Users>(`${this.dataUrl}/${userId}`, userDetail)
  }

  // -------------to delete the account of a logged in user-----------
  deleteUserDataByIdAPI(userId: String): Observable<Users> {
    return this.httpClient.delete<Users>(`${this.dataUrl}/${userId}`)
  }

}
