import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-tornaument',
  templateUrl: './form-tornaument.component.html',
  styleUrls: ['./form-tornaument.component.css']
})
export class FormTornaumentComponent implements OnInit {

  formatos = [
    {id: 1, nombre: 'Eliminacion Directa'},
    {id: 2, nombre: 'Fase de grupo + Eliminacion directa'},
    {id: 3, nombre: 'Liga'},
    {id: 4, nombre: 'Personalizada'},
  ];

  numEquipos = [
    {id: 1, nombre: '4'},
    {id: 2, nombre: '6'},
    {id: 3, nombre: '8'},
    {id: 4, nombre: '16'},
    {id: 5, nombre: '20'},
    {id: 6, nombre: '32'},
    {id: 7, nombre: 'Personalizada'},
  ]

  sorteos = [
    {id: 1, nombre: 'Automatico'},
    {id: 2, nombre: 'Personalizado'},
  ];

  nacionalidadEquipos = [
    {id: 1, nombre: 'Argentina'},
    {id: 2, nombre: 'Uruguay'},
    {id: 3, nombre: 'Brasil'},
    {id: 4, nombre: 'Chile'},
    {id: 5, nombre: 'Colombia'},
    {id: 6, nombre: 'Venezuela'},
  ]

  equipos = [
    {id: 1, nombre: 'Hacha y tiza eSports', nacionalidad: 'Argentina'},
    {id: 2, nombre: 'Sporitvo Barracas eSports', nacionalidad: 'Argentina'},
    {id: 3, nombre: 'WAP eSports', nacionalidad: 'Argentina'},
    {id: 4, nombre: 'Argendioses', nacionalidad: 'Argentina'},
    {id: 5, nombre: 'San Jorge eSports', nacionalidad: 'Argentina'},
    {id: 6, nombre: 'AESMA eSports', nacionalidad: 'Argentina'},
  ]

  torneoForm: any;
  arrayTorneo: any[] = [];
  cantEquipos: number;
  mostrarTabla: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createFormTorneo()
  }

  onSubmit(){
    const torneo = {
      torneo: this.torneoForm.value,
      equipos: this.arrayTorneo
    }

    // let toastNotificationConfiguration: ToastNotificationConfiguration = {
    //   message: 'Torneo creado correctamente',
    //   displayDuration: 1000,
    //   autoHide: true,
    //   showCloseButton: true,
    //   toastType: ToastType.SUCCESS
    // };
    // this.toasterService.showToastMessage(toastNotificationConfiguration)
    console.log(torneo)
  }

  agregarEquipo(equipo: any){
    if(this.arrayTorneo.length == 0){
      this.mostrarTabla = true;
    }

    const res = this.equipos.find(elem => elem.id == equipo);
    this.cantEquipos = ++this.cantEquipos
    this.arrayTorneo.push(res)
    console.log(this.arrayTorneo)
  }

  createFormTorneo(){
    this.torneoForm = this.fb.group({
      nombreTorneo: ['', [Validators.required]],
      formatoTorneo: [null, [Validators.required]],
      cantidadEquipos: ['', [Validators.required]],
      tipoSorteo: [null, [Validators.required]]
    })
  }
}
