import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { TourMapComponent } from './tour-map/tour-map.component';
import { InteractiveTourComponent } from './interactive-tour/interactive-tour.component';
import { GalleryComponent } from './gallery/gallery.component';

import { WalkThroughComponent } from './walk-through/walk-through.component';
import { VisualNarrativeComponent } from './visual-narrative/visual-narrative.component';
import { QuizComponent } from './quiz/quiz.component';
import { HomeButtonListComponent } from './home-button-list/home-button-list.component';
import { HomeButtonHorizontalComponent } from './home-button-horizontal/home-button-horizontal.component';
import { HomeButtonCarousalComponent } from './home-button-carousal/home-button-carousal.component';
const routes: Routes = [
  { path: '', component: HomeButtonCarousalComponent },
  { path: 'home', component: HomeButtonHorizontalComponent },
  { path: 'home-old', component: HomeButtonListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
