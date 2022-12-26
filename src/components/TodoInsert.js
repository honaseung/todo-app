import { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import '../style/TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChangeValueIpb = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onClick = useCallback(
    (e) => {
      onInsert(value);
      setValue('');
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <>
      <form className="TodoInsert">
        <input
          placeholder="할 일을 입력하세요."
          type="text"
          name="value"
          value={value}
          onChange={onChangeValueIpb}
        />
        <button onClick={onClick}>
          <MdAdd />
        </button>
      </form>
    </>
  );
};

export default TodoInsert;
