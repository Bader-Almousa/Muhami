import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Lawyer {
  id: number;
  name: string;
  image: string;
  specialization: string;
  type: string;
  consultationFee: number;
  description: string;
  academicDegree: string;
  academicMajor: string;
  experience: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private lawyers: Lawyer[] = [
    {
      id: 1,
      name: 'أحمد علي',
      image: 'assets/images/ahmed_ali.jpg',
      specialization: 'تجاري',
      type: 'محامي',
      consultationFee: 150,
      description: 'محامي متخصص في القضايا التجارية والعقود الدولية',
      academicDegree: 'دكتوراه',
      academicMajor: 'القانون التجاري',
      experience: '15 سنة',
    },
    // يمكنك إضافة المزيد من المحامين هنا
  ];

  constructor() { }

  getAllLawyers() {
    return [...this.lawyers];
  }

  getLawyer(id: number) {
    return { ...this.lawyers.find(lawyer => lawyer.id === id) };
  }
    
}
