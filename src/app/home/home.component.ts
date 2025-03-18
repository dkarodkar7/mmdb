import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public movieService: MovieService, private router:Router){}

  ngOnInit(): void {
    this.movieService.getDiscoverMovies().then((res:any) =>{
      console.log("going here", res);
      this.movieService.movies = res.results;
    }).catch((err)=>{
      console.log(err);
    });
  }

  viewMovie(movieid:any){
    this.router.navigate(['/movie', movieid]);
  }

}
