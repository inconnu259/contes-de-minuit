import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-character-create',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-create.component.html',
  styleUrl: './character-create.component.scss'
})
export class CharacterCreateComponent implements OnInit {
  constructor(private apiService: ApiService) { }

  ngOnInit() { }

  createCharacter() {
    var character = {
      name: "test",
      concept: "personnage de test",
      description: "juste pour faire un petit test",
      age: 5,
      motivation: "tester",
      ether: 5,
      place: "internet",
      quest: "tester que tout fonctionne"
    };
    this.apiService.createCharacter(character).subscribe((response) => {
      console.log(response);
    });
  }
}