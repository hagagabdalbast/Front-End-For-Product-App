import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { StoreData } from '../../ViewModels/store-data';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], // Add CommonModule to imports
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'], // Fix typo: styleUrl -> styleUrls
})
export class HomeComponent implements OnInit ,OnDestroy{
 subscriptions:Subscription[]=[];
  storeInfo: StoreData;
  isImageShown: boolean = true;

  constructor() {
    this.storeInfo = new StoreData(
      'ITI Store',
      'https://picsum.photos/600/200',
      ['Cairo', 'Alex', 'Qena']
    );
  }
 
  ngOnInit(): void {
    /* let adsSubscription=this.PromoAds.getScheduledAds(3).subscribe({
      next: (data: String) => {
        console.log(data);
      },
      error: (err: string) => {
        console.log(err);
      },
      complete: () => {
        console.log('Ads Finished!');
      },
    });
    this.subscriptions.push(adsSubscription); */

    /* let sub=this.PromoAds.getSerialAds().subscribe(
      ads=>{
        console.log(ads);
      });
      this.subscriptions.push(sub); */
      let observer={
        next: (data: String) => {
          console.log(data);
        },
        error: (err: string) => {
          console.log(err);
        },
        complete: () => {
          console.log('Ads Finished!');
        }
  
      };

     
  }

  ngOnDestroy(): void {
     //this.subscription.unsubscribe();
     for(let Subscription of this.subscriptions){
      Subscription.unsubscribe();
     }
  }


  toggleImage() {
    this.isImageShown = !this.isImageShown;
  }
}
