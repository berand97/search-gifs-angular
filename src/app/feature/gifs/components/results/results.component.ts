import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../shared/services/gifs.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  get gifs (){
    return this.gifsService.result
  }

  constructor(
    private gifsService : GifsService
  ) { }

  ngOnInit(): void {
  }

}
