import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [],
})
export class AgregarComponent {
  texto1: string = 'Edgar Cruz';
  color: string = 'red';

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
  });
  // fb: es el constructor de formularios, basicamente nos provee las herramientas como el valid, value, y el acceso a todos esos elementos que podemos observar al crear un formulario
  // tambien nos sirve para poner validaciones a nuestro formulario ya sean sincronas o asincronas

  constructor(private fb: FormBuilder) {}

  tieneError(campo: string): boolean {
    return this.miFormulario.get(campo)?.invalid || false;
  }
  // esta validacion es para mostrar o no el mensaje de error del formulario

  cambiarNombre() {
    this.texto1 = Math.random().toString();
  }
  cambiarColor() {
    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
    return (this.color = color);
  }
}
