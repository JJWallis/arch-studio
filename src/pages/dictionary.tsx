import { useRef, useState } from 'react';

const fetchUserWord = async (userWord: string) => {
   try {
      const res = await fetch(
         `https://api.dictionaryapi.dev/api/v2/entries/en/${userWord}`
      );

      if (!res.ok)
         throw new Error('Error: failed to fetch user word, stopping.');

      return await res.json();
   } catch (error) {
      console.error(error);
      throw new Error(error instanceof Error ? error.message : String(error));
   }
};

const fetchUserWordWithTimeout = (userInput: string) =>
   Promise.race([
      new Promise((resolve, reject) =>
         setTimeout(() => reject('Unable to fetch results'), 5000)
      ),
      fetchUserWord(userInput),
   ]);

const SearchInput: React.FC = () => {
   const [currentWordData, setCurrentWordData] = useState([]);
   const [input, setInput] = useState('');
   const [errorMessage, setErrorMessage] = useState('');
   const inputRef = useRef<HTMLInputElement>(null);
   const timerRef = useRef<NodeJS.Timeout | null>(null);

   const updateFormState = async (userInput: string) => {
      if (userInput === '') {
         setErrorMessage('Please enter a word');
         return;
      }

      try {
         const fetchedWordData = await fetchUserWordWithTimeout(userInput);
         setCurrentWordData(fetchedWordData);
         setErrorMessage('');
      } catch (error: any) {
         setErrorMessage(error.message);
      }
   };

   const debouncedUpdateFormState = (userInput: string) => {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => updateFormState(userInput), 500);
   };

   return (
      <>
         <label htmlFor="input">
            <input
               id="input"
               ref={inputRef}
               value={input}
               onChange={(evt) => {
                  setInput(evt.target.value);
                  debouncedUpdateFormState(evt.target.value);
               }}
               placeholder="Enter a word to search for"
            />
            {errorMessage && (
               <div role="alert" style={{ color: 'red' }}>
                  {errorMessage}
               </div>
            )}
         </label>
         {!errorMessage && <pre>{String(currentWordData)}</pre>}
      </>
   );
};

const Dictionary: React.FC = () => (
   <div>
      <SearchInput />
   </div>
);

export default Dictionary;
