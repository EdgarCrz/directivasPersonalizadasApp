import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[error-msg]',
})
export class ErrorMsgDirective implements OnInit, OnChanges {
  private _color: string = 'red';
  private _mensaje: string = 'Este campo es requerido';

  htmlElement: ElementRef<HTMLElement>;

  @Input() set color(valor: string) {
    this._color = valor;
    this.setColor();
  }

  @Input() set mensaje(valor: string) {
    this._mensaje = valor;
    this.setMensaje();
  }

  @Input() set valido(valor: boolean) {
    if (valor) {
      this.htmlElement.nativeElement.classList.add('hidden');
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }
  // @Input() mensaje: string = 'hey';

  // el color por defauld es el red, pero en este caso con el input estamos mandando informacion entre padre e hijo
  // en este caso color matchea con el color que tenemos definido en el DOM

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }
  ngOnChanges(changes: SimpleChanges): void {
    // if (changes.mensaje) {
    //   const mensaje = changes.mensaje.currentValue;
    //   this.htmlElement.nativeElement.innerText = mensaje;
    // }
    // if (changes.color) {
    //   this.htmlElement.nativeElement.style.color = this.color;
    // }
    // console.log(changes);
  }
  ngOnInit(): void {
    // console.log('NgOnInit en la directiva');
    this.setColor();
    this.setMensaje();

    this.setEstilo();
  }

  setEstilo(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }
  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }
  // declaro este metodo, y arriba lo ejecuto directamente en el OnInit, tambien pudo haber sido creado en el constructor

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }
}
