import React, { useState } from 'react';
import { TodoInsertWrapper } from './styled';
import { MdAdd } from 'react-icons/md';
import InputBox from 'components/atoms/InputBox';
import Button from 'components/atoms/Button';
import { useDispatch } from 'react-redux';
import { insert } from 'redux/todo/action';

function TodoInsert() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleTodoInsert = (e) => {
    e.preventDefault();
    dispatch(insert(value));
    setValue('');
  };

  return (
    <form onSubmit={handleTodoInsert}>
      <TodoInsertWrapper>
        <InputBox placeholder="what to do?" value={value} onChange={(e) => setValue(e.currentTarget.value)} />
        <Button type="submit">
          <MdAdd />
        </Button>
      </TodoInsertWrapper>
    </form>
  );
}

export default TodoInsert;
