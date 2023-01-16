import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[upload]',
})
export class UploadDirective {
  @Output() onHover: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onFileDropped: EventEmitter<File> = new EventEmitter<File>();

  constructor() {}

  @HostListener('dragover', ['$event']) onDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
    this.onHover.emit(true);
  }

  @HostListener('dragleave', ['$event']) onDragLeave(event) {
    event.preventDefault();
    event.stopPropagation();
    this.onHover.emit(false);
  }

  @HostListener('drop', ['$event']) onDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    this.onHover.emit(false);

    console.log(event);
    const files = event.dataTransfer.files;
    const fileSelected = files[0];

    this.onFileDropped.emit(fileSelected);
  }
}
