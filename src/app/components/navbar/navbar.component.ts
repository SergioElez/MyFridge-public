import { Component, OnInit } from '@angular/core';
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
  constructor(private authService: AuthService, public dbService: DbService) { }

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
    const u = await this.authService.getCurrentUser();

    if (u != null)
    {
      this.isLoggued = true;
      this.userName = u["email"];

      console.log(u)
      let user = this.dbService.getUser(u["uid"])
      user.subscribe(user => {
        // console.log(user);
      })
    }
  }

}
