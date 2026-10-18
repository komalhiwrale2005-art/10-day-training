
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Facility, FacilityApiResponse } from '../models/facility.model';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  private apiUrl = 'http://127.0.0.1:8000/api/facilities';

  constructor(private http: HttpClient) {}

  getFacilities(): Observable<FacilityApiResponse> {
    return this.http.get<FacilityApiResponse>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Failed to load facilities:', error);
        return throwError(() => error);
      })
    );
  }
}
