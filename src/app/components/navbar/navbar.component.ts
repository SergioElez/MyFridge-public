import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [AuthService]
})
export class NavbarComponent implements OnInit {

  public isLoggued = false;
  public userName = "";
  constructor(private authService: AuthService) { }

  async ngOnInit() {
    const user = await this.authService.getCurrentUser();

    if (user)
    {
      this.isLoggued = true;
      this.userName = user.email;
      // console.log(user.uid)
    }
  }

}
