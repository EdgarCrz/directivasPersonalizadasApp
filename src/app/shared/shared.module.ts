import { NgModule } from '@angular/core';
import { ErrorMsgDirective } from './directives/error-msg.directive';
import { CustomIfDirective } from './directives/custom-if.directive';

@NgModule({
  declarations: [ErrorMsgDirective, CustomIfDirective],
  exports: [ErrorMsgDirective, CustomIfDirective],
  // esta directiva  se exporta ya que vamos a hacer usao fuera de este modulo
})
export class SharedModule {}
