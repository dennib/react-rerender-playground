import { memo, useState } from "react";
import styles from "./Child.module.css";

interface ChildProps {
  name: string;
  parentCount: number;
  onParentIncrease: () => void;
}

const Child = ({ name, onParentIncrease, parentCount }: ChildProps) => {
  console.log(`Render ${name}`);
  const [childCounter, setChildCounter] = useState<number>(0);

  return (
    <div className={styles.wrapper}>
      <h3>
        {name} {childCounter ? <span>Child count: {childCounter}</span> : null}
      </h3>
      <button onClick={onParentIncrease}>Increase parent counter</button>
      <button onClick={() => setChildCounter((prev) => prev + 1)}>
        Increase child counter
      </button>

      <h5>I think parent count is {parentCount}</h5>
    </div>
  );
};

const MemoizedChild = memo(Child);

export { Child, MemoizedChild };
