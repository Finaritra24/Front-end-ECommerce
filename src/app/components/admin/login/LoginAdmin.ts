
import { Component,OnInit } from '@angular/core';
import ServLoginAdmin from './ServLoginAdmin';
import { Router } from '@angular/router';

@Component({
    selector: 'Login-admin-compo',
    templateUrl: 'LoginAdmin.html'
})
export class LoginAdmin {
  identification:String|undefined;
  mdp:String|undefined
  erreur:String|undefined
  ngOnInit(){
    this.identification='admin1';
    this.mdp='password1';
    this.erreur="";
  }
  constructor(private router: Router) {}
  onValiderClick() {
    const data = {
      identification: this.identification,
      mdp: this.mdp,
    };

    ServLoginAdmin.sendMethodPost('loginAdmin', data)
      .then((response) => {
        if (response === 'Success') {
          // Connexion réussie
          console.log('Connexion réussie');
          this.router.navigate(['/home']);
        } else {
          // Informations d'identification incorrectes
          this.erreur="Erreur Identification ou mot de passe";
          console.log('Informations d\'identification incorrectes');
        }
      })
      .catch((error) => {
        // Gérer les erreurs
        console.error('Erreur lors de la connexion :', error);
      });
  }
}
