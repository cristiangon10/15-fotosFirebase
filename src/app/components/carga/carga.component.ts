import { Component, OnInit } from '@angular/core';
import { FileItem } from 'src/app/models/file-item';
import { CargaImagenesService } from '../../services/carga-imagenes.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit {

  estaSobreElemento:boolean = false;
  archivos: FileItem[] = [];

  constructor( public _cis:CargaImagenesService) { }

  ngOnInit() {
  }

  cargarImagenes()
  {
    this._cis.cargarImagenesFirebase(this.archivos);
  }

  pruebaSobreElemento(event)
  {
    console.log(event);
  }

  limpiar()
  {
    this.archivos = [];
  }
}
