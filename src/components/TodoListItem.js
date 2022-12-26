import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import '../style/TodoListItem.scss';
import classNames from '../../node_modules/classnames/index';
import React from 'react';

const TodoListItem = ({ todo, onDelete, onToggle, style }) => {
  const { id, text, checked } = todo;
  return (
    <>
      <div className="TodoListItem-virtualized" style={style}>
        <div className="TodoListItem">
          <div
            className={classNames('checkbox', { checked })}
            onClick={() => onToggle(id, checked)}
          >
            {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            <div className="text">{text}</div>
          </div>
          <div className="remove">
            <MdRemoveCircleOutline onClick={() => onDelete(id)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(TodoListItem);
