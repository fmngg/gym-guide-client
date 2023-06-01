import Input from '@/UI/Input';
import { MdSend } from 'react-icons/md';
import styles from './CommentInput.module.scss';
import React, { FC, useState } from 'react';

import { useAppSelector } from '@/redux/hooks';
import { selectUserData } from '@/redux/slices/user';

type Props = {
  setCommentData: any;
};

const CommentInput: FC<Props> = ({ setCommentData }) => {
  const userData = useAppSelector(selectUserData);

  const [inputValue, setInputValue] = useState('');

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode == 13) {
      setCommentData(event.currentTarget.value);
      setInputValue('');
    }
  };

  if (!userData) {
    return (
      <div className={styles.error}>
        <p>Sign in to leave comments</p>
      </div>
    );
  }

  return (
    <div className={styles.commentInput}>
      <Input
        value={inputValue}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder="Write your opinion"
      />
      <MdSend
        onClick={() => {
          setCommentData(inputValue);
          setInputValue('');
        }}
        className={styles.send}
      />
    </div>
  );
};

export default CommentInput;
