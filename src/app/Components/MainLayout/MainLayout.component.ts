import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-MainLayout',
  standalone: true,
  imports: [SidebarComponent,FooterComponent,RouterModule],
  templateUrl: './MainLayout.component.html',
  styleUrls: ['./MainLayout.component.css']
})
export class MainLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
