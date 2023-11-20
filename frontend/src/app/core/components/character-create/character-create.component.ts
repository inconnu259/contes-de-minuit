import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ApiService } from '../../../api.service';
import { Character } from '../../../models/character.model';

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
    MatButtonModule,
    MatProgressSpinnerModule],
  templateUrl: './character-create.component.html',
  styleUrl: './character-create.component.scss'
})
export class CharacterCreateComponent implements OnInit {
  characterForm!: FormGroup;
  loading = false;
  nameFormGroup = this._formBuilder.group({
    nameCtrl: ['', Validators.required],
  });
  conceptFormGroup = this._formBuilder.group({
    conceptCtrl: ['', Validators.required],
  });

  constructor(private apiService: ApiService, private _formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.characterForm = this._formBuilder.group({
      name: ['', Validators.required],
      concept: ['', Validators.required],
      age: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      description: ['', Validators.required],
      place: ['', Validators.required],
      motivation: ['', Validators.required],
      quest: ['', Validators.required],
      ether: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
  }

  createCharacter() {
    if (this.characterForm.valid) {
      this.loading = true;
      const character: Character = this.characterForm.value as Character;

      // Convertir les champs 'age' et 'ether' en nombres
      character.age = Number(character.age);
      character.ether = Number(character.ether);

      this.apiService.createCharacter(character).subscribe(
        (response) => {
          console.log(response);
          const newCharacterId = response.id;
          this.loading = false;
          if (newCharacterId) {
            this.router.navigate(['/characters', newCharacterId]);
          }
        },
        (error) => {
          console.error('Erreur lors de la création du personnage : ', error);
          this.loading = false;
        }
      );
    } else {
      console.error('Personnage non valid');
    }
  }
}
/*
import { Component } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

export interface StepType {
  label: string;
  fields: FormlyFieldConfig[];
}

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent {
  activedStep = 0;

  model = {};
  steps: StepType[] = [
    {
      label: 'Personal data',
      fields: [
        {
          key: 'firstname',
          type: 'input',
          templateOptions: {
            label: 'First name',
            required: true,
          },
        },
        {
          key: 'age',
          type: 'input',
          templateOptions: {
            type: 'number',
            label: 'Age',
            required: true,
          },
        },
      ],
    },
    {
      label: 'Destination',
      fields: [
        {
          key: 'country',
          type: 'input',
          templateOptions: {
            label: 'Country',
            required: true,
          },
        },
      ],
    },
    {
      label: 'Day of the trip',
      fields: [
        {
          key: 'day',
          type: 'input',
          templateOptions: {
            type: 'date',
            label: 'Day of the trip',
            required: true,
          },
        },
      ],
    },
  ];

  form = new FormArray(this.steps.map(() => new FormGroup({})));
  options = this.steps.map(() => <FormlyFormOptions> {});

  prevStep(step) {
    this.activedStep = step - 1;
  }

  nextStep(step) {
    this.activedStep = step + 1;
  }

  submit() {
    alert(JSON.stringify(this.model));
  }
}*/


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */