import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [AuthService]
})
export class NavbarComponent implements OnInit {

  public static logued = false;

  public isLoggued = false;
  public userName = "";
  constructor(private authService: AuthService, public dbService: DbService, public router: Router) { }

  async ngOnInit() {
    this.checkLog();
  }

  ngDoCheck() {
    if (NavbarComponent.logued)
    {
      this.userName = "Perfil"
      this.isLoggued = true;
      this.checkLog();
      NavbarComponent.logued = false;
    }
  }

  async checkLog() {
    const u = await this.dbService.getCurrentUser();

    if (u != null)
    {
      this.isLoggued = true;
      this.userName = u["email"];

      //console.log(this.dbService.getCurrentUserId())

      let user = this.dbService.getUser(u["uid"])
      user.subscribe(user => {
        // console.log(user);
      })
    }
  }

  logout() {
    console.log("Logout")

    this.userName = "Perfil"
    NavbarComponent.logued = false;
    this.isLoggued = false;

    this.authService.logout();
    this.router.navigate(['/'])

  }

}
