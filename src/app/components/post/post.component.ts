import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post', // usamos isso pra chamar o component na pasta que queremos no app //
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit { // o class é o nome do nosso component, usamos ele pra importar na pasta que queremos, no caso botei em favorites.module.ts //
 
 public title: string = "oi" // slide DataB 7 //
 
public user = { // slide DataB 9 //
	nome: "Tef",
	 idade: 21
 } 
 
  constructor() { }

  ngOnInit() {}

}
