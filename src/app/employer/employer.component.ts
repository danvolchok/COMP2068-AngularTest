import { Component } from '@angular/core';

// create public employer class to mock some data
export class Employer {
  id: number | undefined;
  name: string | undefined;
  location: string | undefined;
}

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
})

export class EmployerComponent {
  // create an array of employers
  EMPLOYERS: Employer[] = [
    { id: 500, name: 'Ministry of Community and Social Services', location: 'North York' },
    { id: 501, name: 'BlueCat Networks', location: 'North York' },
    { id: 502, name: 'Ministry of Transportation', location: 'Toronto' }
  ]

  selectedEmployer: Employer | undefined

  onSelect(employer: Employer): void {
    this.selectedEmployer = employer
    console.log(this.selectedEmployer)
  }

  reset(): void {
    this.selectedEmployer = undefined
  }
}
