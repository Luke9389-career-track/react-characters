import React, { Component } from 'react';
import characters from '../../../data/characters';
import Character from './Character';
import styles from './CharacterList.css';

export default class CharacterList extends Component {
  render() {
    return (
      <ul className={styles.CharacterList}>
        {characters.map((character, idx) => (
          <Character
            key={idx}
            img={character.img}
            name={character.name}
            species={character.species}
          />
        ))}
      </ul>
    );
  }
}


