import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adra-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  titulos: string[] = ["ID","USERNAME","PASSWORD","ESTADO", "ACCION"];
  filas: any =[
    {id:'1',username:'dreyna',password:'1234567', estado:true},
    {id:'2',username:'jromero',password:'2342323', estado:false},
    {id:'3',username:'anareyes',password:'65ryr5656', estado:false},
    {id:'4',username:'rrojas',password:'232erer4545r', estado:true},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
