import { Component, OnInit } from '@angular/core';
import { faUser, faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  summary = '';
  contact: any = {};
  education: any[] = [];
  
  // Font Awesome icons
  faUser = faUser;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faMapMarkerAlt = faMapMarkerAlt;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getResumeData().subscribe(data => {
      this.summary = data.summary || '';
      this.contact = data.contact || {};
      this.education = data.education || [];
    });
  }

  downloadPDF() {
    const link = document.createElement('a');
    link.href = 'assets/Uday Kumar_CV.pdf'; // path to your PDF in assets
    link.download = 'MyFile.pdf'; // desired file name after download
    link.click();
  }
}