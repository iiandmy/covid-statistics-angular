import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Country } from "./country";

@Injectable({
  providedIn: 'root'
})
export class CovidApiService {
  private apiBaseUrl = "http://localhost:8080/"
  private apiCountries = this.apiBaseUrl + "countries"
  
  constructor(private http: HttpClient) {}

  getCountries(): Observable<any> {
    return this.http.get<Country[]>(this.apiCountries)
  }
}