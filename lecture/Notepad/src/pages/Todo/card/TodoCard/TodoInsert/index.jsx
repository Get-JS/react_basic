import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as S from './styled';
import { MdAdd } from 'react-icons/md';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import { todoAction } from 'redux/todo';
const { add } = todoAction;

function TodoInsert() {
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: { text: '' },
    mode: 'onBlur',
  });

  const handleTodoInsert = (formData) => {
    dispatch(add(formData));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleTodoInsert)}>
      <S.Container>
        <Input className="insert-text" id="text" name="text" ref={register} placeholder="what to do?" />
        <Button type="submit">
          <MdAdd />
        </Button>
      </S.Container>
    </form>
  );
}

export default TodoInsert;
