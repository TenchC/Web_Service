# Deck API! #

## Commands ##
### /command/:create_deck ###
creates a new deck and resets all piles. Deck will be sorted in the following order
Ace through King Spades, Ace through King Diamonds, Ace through King Clubs, Ace through King Hearts


### /command/:shuffle_deck ###
shuffles all drawn cards back into the deck and shuffles the deck itself

### /command/:draw_card ###
returns card object at the top of the draw pile

### /command/:draw_spade ###
returns the first card object with the spade suit in the draw pile

### /command/:draw_heart ###
returns the first card object with the heart suit in the draw pile

### /command/:draw_club ###
returns the first card object with the club suit in the draw pile

### /command/:draw_diamond ###
returns the first card object with the diamond suit in the draw pile

### /command/:see_deck ###
returns array of cards in the deck in the order they will be drawn

### /command/:see_draws ###
returns array of cards already drawn in order