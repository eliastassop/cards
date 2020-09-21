import React from 'react';
import Flashcard from './Flashcard';

//destructuring props instead of putting parameter pros and then props.flashcards
export default function FlashcardList({ flashcards }) {
    return (
        <div className="card-grid">
            {flashcards.map(flashcard => {
                return <Flashcard flashcard={flashcard} key={flashcard.id} />
            })}

        </div>
    )
}
