import { Component } from '@angular/core';

interface Lawyer {
  id: number;
  name: string;
  specialty: string;
  type: string;
  image: string;
  payment: number;
}

@Component({
  selector: 'app-lawyers',
  templateUrl: './lawyers.page.html',
  styleUrls: ['./lawyers.page.scss'],
})
export class LawyersPage {
  searchTerm = '';
  lawyers: Lawyer[] = [
    // قم باستبدال هذه البيانات ببيانات المحامين الخاصة بك
    { id: 1, name: 'أمين الفيفي', specialty: 'قانون', type: 'تجاري', image: 'https://via.placeholder.com/150', payment: 500 },
    { id: 2, name: 'بدر الموسى', specialty: 'شريعة', type: 'جنائي', image: 'https://via.placeholder.com/150', payment: 300 },
  ];
  
  filteredLawyers: Lawyer[] = [...this.lawyers];

  filterItems() {
    this.filteredLawyers = this.lawyers.filter(lawyer => {
      return lawyer.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || lawyer.specialty.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }

  viewLawyerDetails(lawyer: Lawyer) {
    // قم بإضافة التنقل إلى صفحة تفاصيل المحامي هنا
    console.log('عرض تفاصيل المحامي:', lawyer);
  }


  navigateToPaymentPage(lawyer: Lawyer): void {
    // إضافة الرمز البرمجي للانتقال إلى صفحة الدفع
    // يمكنك استخدام navCtrl.navigateForward() أو طريقة التنقل المفضلة لديك
  }

}