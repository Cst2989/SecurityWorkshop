import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

interface ValidationResponse {
  valid: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class InvitationService {
  private validationApiUrl = 'https://your-backend-url.com/validate-invitation';

  constructor(private http: HttpClient) {}

  validateCode(invitationCode: string): Observable<ValidationResponse> {
    if (!invitationCode || invitationCode.trim() === '') {
      return of({ valid: false });
    }

    // Assuming the backend expects the invitation code to be sent as a query parameter
    return this.http
      .get<ValidationResponse>(`${this.validationApiUrl}?code=${encodeURIComponent(invitationCode)}`)
      .pipe(
        map((response: ValidationResponse) => response),
        catchError((error: HttpErrorResponse) => {
          console.error('Validation API Error:', error);
          return of({ valid: false });
        })
      );
  }
}
