import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../_services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../../../models/character.model';

@Component({
  selector: 'app-character-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.scss'
})
export class CharacterDetailsComponent implements OnInit {
  @Input() viewMode = false;
  @Input() currentCharacter: Character | null = null;

  message = '';

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getCharacter(this.route.snapshot.paramMap.get('id'));
    }
  }

  getCharacter(id: string | null): void {
    let id_number = Number(id);
    this.apiService.getCharacter(id_number)
      .subscribe({
        next: (data) => {
          this.currentCharacter = data;
          console.log(data);
        },
        error: (e) => {
          console.error(e);
        }
      });
  }

  deleteCharacter(): void {
    if (this.currentCharacter && this.currentCharacter.id) {
      this.apiService.deleteCharacter(this.currentCharacter.id)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.router.navigate(['/characters']);
          },
          error: (e) => {
            console.error(e);
          }
        });
    }
  }
}
