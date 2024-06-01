import { Component, OnInit } from '@angular/core';
import { ProgramsService } from '../../services/programs.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  providers: [ProgramsService],
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.css',
})
export class ProgramsComponent implements OnInit {
  constructor(private Pservice: ProgramsService) {}
  programs: any;
  ngOnInit() {
    console.log(
      this.Pservice.getAllPrograms().subscribe({
        next: (data) => {
          this.programs = data;
        },
        error: (err) => {
          console.log(err);
        },
      })
    );
  }
}
