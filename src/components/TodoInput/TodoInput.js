import React from "react";
import styles from "./TodoInput.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

//input과 버튼이 함께 존재하는 컴포넌트입니다.
/*
    value: input 값
    onChange: input 변경 이벤트
    onInsert: 추가 버튼 클릭 이벤트
*/

const TodoInput = ({ value, onChange, onInsert }) => {
  //Enter키가 눌렸을 때 onInsert실행
  const handleKeyPress = e => {
    if (e.key === "Enter") {
      onInsert();
    }
  };

  return (
    <div className={cx("todo-input")}>
      <input onChange={onChange} value={value} onKeyPress={handleKeyPress} />
      <div className={cx("add-button")} onClick={onInsert}>
        추가
      </div>
    </div>
  );
};

export default TodoInput;
