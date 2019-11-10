import * as React from 'react';

import { useHistory, useLocation } from 'react-router-dom';

const categories = [
  {
    id: 1,
    name: 'Animals',
  },
  {
    id: 2,
    name: 'Clothing',
  },
  {
    id: 3,
    name: 'Whatever'
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
      {categories.map(cat => {
        return (
          <div     
            key={`catId-${cat.id}`}
            style={{ borderStyle: 'solid', borderWidth: 'medium' }}
            onClick={() => {
              history.push({
                pathname: '/categories/' + cat.name.toLowerCase(),
                state: {
                  ...location.state
                }
              });
            }}
          >
            <h1>{cat.name}</h1>
          </div>
        );
      })}
    </div>
  );
}