import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(public movieService:MovieService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('movieid')
    console.log(id);
    if(id !== null){
      let movieid = parseInt(id);
      this.movieService.getMovieDetails(movieid).then((res:any)=>{
        console.log(res);
        this.movie = res;
      }).catch((err)=>{
        console.error(err);
      })
    }
  }

  movie:any;

}
