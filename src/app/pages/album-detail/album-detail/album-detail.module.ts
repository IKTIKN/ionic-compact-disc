import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AlbumDetailPageRoutingModule } from './album-detail-routing.module';
import { AlbumDetailPage } from './album-detail.page';
import { TrackComponent } from 'src/app/components/track/track.component';
import { RatingComponent } from 'src/app/components/rating/rating.component';
import { TracklistComponent } from 'src/app/components/tracklist/tracklist.component';
import { FormatsComponent } from 'src/app/components/formats/formats.component';
import { IdentifiersComponent } from 'src/app/components/identifiers/identifiers.component';
import { CreditsComponent } from 'src/app/components/credits/credits.component';
import { ReleaseComponent } from 'src/app/components/release/release.component';
import { DiscogsCommunityComponent } from 'src/app/components/discogs-community/discogs-community.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlbumDetailPageRoutingModule
  ],
  declarations: [
    AlbumDetailPage,
    CreditsComponent,
    DiscogsCommunityComponent,
    FormatsComponent,
    IdentifiersComponent,
    RatingComponent,
    ReleaseComponent,
    TracklistComponent,
    TrackComponent
  ]
})
export class AlbumDetailPageModule { }
