import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, Gifs } from 'src/app/core/interfaces/gif.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private url: string = environment.endpoint;

  private _history: string[] = [];

  public result: Gif[] = [];

  constructor(
    private http: HttpClient
  ) {
    this._history = JSON.parse(localStorage.getItem('history')!) || []
    this.result = JSON.parse(localStorage.getItem('lastQuery')!) || []

  }


  get history() {
    return [...this._history]
  }

  searchGifs(query: string) {
    query = query.trim().toLocaleLowerCase();

    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0, 10);

      localStorage.setItem('history', JSON.stringify(this._history));
      localStorage.setItem('lastQuery', JSON.stringify(query))
    }

    this.http.get<Gifs>(`${this.url}=${query}&limit=2`)
      .subscribe((resp: Gifs) => {
        this.result = resp.data;
        localStorage.setItem('lastQuery', JSON.stringify(this.result));
      })

  }
}
