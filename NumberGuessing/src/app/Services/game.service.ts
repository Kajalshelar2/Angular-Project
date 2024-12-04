import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private magicNumber: number = 0;
  private attempts: number = 0;

  constructor() {
    this.resetGame();
  }

  resetGame(): void {
    const val = Math.random();
    this.magicNumber = Math.round(val * 10); // Generate a number between 0 and 10
    this.attempts = 0;
  }

  checkGuess(guess: number): boolean {
    this.attempts++;
    return guess === this.magicNumber;
  }

  getAttempts(): number {
    return this.attempts;
  }

  getMagicNumber(): number {
    return this.magicNumber;
  }

  
}
