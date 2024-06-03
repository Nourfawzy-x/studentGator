import { Component, OnInit } from '@angular/core';
import { ProgramsService } from '../../services/programs.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from '../pagination/pagination.component';
import { ProgNamePipe } from '../../pipe/prog-name.pipe';
import { ProgramCategoryPipe } from '../../pipe/program-category.pipe';
import { HeaderImgComponent } from '../header-img/header-img.component';

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    PaginationComponent,
    ProgNamePipe,
    ProgramCategoryPipe,
    HeaderImgComponent,
  ],
  providers: [ProgramsService],
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.css',
})
export class ProgramsComponent implements OnInit {
  loading: boolean = true;
  constructor(private Pservice: ProgramsService) {}
  programs: any;
  ngOnInit() {
    console.log(
      this.Pservice.getAllPrograms().subscribe({
        next: (data) => {
          this.programs = data;
          this.loading = false;
        },
        error: (err) => {
          console.log(err);
          this.loading = false;
        },
      })
    );
  }
}
