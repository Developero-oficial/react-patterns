import {useState} from 'react';

export const FinalLikeButton = ({value, setValue}) => {
  const isControlled = value !== undefined && setValue !== undefined;

  const [likes, setLikes] = useState(0);

  const handleClick = () => (isControlled ? setValue() : setLikes(likes + 1));

  return (
    <button onClick={handleClick}>
      <span role="img" aria-label="like">
        👍
      </span>
      {isControlled ? value : likes}
    </button>
  );
};
