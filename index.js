//import express library
import express from "express";

//create a new express application
const app = express();

app.use(express.json());

//at this port
const port = process.env.PORT || 3001;

//set up app to listen on the port
app.listen(port, function () {
  console.log(`Card app listening on port ${port}`);
});

//class for card
class card {
  constructor(suit, value, face) {
    this.suit = suit;
    this.value = value;
    this.face = face;
    this.name;
  }
  name_card() {
    if (this.value == 1) {
      this.name = "Ace";
    } else if (1 < this.value && this.value < 11) {
      this.name = "" + this.value;
    } else if (this.value == 11) {
      this.name = "Jack";
    } else if (this.value == 12) {
      this.name = "Queen";
    } else if (this.value == 13) {
      this.name = "King";
    }
  }
}

let deck = {
  draw_pile: [],
  play_pile: [],
  create_deck: function () {
    //suit
    for (let x = 0; x < 4; x++) {
      //value
      if (x == 0) {
        for (let y = 1; y < 14; y++) {
          if (y < 11) {
            deck.draw_pile.push(new card("Spade", y, false));
          } else {
            deck.draw_pile.push(new card("Spade", y, true));
          }
        }
      } else if (x == 1) {
        for (let y = 1; y < 14; y++) {
          if (y < 11) {
            deck.draw_pile.push(new card("Diamond", y, false));
          } else {
            deck.draw_pile.push(new card("Diamond", y, true));
          }
        }
      } else if (x == 2) {
        for (let y = 1; y < 14; y++) {
          if (y < 11) {
            deck.draw_pile.push(new card("Club", y, false));
          } else {
            deck.draw_pile.push(new card("Club", y, true));
          }
        }
      } else if (x == 3) {
        for (let y = 1; y < 14; y++) {
          if (y < 11) {
            deck.draw_pile.push(new card("Heart", y, false));
          } else {
            deck.draw_pile.push(new card("Heart", y, true));
          }
        }
      }
    }
    for (let z = 0; z < deck.draw_pile.length; z++) {
      this.draw_pile[z].name_card();
    }
    console.log("You made your deck!");
  },
  shuffle_draw_pile: function () {
    if (deck.draw_pile.length > 0) {
      this.draw_pile = this.draw_pile.sort((a, b) => 0.5 - Math.random());
      console.log("Your draw pile is shuffled.");
    } else {
      console.log(
        "Your draw pile is empty, try creating a deck or shuffling your play pile back into your deck."
      );
    }
  },
  shuffle_play_back: function () {
    if (deck.draw_pile.length + this.play_pile.length > 0) {
      this.draw_pile.push(this.play_pile);
      this.play_pile = [];
      this.draw_pile = this.draw_pile.sort((a, b) => 0.5 - Math.random());
      console.log("You shuffled all your cards into your draw pile.");
    } else {
      console.log("Your deck is empty! Make a new one using deck.create_deck");
    }
  },
  draw_card: function () {
    if (this.draw_pile.length > 0) {
      this.play_pile.push(this.draw_pile[0]);
      this.draw_pile.splice(0, 1);
      console.log(
        "You drew the " +
          this.play_pile[this.play_pile.length - 1].name +
          " of " +
          this.play_pile[this.play_pile.length - 1].suit
      );
    } else {
      console.log("No cards left");
    }
  },
};

//set up response for root path of app
app.get("/command/:command", function (req, res) {
  //if command is make a new deck
  if (req.params.command == ":create_deck") {
    res.send("Deck created");
    deck.create_deck();

    //if command is shuffle deck
  } else if (req.params.command == ":shuffle_deck") {
    deck.shuffle_play_back();
    res.send("Deck Shuffled");

    //if command is draw any card
  } else if (req.params.command == ":draw_card") {
    deck.draw_card();
    res.send(deck.play_pile[deck.play_pile.length - 1]);

    //if command is draw diamond
  } else if (req.params.command == ":draw_diamond") {
    let counter = 0;
    for (let i = 0; i < deck.draw_pile.length; i++) {
      if (deck.draw_pile[i].suit == "Diamond") {
        deck.play_pile.push(deck.draw_pile[i]);
        deck.draw_pile.splice(i, 1);
        res.send(deck.play_pile[deck.play_pile.length - 1]);
        counter++;
        return;
      }
    }
    if (counter == 0) {
      res.send("No Diamonds left");
      console.log("No Diamonds left");
    }
  }
  //if command is draw clubs
  else if (req.params.command == ":draw_club") {
    let counter = 0;
    for (let i = 0; i < deck.draw_pile.length; i++) {
      if (deck.draw_pile[i].suit == "Club") {
        deck.play_pile.push(deck.draw_pile[i]);
        deck.draw_pile.splice(i, 1);
        res.send(deck.play_pile[deck.play_pile.length - 1]);
        counter++;
        return;
      }
    }
    if (counter == 0) {
      res.send("No Clubs left");
      console.log("No Clubs left");
    }
  }

  //if command is draw spade
  else if (req.params.command == ":draw_spade") {
    let counter = 0;
    for (let i = 0; i < deck.draw_pile.length; i++) {
      if (deck.draw_pile[i].suit == "Spade") {
        deck.play_pile.push(deck.draw_pile[i]);
        deck.draw_pile.splice(i, 1);
        res.send(deck.play_pile[deck.play_pile.length - 1]);
        counter++;
        return;
      }
    }
    if (counter == 0) {
      res.send("No Spades left");
      console.log("No Spades left");
    }
  }

  //if command is draw heart
  else if (req.params.command == ":draw_heart") {
    let counter = 0;
    for (let i = 0; i < deck.draw_pile.length; i++) {
      if (deck.draw_pile[i].suit == "Heart") {
        deck.play_pile.push(deck.draw_pile[i]);
        deck.draw_pile.splice(i, 1);
        res.send(deck.play_pile[deck.play_pile.length - 1]);
        counter++;
        return;
      }
    }
    if (counter == 0) {
      res.send("No Hearts left");
      console.log("No Hearts left");
    }
  } else if (req.params.command == ":see_deck") {
    res.send(deck.draw_pile);

    //if command is see drawn deck
  } else if (req.params.command == ":see_draws") {
    res.send(deck.play_pile);
  }
});
