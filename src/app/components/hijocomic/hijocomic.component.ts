import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Comic } from 'src/app/models/comics';

@Component({
  selector: 'app-hijocomic',
  templateUrl: './hijocomic.component.html',
  styleUrls: ['./hijocomic.component.css']
})
export class HijocomicComponent implements OnInit {

  @Input() comic!: Comic;

  @Output() seleccionarComic:EventEmitter<any>=
    new EventEmitter();

  seleccionarFavoritoHijo():void{
    //CUANDO REALICEMOS click EN EL HIJO,
    //LLAMAMOS AL PADRE
    this.seleccionarComic.emit(this.comic);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
