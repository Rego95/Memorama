import { MemoBlock } from "../MemoBlock/MemoBlock";
import "./Tablero.css"

export function Tablero({ memoBlocks, handleMemoClick, animation }) {
  return (
    <main className="board">
      {memoBlocks.map((item, index) => {
        return <MemoBlock key={`${index}_${item.emoji}`} memoBlock={item} animation={animation} handleMemoClick={handleMemoClick} />;
      })}
    </main>
  );
}
