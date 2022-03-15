import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/feature/gifs/shared/services/gifs.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('search') search!: ElementRef<HTMLInputElement>;

  constructor(
    private gifsService: GifsService
  ) { }

  ngOnInit(): void {
  }

  buscar() {
    const query =(this.search.nativeElement.value);
    if(query.trim().length === 0){
      return;
    }
    this.gifsService.searchGifs(query);
    this.search.nativeElement.value = '';
  }

}
