import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom, lastValueFrom, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  readonly url = `${environment.apiUrl}/locations`;

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const request$ = this.http.get<HousingLocation[]>(this.url).pipe(take(1));
    return await lastValueFrom<HousingLocation[]>(request$);
  }
  
  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const request$ = this.http.get<HousingLocation>(`${this.url}/${id}`).pipe(take(1));
    return await lastValueFrom<HousingLocation>(request$) ?? [];
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}
