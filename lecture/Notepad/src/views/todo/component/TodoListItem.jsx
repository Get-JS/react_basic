import React, { memo } from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import '../../../assets/scss/todo/TodoListItem.scss';

function TodoListItem(props) {
  const { handleRemove, toggleTodoCheck } = props;
  const { todo } = props;
  const { id, text, checked } = todo;
  return (
    <div className="TodoListItem">
      <div
        className={cn('checkbox', { checked })}
        onClick={() => toggleTodoCheck(id)}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => handleRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
}

export default memo(TodoListItem);
