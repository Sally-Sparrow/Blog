import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Categoria, Post } from '../interfaces/post.interface';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  newPost: Post;
  idPost: number;
  fechaActual: Date;
  arrCategorias: Categoria[];
  regularUrl = /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi

  constructor( private postService: PostService ) {
    this.idPost = 3;
    this.fechaActual = new Date();
    this.form = new FormGroup({
      id: new FormControl(),
      titulo: new FormControl('', [
        Validators.required
      ]),
      fecha: new FormControl(),
      autor: new FormControl('', [
        Validators.required
      ]),
      imagen: new FormControl('', [
        Validators.required,
        Validators.pattern(/(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi)
      ]),
      texto: new FormControl('', [
        Validators.required
      ]),
      categoria: new FormControl( null, [
        Validators.required
      ])
    })
  }

  ngOnInit(): void {
    this.postService.getCategorias()
    .then( categoria => {
      this.arrCategorias = categoria;
      console.log(this.arrCategorias);
    })
    .catch( error => console.log(error));
  }

  onSubmit(){
    if(this.form.valid){
    //Asigna la id y la fecha actual al Post
    this.form.patchValue({
      id: this.idPost,
      fecha: this.fechaActual,
    });
    //llama al metodo add del servicio y le pasa el Post:
    this.postService.addPost( this.form.value );
    this.idPost ++;
    this.form.reset();  
    }else{ this.form.markAllAsTouched() }
  }
}
