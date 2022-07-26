import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpEventType,
  HttpProgressEvent,
  HttpResponse
} from "@angular/common/http";
import {Observable, throwError, Timestamp} from "rxjs";
import {tap, catchError} from "rxjs/operators";
import {Response} from "./response";

@Injectable({ providedIn: 'root' })
export class Controller {

  constructor(private http: HttpClient) { }

  private readonly  apiUrl = 'http://localhost:8080';

  public load$ = () =>
    <Observable<Response>> this.http.get<Response>(`${this.apiUrl}/load`)
      .pipe(
        tap(console.log),
        catchError(Controller.handleError)
      );

  public getStatus$ = () =>
    <Observable<Response>> this.http.get<Response>(`${this.apiUrl}/status`)
      .pipe(
        tap(console.log),
        catchError(Controller.handleError)
      );

  public start$ = () =>
    <Observable<Response>> this.http.get<Response>(`${this.apiUrl}/start`)
      .pipe(
        tap(console.log),
        catchError(Controller.handleError)
      );

  public cancelAll$ = () =>
    <Observable<Response>> this.http.get<Response>(`${this.apiUrl}/cancelall`)
      .pipe(
        tap(console.log),
        catchError(Controller.handleError)
      );

  public pauseAll$ = () =>
    <Observable<Response>> this.http.get<Response>(`${this.apiUrl}/pauseall`)
      .pipe(
        tap(console.log),
        catchError(Controller.handleError)
      );

  public cancel$ = (job: number) =>
    <Observable<Response>> this.http.get<Response>(`${this.apiUrl}/cancel/${job}`)
      .pipe(
        tap(console.log),
        catchError(Controller.handleError)
      );

  public pause$ = (job: number) =>
    <Observable<Response>> this.http.get<Response>(`${this.apiUrl}/pause/${job}`)
      .pipe(
        tap(console.log),
        catchError(Controller.handleError)
      );

  public download$ = () =>
    <Observable<Response>> this.http.get<Response>(`${this.apiUrl}/download`)
      .pipe(
        tap(console.log),
        catchError(Controller.handleError)
      );

  public photo$ = () =>
    <Observable<Response>> this.http.get<Response>(`${this.apiUrl}/photo`)
      .pipe(
        tap(console.log),
        catchError(Controller.handleError)
      );

  /*public start$ = (): Observable<Response> => {
    console.log("controler");
    return this.http.get<Response>(`${this.apiUrl}/start`)
      .pipe(
        tap(console.log),
        catchError(Controller.handleError)
      );
  }*/

  private static handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error);
    return throwError(`Error occurred - Error Code: ${error.status}`);
  }
}
