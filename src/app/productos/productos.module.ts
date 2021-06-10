import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductosRoutingModule } from './productos-routing.module';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AgregarComponent],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    // Se importa este modulo dentro de este otro modulo, para tener el acceso  a sus componentes o en este caso directivas
    // asi tenemos el alcance de esa directiva a lo largo de todo mo modulo productos
  ],
})
export class ProductosModule {}
