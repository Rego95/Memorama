import { useState, useEffect } from "react";
import { Tablero } from "./components/Tablero/Tablero";

const emojiList = [..."💀👻🧛🌮🎱🍬🍕🦖"];

function App() {
  const [memobloquesbarajados, setmemobloquesbarajados] = useState([]);
  const [animation, setAnimation] = useState(false);
  const [selectMemoBlock, setselectMemoBlock] = useState(null);

  useEffect(() => {
    const barajadoEmojiList = barajarArray([...emojiList, ...emojiList]);
    setmemobloquesbarajados(
      barajadoEmojiList.map((emoji, i) => ({
        index: i,
        emoji,
        flipped: false,
      }))
    );
  }, []);

  const barajarArray = (a) => {
    for (let i = a.lenght - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const handleMemoClick = (memoBlock) => {
    const MemoBlockInvertido = { ...memoBlock, flipped: true };
    let memobloquesbarajadoscopy = [...memobloquesbarajados];
    memobloquesbarajadoscopy.splice(memoBlock.index, 1, MemoBlockInvertido);

    setmemobloquesbarajados(memobloquesbarajadoscopy);

    if (selectMemoBlock === null) {
      setselectMemoBlock(memoBlock);
    } else if (selectMemoBlock.emoji === memoBlock.emoji) {
      setselectMemoBlock(null);
    }else{
      setAnimation(true);
      setTimeout(() => {
        memobloquesbarajadoscopy.splice(memoBlock.index, 1, memoBlock);
        memobloquesbarajadoscopy.splice(
          selectMemoBlock.index,
          1,
          selectMemoBlock
        );
        setmemobloquesbarajados(memobloquesbarajadoscopy);
        setselectMemoBlock(null);
        setAnimation(false);
      }, 1000);
    }
  };

  return (
    <div className="App">
      <Tablero
        memoBlocks={memobloquesbarajados}
        handleMemoClick={handleMemoClick}
        animation={animation}
      />
    </div>
  );
}

export default App;
