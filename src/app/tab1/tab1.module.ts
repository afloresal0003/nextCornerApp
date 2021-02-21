import { MbscModule } from '@mobiscroll/angular';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { ChallengeNewPage } from '../challenge-new/challenge-new.page';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab1PageRoutingModule } from './tab1-routing.module';

@NgModule({
  imports: [ 
    MbscModule,  
    IonicModule,
    CommonModule,
    FormsModule,
    //ChallengeNewPage,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule, ReactiveFormsModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}