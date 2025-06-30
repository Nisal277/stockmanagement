import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-lock-screen',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './lock-screen.html',
  styleUrls: ['./lock-screen.css']
})
export class LockScreen implements OnInit {
  time: string = '';
  date: string = '';
  dragging = false;
  dragProgress = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.updateDateTime();
    setInterval(() => this.updateDateTime(), 1000);
  }

  updateDateTime() {
    const now = new Date();
    this.time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    this.date = now.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  }

  onSlide(event: any) {
    const value = event.target.value;
    this.dragProgress = value;

    if (value >= 100) {
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 300);
    }
  }
}
