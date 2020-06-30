import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileModel } from './profile.model';
import { FirebaseAuthService } from '../firebase-auth.service';
import { HttpClient } from '@angular/common/http';
// import { ApiService } from '../api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: ProfileModel;
  articles;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: FirebaseAuthService,
//    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.route.data
    .subscribe((result) => {
      this.user = result['data'];
    })

/*    this.apiService.getFirestore().subscribe(data => {
      this.policies = data.map(e => {
        return {

  API_KEY = 'e40d07f00b094602953cc3bf8537477e';

  constructor(private httpClient: HttpClient) { }

  getNews(){
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
  }*/

  }

  signOut() {
    this.authService.signOut().subscribe(() => {
      // Sign-out successful.
      this.router.navigate(['sign-in']);
    }, (error) => {
      console.log('signout error', error);
    });
  }
  
/*  ionViewDidEnter(){
    this.apiService.getNews().subscribe((data)=>{
      console.log(data);
      this.articles = data['articles'];
    });
  }
*/

}
