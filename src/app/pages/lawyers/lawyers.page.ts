import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lawyers',
  templateUrl: 'lawyers.page.html',
  styleUrls: ['lawyers.page.scss'],
})
export class LawyersPage {
  lawyer = {
    name: '',
    specialization: '',
    image: '',
  };

  constructor(private http: HttpClient) {}

  onImageChange(event: any) {
    this.lawyer.image = event.target.files[0];
  }

  addLawyer() {
    const formData = new FormData();
    formData.append('name', this.lawyer.name);
    formData.append('specialization', this.lawyer.specialization);
    formData.append('image', this.lawyer.image);

    this.http.post('http://localhost/Projects/Muhami/Backend/lawyerInfo.php', formData).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}