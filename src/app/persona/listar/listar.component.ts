import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/service/persona.service';
import { Persona } from 'src/app/users/model/persona';

@Component({
  selector: 'adra-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  personas: Persona[]=[];
  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.cargarPersona();
  }


  cargarPersona(): void {
    this.personaService.lista().subscribe(
      data => {
        this.personas = data;
      },
      err => {
        console.log(err);
      }
    );
  }
}
