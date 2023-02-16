import { Child, MemoizedChild } from "components/Child/Child";
import { useCallback, useMemo, useState } from "react";
import styles from "./Parent.module.css";

const Parent = () => {
  console.log("Render Parent");

  const [totalCount, setTotalCount] = useState<number>(0);

  const increase = () => setTotalCount((prev) => prev + 1);

  const memoizedIncrease = useCallback(() => {
    setTotalCount((prev) => prev + 1);
  }, []);

  const memoizedTotalCount = useMemo(() => totalCount, []);

  return (
    <div className={styles.wrapper}>
      <h2>
        Parent {totalCount ? <span>Total count: {totalCount}</span> : null}
      </h2>
      <button onClick={increase}>Increase total counter</button>
      <div className={styles.body}>
        <Child
          name="Regular child"
          onParentIncrease={memoizedIncrease}
          parentCount={totalCount}
        />
        <MemoizedChild
          name="Memoized child"
          onParentIncrease={memoizedIncrease}
          parentCount={memoizedTotalCount}
        />
      </div>
    </div>
  );
};

export { Parent };
