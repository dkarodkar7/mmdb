import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {

  constructor(public movieService:MovieService) { }

  searchText="";

  
  isPaused = false;

  handleKeyUp(){
    this.movieService.searchMovies(this.searchText).then((res:any)=>{
      console.log(res);
      this.movieService.movies = res.results;
    }).catch(err=>{
      console.error(err);
    })
  }
}
