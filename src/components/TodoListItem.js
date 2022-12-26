import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import '../style/TodoListItem.scss';
import classNames from '../../node_modules/classnames/index';

const TodoListItem = ({ todo }) => {
  const { text, checked } = todo;
  return (
    <>
      <div className="TodoListItem">
        <div className={classNames('checkbox', { checked })}>
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="text">{text}</div>
        </div>
        <div className="remove">
          <MdRemoveCircleOutline />
        </div>
      </div>
    </>
  );
};

export default TodoListItem;
