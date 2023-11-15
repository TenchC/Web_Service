# Deck API! #

## Commands ##
### /command/:create_deck ###
creates a new deck and resets all piles. Deck will be sorted

### /command/:shuffle_deck ###
shuffles all drawn cards back into the deck and shuffles the deck itself

### /command/:draw_card ###
draws the card at the top of the draw pile

### /command/:draw_spade ###
draws the first spade in the draw pile

### /command/:draw_heart ###
draws the first heart in the draw pile

### /command/:draw_club ###
draws the first club in the draw pile

### /command/:draw_diamond ###
draws the first diamond in the draw pile

### /command/:see_deck ###
returns array of cards in the deck in the order they will be drawn

### /command/:see_draws ###
returns array of cards already drawn in order