import { PathLocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Categoria, Post } from '../interfaces/post.interface';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  postsDeBlog: Post[];
  arrCategorias: Categoria[];

  constructor( private postDeService: PostService) { 
    this.postsDeBlog = [];
  }

  ngOnInit(): void {
    this.postDeService.getPosts()
      .then( post => {
        this.postsDeBlog = post;
      })
      .catch( error => console.log(error));

    this.postDeService.getCategorias()
      .then( categoria =>{
        this.arrCategorias = categoria;
        console.log(this.arrCategorias);
        
      })
      .catch( error => console.log(error));
     
  }

  onClickCategoria($event){
    console.log($event.target.innerText.toLowerCase());
    this.postDeService.getPostByCategory( $event.target.innerText.toLowerCase() )
        .then( post => {
          this.postsDeBlog = post;
          console.log(post);
          
        })
        .catch( error => console.log( error ));
    
    // this.postDeService.getPostByCategory<Categoria>( Categoria.primera )
    //   .then( post => {
    //     this.postsDeBlog = post;
    //   })
    //   .catch( error => console.log( error ));
  }
}
