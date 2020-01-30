import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
post;
	
  constructor() {
   this.post = {
		 "nomeDoUsuario":"Tef",
		 "texto": "xabu",
		 "horario": "11:00",
		 "numeroDeLikes": 20,
		 "numeroDeDislikes": 10,
		 "episodioRelacionado": "Buffy",
		 "respostasDoPost": "koe",
		 "estadoDoLike": false,
		 "anexo": "tef.jpg",
		 "quantidadeDeComp": 15,
		 "spoiler": true

        }
 }

  ngOnInit() {
  }

	likes(post){
		if (this.post.estadoDoLike == false){
			this.post.estadoDoLike = true;
			this.post.numeroDeLikes++;
			return
		} 
		if (this.post.estadoDoLike == true){
			this.post.estadoDoLike = false;
			this.post.numeroDeLikes--;
		}
		
	}
}