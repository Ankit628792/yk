import React, { useState, useEffect } from 'react';

const JumbleWord = ({ word }) => {
    const [jumbledWord, setJumbledWord] = useState('');
    const [showOriginal, setShowOriginal] = useState(false);

    useEffect(() => {
        let intervalId;

        // Function to jumble the word
        const jumble = () => {
            const shuffledWord = word.split('').sort(() => Math.random() - 0.5).join('');
            setJumbledWord(shuffledWord);
        };

        // Jumble the word every 10ms for the initial 2 seconds
        let elapsedTime = 0;
        intervalId = setInterval(() => {
            jumble();
            elapsedTime += 10;

            // Check if 2 seconds have passed
            if (elapsedTime >= 1500) {
                clearInterval(intervalId);
                // Set a timeout to show the original word after 2 seconds
                const timeoutId = setTimeout(() => {
                    setShowOriginal(true);
                }, 1500);

                // Clean up the timeout to avoid memory leaks
                return () => clearTimeout(timeoutId);
            }
        }, 10);

        setTimeout(() => {
            setShowOriginal(true)
        }, 1400);

        // Clean up the interval to avoid memory leaks
        return () => clearInterval(intervalId);
    }, [word]);

    return (
        <>
            {
                showOriginal ? word : jumbledWord
            }
        </>
    );
};

export default JumbleWord