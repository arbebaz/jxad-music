import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../../components/header/header.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { Post } from '../post.model';

@Component({
  selector: 'app-news-feed',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent, FooterComponent, FormsModule],
  templateUrl: './news-feed.component.html',
  styleUrl: './news-feed.component.css'
})
export class NewsFeedComponent  implements OnInit {
  posts: Post[] = [
    {
      id: 1,
      title: 'Titre de la publication',
      description: 'Description de la publication.',
      coverImageUrl: 'assets/images/post1.jpg',
      date: new Date(),
      likes: 0,
      comments: 0
    },
    {
      id: 2,
      title: 'Autre publication',
      description: 'Description de la deuxième publication.',
      coverImageUrl: 'assets/images/post2.jpg',
      date: new Date(),
      likes: 0,
      comments: 0
    }
    // Ajoutez d'autres publications ici
  ];

  constructor() {}

  ngOnInit(): void {}

  likePost(post: Post) {
    // Logique pour ajouter un like à la publication
    post.likes++; // Exemple simple, à adapter avec votre backend
    // Appeler un service ou une API pour sauvegarder le like
  }

  commentPost(post: Post) {
    // Logique pour commenter une publication
    // Vous pouvez ouvrir une boîte de dialogue, rediriger vers une page de commentaires, etc.
  }
}