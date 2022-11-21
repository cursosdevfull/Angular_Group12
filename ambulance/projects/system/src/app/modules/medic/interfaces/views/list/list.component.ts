import { Component, Inject, OnInit } from '@angular/core';

import { MedicResponseDto } from '../../../application/dtos/medic.response.dto';
import { MedicApplication } from '../../../application/medic.application';
import { MedicService } from '../../../services/medic.service';

@Component({
  selector: 'amb-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  /*   providers: [MedicService], */
})
export class ListComponent implements OnInit {
  private readonly userInfo: { name: string; age: number };
  listMedics: MedicResponseDto[] = [];
  numberGenerated = 0;
  dataProduct: { titulo: string; descripcion: string; imagen: string };
  counter = 0;

  constructor(
    @Inject(MedicApplication) private application: MedicApplication,
    private readonly medicService: MedicService
  ) {
    console.log(
      'MEDIC SERVICE TOSTRING (LISTCOMPONENT)',
      medicService.toString()
    );
  }

  async ngOnInit() {
    this.listMedics = await this.application.listMedics();
  }

  getNumberRandom() {
    this.numberGenerated = this.medicService.numberRandom;
  }

  generate() {
    this.medicService.generateNumber();
    this.numberGenerated = this.medicService.numberRandom;
  }

  async getProductById(id: number) {
    this.medicService.getProductById(id).subscribe((data) => {
      console.log('counter', ++this.counter);
      this.dataProduct = data;
    });

    /*     const data = await this.medicService.getProductById(id);
    console.log(data); */
    /*     const promise = this.medicService.getProductById(id);
    promise.then((data) => {
      console.log(data);
    });
 */
  }

  getDetailProduct() {
    const product = this.medicService.getDetailProduct();
    console.log(product);
  }
}
