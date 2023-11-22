import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../../_services/api.service';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatProgressSpinnerModule, RouterLink],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.scss'
})
export class CharacterListComponent implements AfterViewInit {
  isLoadingResults = true;
  displayedColumns: string[] = ['id', 'name', 'concept'];
  characters: Array<object> = [];

  constructor(private apiService: ApiService) { }

  ngAfterViewInit() {
    this.isLoadingResults = true;
    this.getCharacters();
  }

  public getCharacters() {
    this.apiService.getCharacters().subscribe((data: Array<object>) => {
      this.characters = data;
      this.isLoadingResults = false;
      console.log(data);
    },
      (error) => {
        console.log(error);
      });
  }
}
