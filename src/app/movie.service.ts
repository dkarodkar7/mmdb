import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

constructor(private http: HttpClient) { }



public movies: Array<any> = [];

public getDiscoverMovies(){
    return new Promise((resolve, reject) =>{
this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=167647c36f2c43b7b3b6b601f6b94af0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate').subscribe(
(res)=>{
  resolve(res);
},
(err)=>{
  reject(err);
})
 });
}

public searchMovies(searchText:string){
  return new Promise((resolve, reject)=>{
    this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=167647c36f2c43b7b3b6b601f6b94af0&language=en-US&query=${searchText}&page=1&include_adult=false`).subscribe(
      (res)=>{
        resolve(res);
      },
      (err)=>{
        reject(err);
      }
    );
  });
}

public getMovieDetails(movieid:number){
  return new Promise((resolve, reject)=>{
    this.http.get(`https://api.themoviedb.org/3/movie/${movieid}?api_key=167647c36f2c43b7b3b6b601f6b94af0&language=en-US`).subscribe(
      (res)=>{
        resolve(res);
      },
      (err)=>{
        reject(err);
      }
    );
  });
}

}
