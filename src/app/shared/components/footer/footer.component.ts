import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();
  contact: any = {
    phone: '',
    email: '',
    address: '',
    social: {
      linkedin: '#',
      github: '#',
      twitter: '#'
    }
  };

  // Font Awesome icons
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faMapMarkerAlt = faMapMarkerAlt;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faTwitter = faTwitter;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getResumeData().subscribe(
      data => {
        this.contact = {
          phone: data.contact?.phone || 'Not available',
          email: data.contact?.email || 'Not available',
          address: data.contact?.address || 'Not available',
          social: {
            linkedin: data.contact?.social?.linkedin || '#',
            github: data.contact?.social?.github || '#',
            twitter: data.contact?.social?.twitter || '#'
          }
        };
      },
      error => {
        console.error('Error loading contact data:', error);
        // Fallback data if API fails
        this.contact = {
          phone: '+1 (203) 507-6017',
          email: 'uday.k@jobstechmails.com',
          address: '400 Blake Street, New Haven, Connecticut , 06515',
          social: {
            linkedin: 'https://linkedin.com',
            github: 'https://github.com',
            twitter: 'https://twitter.com'
          }
        };
      }
    );
  }
}