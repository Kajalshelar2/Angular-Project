import { Component } from '@angular/core';
import { GameService } from '../Services/game.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule,
    FormsModule
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  guess: number = 0;
  feedback: string = '';
  attempts: number = 0;

  constructor(private gameService: GameService) {}

  makeGuess(): void {
    const isCorrect = this.gameService.checkGuess(this.guess);
    if (isCorrect) {
      this.feedback = `Correct! You guessed the magic number ${this.guess} in ${this.gameService.getAttempts()} attempts.`;
    } else {
      this.feedback = 'Try your luck again!';
    }
    this.attempts = this.gameService.getAttempts();
  }

  restartGame(): void {
    this.gameService.resetGame();
    this.guess = 0;
    this.feedback = '';
    this.attempts = 0;
  }

}
