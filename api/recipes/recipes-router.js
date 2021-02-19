const express = require('express');

const Recipes = require('./recipes-model');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.get()
      .then(recipes => {
        res.json(recipes);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get recipes' });
      });
});

router.get('/:id/shoppingList', (req, res) => {
    const { id } = req.params;
    
    Recipes.getShoppingList(id)
      .then(recipe => {
        if (recipe) {
          res.json(recipe);
        } else {
          res.status(404).json({ message: 'Could not find recipe shopping list with given id.' })
        }
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get shoppinglist' });
      });
});

router.get('/:id/instructions', (req, res) => {
    const { id } = req.params;
    
    Recipes.getInstructions(id)
      .then(recipe => {
        if (recipe) {
          res.json(recipe);
        } else {
          res.status(404).json({ message: 'Could not find recipe steps with given id.' })
        }
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get recipe steps' });
      });
});

module.exports = router;