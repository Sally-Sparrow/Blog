import { Injectable } from '@angular/core';
import { Categoria, Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private arrPosts: Post[];
  private arrCategorias: Categoria[];
  private postsFiltrados: Post[]

  constructor() {
    this.arrPosts = [
      { id: 0, titulo: 'Título 1', fecha: new Date, autor: 'Sally S.', imagen: 'https://pbs.twimg.com/profile_images/698639488482824192/A7Rptqe8_400x400.jpg', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.', categoria: Categoria.primera },
      { id: 1, titulo: 'Título 2', fecha: new Date, autor: 'Sally S.', imagen: 'https://pbs.twimg.com/profile_images/698639488482824192/A7Rptqe8_400x400.jpg', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.' , categoria: Categoria.segunda },
      { id: 2, titulo: 'Título 3', fecha: new Date, autor: 'Sally S.', imagen: 'https://pbs.twimg.com/profile_images/698639488482824192/A7Rptqe8_400x400.jpg', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.', categoria: Categoria.tercera }
    ];
    this.arrCategorias = [
      Categoria.primera, 
      Categoria.segunda, 
      Categoria.tercera
    ];
    this.postsFiltrados = [];
   }

  getCategorias(): Promise<Categoria[]>{
    return new Promise<Categoria[]>( (resolve, reject) => {
      resolve( this.arrCategorias );
    });
  }

  getPosts(): Promise<Post[]>{
    return new Promise<Post[]>((resolve, reject) => {
      resolve (this.arrPosts);
    });
  }
  
  addPost( pNewPost:Post ): Promise<Post[]>{
    return new Promise<Post[]>( (resolve, reject) => {
      this.arrPosts.push( pNewPost );
      resolve( this.arrPosts );
    });
  }

  getPostByCategory( pCategory: string ): Promise<Post[]>{
    return new Promise<Post[]>( (resolve, reject) => {
      resolve(this.arrPosts.filter( post => pCategory == post.categoria ));
    });
  }

}
