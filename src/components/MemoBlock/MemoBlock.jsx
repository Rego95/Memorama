import "./MemoBlock.css";

export function MemoBlock({ animation, handleMemoClick, memoBlock }) {
  return (
    <div
      className="memo-block"
      onClick={() =>
        !memoBlock.flipped && !animation && handleMemoClick(memoBlock)
      }
    >
      <div
        className={`memo-block-inner ${
          memoBlock.flipped && "memo-block-flipped"
        }`}
      >
        <div className="memo-block-front"></div>
        <div className="memo-block-back">{memoBlock.emoji}</div>
      </div>
    </div>
  );
}
