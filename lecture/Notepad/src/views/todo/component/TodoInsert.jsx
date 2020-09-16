import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import '../../../assets/scss/todo/TodoInsert.scss';

function TodoInsert(props) {
  const { handleAdd } = props;
  const [value, setValue] = useState('');
  const handlePreAdd = (e) => {
    e.preventDefault();
    handleAdd(value);
    setValue('');
  };

  return (
    <form className="TodoInsert" onSubmit={handlePreAdd}>
      <input
        placeholder="what to do?"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
}

export default TodoInsert;
