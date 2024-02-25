import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReleaseResponse } from 'src/app/interfaces/ReleaseResponse';
import { CommonService } from 'src/app/services/common/common.service';
import { DiscogsService } from 'src/app/services/discogs/discogs.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.page.html',
  styleUrls: ['./album-detail.page.scss'],
})
export class AlbumDetailPage implements OnInit {
  private route: ActivatedRoute = inject(ActivatedRoute);
  private discogs: DiscogsService = inject(DiscogsService);
  common: CommonService = inject(CommonService);

  coverImg!: string | null;
  releaseId!: string | null;

  release!: ReleaseResponse;

  constructor() { }

  ngOnInit() {
    this.coverImg = this.route.snapshot.paramMap.get('coverImg');
    this.releaseId = this.route.snapshot.paramMap.get('releaseId');
    
    //TODO Handle not found error / network error
    if (this.releaseId) this.discogs.getRelease(this.releaseId)
      .subscribe((releaseResponse) => {
        this.release = releaseResponse;
    });
  }

}
