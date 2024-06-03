import { Component } from '@angular/core';
import { WhiteLogoComponent } from '../white-logo/white-logo.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [WhiteLogoComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
