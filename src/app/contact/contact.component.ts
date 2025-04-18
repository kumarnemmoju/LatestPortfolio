import { Component, OnInit } from '@angular/core';
import { 
  faPhone, 
  faEnvelope, 
  faMapMarkerAlt,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import { 
  faLinkedin, 
  faGithub, 
  faTwitter 
} from '@fortawesome/free-brands-svg-icons';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
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
  
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  // Icons
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faMapMarkerAlt = faMapMarkerAlt;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faTwitter = faTwitter;
  faPaperPlane = faPaperPlane;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getResumeData().subscribe(data => {
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
    });
  }

  onSubmit() {
    console.log('Form submitted:', this.formData);
    alert('Thank you for your message! I will get back to you soon.');
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}