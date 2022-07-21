import { makeAutoObservable } from 'mobx';
import { Character as CharacterType } from '../types';

class Current {
  characterRick: CharacterType | null = null;
  characterMorty: CharacterType | null = null;

  constructor() {
    makeAutoObservable(this);
  };

  setCharacterRick(character: CharacterType) {
    this.characterRick = character;
  };

  setCharacterMorty(character: CharacterType) {
    this.characterMorty = character;
  };
}

export default new Current();