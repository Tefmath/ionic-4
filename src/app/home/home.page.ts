import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  
  post:object = {
		 nomeDoUsuario:'Tef',
		 texto: 'xabu',
		 horario: '11:00',
		 numeroDeLikes: 20,
		 numeroDeDislikes: 10,
		 episodioRelacionado: 'Buffy',
		 respostasDoPost: 'koe',
		 estadoDoLike: true,
		 anexo: 'tef.jpg',
		 quantidadeDeComp: 15
		 
		 
	}
}
