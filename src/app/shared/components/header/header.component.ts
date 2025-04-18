import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() isMobileView = false;
  @Input() isMobileMenuOpen = false;
  @Input() toggleMobileMenu: () => void = () => {};
  isScrolled = false;

  navItems = [
    { path: '/', label: 'Home', exact: true },
    { path: '/about', label: 'About', exact: false },
    { path: '/experience', label: 'Experience', exact: false },
    { path: '/projects', label: 'Projects', exact: false },
    { path: '/contact', label: 'Contact', exact: false }
  ];

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollPosition > 10;
  }
}