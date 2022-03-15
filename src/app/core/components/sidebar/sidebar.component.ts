import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/feature/gifs/shared/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  get history (){
    return this.gifsService.history;
  }

  constructor(
    private gifsService: GifsService
  ) { }

  ngOnInit(): void {
  }

  buscar(gif:any){
    this.gifsService.searchGifs(gif)
  }

  borrarHistorial(){
    localStorage.clear()
    window.location.reload()
  }

}
