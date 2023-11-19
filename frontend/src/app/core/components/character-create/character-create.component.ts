import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-character-create',
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
  standalone: true,
  imports: [
    CommonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule],
  templateUrl: './character-create.component.html',
  styleUrl: './character-create.component.scss'
})
export class CharacterCreateComponent implements OnInit {
  nameFormGroup = this._formBuilder.group({
    nameCtrl: ['', Validators.required],
  });
  conceptFormGroup = this._formBuilder.group({
    conceptCtrl: ['', Validators.required],
  });

  constructor(private apiService: ApiService, private _formBuilder: FormBuilder) { }

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