import * as React from 'react';

import { useHistory, useLocation } from 'react-router-dom';

import animalImg from '../../static/img/categories/ape.png';
import clothingImg from '../../static/img/categories/clothes.png';
import burgerImg from '../../static/img/categories/burger.png';
import '../../css/common.css';

const categories = [
  {
    id: 1,
    name: 'Animals',
    img: animalImg
  },
  {
    id: 2,
    name: 'Clothing',
    img: clothingImg
  },
  {
    id: 3,
    name: 'Food',
    img: burgerImg
  }
]

export default function CategoriesPage() {
  const history = useHistory();
  const location = useLocation();

  // check locationState to see if loaded from StoryPage
  // let fromStoryPage = false;
  if (location.state) {
    if (location.state.fromStoryPage) {
      // fromStoryPage = true;
    }
  }

  return (
    <div>
      <h1>Categories</h1>
      <div className="flex-row list-row">
        {categories.map(cat => {
          // only allow animal category
          const disabled = !(cat.id === 1) ? true : false;

          return (
            <div   
              className={disabled ? 'card-item flex-column' : 'card-item flex-column clickable'}
              key={`catId-${cat.id}`}
              style={{ borderStyle: 'solid', borderWidth: 'medium' }}
              onClick={disabled ? null : () => {
                history.push({
                  pathname: '/categories/' + cat.name.toLowerCase(),
                  state: {
                    ...location.state
                  }
                });
              }}
            >
              <h1>{cat.name}</h1>
              <img
                className={disabled ? 'card-img grayscale' : 'card-img'}
                src={cat.img}
                alt={cat.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}