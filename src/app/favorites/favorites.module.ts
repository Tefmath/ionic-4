import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritesPageRoutingModule } from './favorites-routing.module';

import { FavoritesPage } from './favorites.page'; // quando botamos um ponto só, é pq a pasta ta no mesmo local do diretorio //

import { PostComponent } from '../components/post/post.component'; // quando esta em local diferente, temos q botar dois pontos, nome da pasta, nome da pasta dentro da pasta kkk, e nome do arquivo dentro dela //
// no import, colocamos o nome que esta no arquivo, no caso achamos ele em post.component.ts, e no caso o nome do nosso arquivo é PostComponent //
// o import importa o component no local do app que eu quero colocar //

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritesPageRoutingModule
  ],
  declarations: [FavoritesPage, PostComponent] // tem q acrescentar o nome do component aqui tbm //
})
export class FavoritesPageModule {}
