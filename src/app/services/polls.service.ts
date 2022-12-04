import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environtment';
import { IPoll, IPollDetails } from '../models/poll.interface';

@Injectable({
  providedIn: 'root',
})
export class PollsService {
  constructor(private http: HttpClient) {}

  private _url = environment._url;

  public getAllPolls(): Observable<IPoll[]> {
    return this.http.get<IPoll[]>(`${this._url}/polls`);
  }

  public getPull(id: string): Observable<IPollDetails> {
    return this.http.get<IPollDetails>(`${this._url}/poll/${id}`);
  }
}
