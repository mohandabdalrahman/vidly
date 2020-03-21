import React from 'react';
const Fav = ({ onLike, movie }) => {
  const getLikeClasses = () => {
    let classes = 'fa-heart ';
    classes += movie.liked ? 'fas' : 'far';
    return classes;
  };
  return (
    <React.Fragment>
          <i onClick={() => onLike(movie)} style={{cursor:'pointer'}} className={getLikeClasses()}></i>
    </React.Fragment>
  );
}; 

export default Fav;
