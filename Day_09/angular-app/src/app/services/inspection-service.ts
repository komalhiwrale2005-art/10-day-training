
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspectionService {
  private apiUrl = 'http://127.0.0.1:8000/api/inspections';

  constructor(private http: HttpClient) {}

  getInspections(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  addInspection(data: {
    facility_id: number;
    inspection_date: string;
    inspector_name: string;
    cleanliness_score: number;
    remarks: string;
  }): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
