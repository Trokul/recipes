import React from 'react';

export const RecipesContext = React.createContext({
    currItem: null,
    changeItem: () => {}
});
