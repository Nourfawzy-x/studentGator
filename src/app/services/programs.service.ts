import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProgramsService {
  constructor(private myClient: HttpClient) {}
  private programs_URl =
    'https://mohanad-gadallah-mfyg726r7q-uc.a.run.app/programstask/1?name=None&city=None&Language=None&type=None&level=None&sort=None&school=None&category=None';
  getAllPrograms() {
    return this.myClient.get(this.programs_URl);
  }
}
