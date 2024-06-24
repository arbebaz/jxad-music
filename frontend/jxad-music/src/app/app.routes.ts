import { Routes } from '@angular/router';
import { HomeComponent } from './pages/general/home/home.component';
import { NotFoundComponent } from './pages/specific/not-found/not-found.component';
import { RegisterComponent } from './pages/general/register/register.component';
import { LoginComponent } from './pages/general/login/login.component';
import { EditProfileComponent } from './pages/general/edit-profile/edit-profile.component';
import { UploadSongComponent } from './pages/general/upload-song/upload-song.component';
import { ManageSongComponent } from './pages/general/manage-song/manage-song.component';
import { ArtistNewsFeedComponent } from './pages/general/artist-news-feed/artist-news-feed.component';
import { ArtistNotesComponent } from './pages/general/artist-notes/artist-notes.component';
import { MessagesComponent } from './pages/general/messages/messages.component';
import { UploadBeatComponent } from './pages/general/upload-beat/upload-beat.component';
import { ManageBeatsComponent } from './pages/general/manage-beats/manage-beats.component';
import { BeatmakerNewsFeedComponent } from './pages/general/beatmaker-news-feed/beatmaker-news-feed.component';
import { BeatmakerNotesComponent } from './pages/general/beatmaker-notes/beatmaker-notes.component';
import { UploadLyricsComponent } from './pages/general/upload-lyrics/upload-lyrics.component';
import { ManageLyricsComponent } from './pages/general/manage-lyrics/manage-lyrics.component';
import { LyricistNewsFeedComponent } from './pages/general/lyricist-news-feed/lyricist-news-feed.component';
import { LyricistNotesComponent } from './pages/general/lyricist-notes/lyricist-notes.component';
import { ExploreUsersComponent } from './pages/general/explore-users/explore-users.component';
import { ExploreProductionsComponent } from './pages/general/explore-productions/explore-productions.component';
import { SearchComponent } from './pages/general/search/search.component';
import { PurchaseHistoryComponent } from './pages/general/purchase-history/purchase-history.component';
import { ModerateContentComponent } from './pages/general/moderate-content/moderate-content.component';
import { ManageUsersComponent } from './pages/general/manage-users/manage-users.component';
import { ProfilComponent } from './pages/general/profil/profil.component';

export const routes: Routes = [
    {path: '', component: HomeComponent}, 
    {path: 'register', component: RegisterComponent}, 
    {path: 'login', component: LoginComponent}, 
    {path: 'profil', component: ProfilComponent}, 
    {path: 'edit-profile', component: EditProfileComponent},
    {path: 'upload-song', component: UploadSongComponent}, 
    {path: 'manage-song', component: ManageSongComponent}, 
    {path: 'artist-news-feed', component: ArtistNewsFeedComponent}, 
    {path: 'artist-notes', component: ArtistNotesComponent}, 
    {path: 'messages', component: MessagesComponent},
    {path: 'upload-beat', component: UploadBeatComponent},
    {path: 'manage-beats', component: ManageBeatsComponent}, 
    {path: 'beatmaker-news-feed', component: BeatmakerNewsFeedComponent}, 
    {path: 'beatmaker-notes', component: BeatmakerNotesComponent}, 
    {path: 'upload-lyrics', component: UploadLyricsComponent},
    {path: 'manage-lyrics', component: ManageLyricsComponent}, 
    {path: 'lyricist-news-feed', component: LyricistNewsFeedComponent}, 
    {path: 'lyricist-notes', component: LyricistNotesComponent}, 
    {path: 'explore-users', component: ExploreUsersComponent}, 
    {path: 'explore-productions', component: ExploreProductionsComponent}, 
    {path: 'search', component: SearchComponent}, 
    {path: 'purchase-history', component: PurchaseHistoryComponent}, 
    {path: 'moderate-content', component: ModerateContentComponent}, 
    {path: 'manage-users', component: ManageUsersComponent}, 
 

    {path: '**', component: NotFoundComponent}, 
];
