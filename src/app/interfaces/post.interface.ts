export enum Categoria{
    primera = 'uno',
    segunda = 'dos',
    tercera = 'tres'
}

export interface Post{
    id: number;
    titulo: string;
    fecha: Date;
    autor?: string;
    imagen: string;
    texto: string;
    categoria: Categoria;
}