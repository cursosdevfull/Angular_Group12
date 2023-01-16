import { Component, ElementRef, forwardRef, Input, OnInit, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { WebcamImage } from 'ngx-webcam';
import { environment } from 'projects/system/src/environments/environment';
import { Subject } from 'rxjs';

@Component({
  selector: 'amb-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhotoComponent),
      multi: true,
    },
  ],
})
export class PhotoComponent implements OnInit {
  @ViewChild('photo') photo: ElementRef;
  @ViewChild('file') file: ElementRef;
  @Input() photoByDefault: string = '';

  isUsingWebCam = false;
  statusHover = false;

  triggerSnapshot = new Subject<void>();

  value: File;

  onChange: any;
  onTouched: any;

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: File): void {
    if (value) {
      this.value = value;
    }
  }

  constructor() {}

  ngOnInit(): void {}

  onFileDropped(file: File) {
    console.log(file);
    if (!file.type.startsWith('image/') || file.size > 5000000) {
      return;
    }

    this.onTouched();
    this.onChange(file);

    const reader = new FileReader();
    reader.onloadend = (response: any) => {
      const base64 = response.target.result;
      this.loadPhotoFromUrlOrDataUrl(base64);
    };

    reader.readAsDataURL(file);
  }

  loadPhotoFromUrlOrDataUrl(urlOrPath: string) {
    this.photo.nativeElement.style.backgroundImage = `url(${urlOrPath})`;
  }

  loadImage() {
    this.file.nativeElement.click();
    return false;
  }

  selectImage(event: any) {
    const file: File = event.target.files[0];
    this.onFileDropped(file);
  }

  changeOriginPhoto(event: MatSlideToggleChange) {
    this.isUsingWebCam = !this.isUsingWebCam;
  }

  takePhoto() {
    this.triggerSnapshot.next();
  }

  triggerAsObservable() {
    return this.triggerSnapshot.asObservable();
  }

  onImageCapture(webcamImage: WebcamImage) {
    fetch(webcamImage.imageAsDataUrl)
      .then((response) => response.arrayBuffer())
      .then((buffer) => new File([buffer], 'avatar', { type: 'image/jpeg' }))
      .then((file) => {
        this.onFileDropped(file);
        this.isUsingWebCam = false;
      });
  }

  ngAfterViewInit() {
    if (this.photoByDefault) {
      const path = `${environment.apiPath}/photos/${this.photoByDefault}`;
      this.loadPhotoFromUrlOrDataUrl(path);
    }
  }
}
