let prompt = require("prompt-sync")();
const trips = [
  {
    id: 1,
    departure: "Safi",
    destination: "Youssoufia",
    departureTime: "07:30",
    arrivalTime: "08:30",
    price: 25,
    availableSeats: 50,
  },
  {
    id: 2,
    departure: "Safi",
    destination: "Marrakech",
    departureTime: "08:00",
    arrivalTime: "10:30",
    price: 90,
    availableSeats: 50,
  },
  {
    id: 3,
    departure: "Safi",
    destination: "Casablanca",
    departureTime: "09:00",
    arrivalTime: "13:00",
    price: 140,
    availableSeats: 50,
  },
  {
    id: 4,
    departure: "Youssoufia",
    destination: "Marrakech",
    departureTime: "09:15",
    arrivalTime: "11:00",
    price: 65,
    availableSeats: 50,
  },
  {
    id: 5,
    departure: "Youssoufia",
    destination: "Casablanca",
    departureTime: "10:00",
    arrivalTime: "13:30",
    price: 110,
    availableSeats: 50,
  },
  {
    id: 6,
    departure: "Marrakech",
    destination: "Casablanca",
    departureTime: "11:30",
    arrivalTime: "14:30",
    price: 120,
    availableSeats: 50,
  },
  {
    id: 7,
    departure: "Marrakech",
    destination: "Rabat",
    departureTime: "12:00",
    arrivalTime: "16:00",
    price: 150,
    availableSeats: 50,
  },
  {
    id: 8,
    departure: "Casablanca",
    destination: "Rabat",
    departureTime: "14:00",
    arrivalTime: "15:15",
    price: 40,
    availableSeats: 50,
  },
  {
    id: 9,
    departure: "Casablanca",
    destination: "Kenitra",
    departureTime: "15:00",
    arrivalTime: "16:45",
    price: 55,
    availableSeats: 50,
  },
  {
    id: 10,
    departure: "Rabat",
    destination: "Kenitra",
    departureTime: "16:00",
    arrivalTime: "16:45",
    price: 30,
    availableSeats: 50,
  },
  {
    id: 11,
    departure: "Rabat",
    destination: "Fes",
    departureTime: "17:00",
    arrivalTime: "19:30",
    price: 95,
    availableSeats: 50,
  },
  {
    id: 12,
    departure: "Kenitra",
    destination: "Fes",
    departureTime: "17:30",
    arrivalTime: "20:00",
    price: 85,
    availableSeats: 50,
  },
  {
    id: 13,
    departure: "Fes",
    destination: "Meknes",
    departureTime: "08:30",
    arrivalTime: "09:20",
    price: 35,
    availableSeats: 50,
  },
  {
    id: 14,
    departure: "Fes",
    destination: "Oujda",
    departureTime: "10:00",
    arrivalTime: "13:30",
    price: 130,
    availableSeats: 50,
  },
  {
    id: 15,
    departure: "Meknes",
    destination: "Rabat",
    departureTime: "11:00",
    arrivalTime: "13:30",
    price: 80,
    availableSeats: 50,
  },
  {
    id: 16,
    departure: "Meknes",
    destination: "Casablanca",
    departureTime: "12:00",
    arrivalTime: "15:00",
    price: 105,
    availableSeats: 50,
  },
  {
    id: 17,
    departure: "Casablanca",
    destination: "El Jadida",
    departureTime: "16:30",
    arrivalTime: "18:00",
    price: 50,
    availableSeats: 50,
  },
  {
    id: 18,
    departure: "El Jadida",
    destination: "Safi",
    departureTime: "18:30",
    arrivalTime: "20:30",
    price: 60,
    availableSeats: 50,
  },
  {
    id: 19,
    departure: "Marrakech",
    destination: "Agadir",
    departureTime: "15:00",
    arrivalTime: "18:30",
    price: 100,
    availableSeats: 50,
  },
  {
    id: 20,
    departure: "Agadir",
    destination: "Safi",
    departureTime: "19:00",
    arrivalTime: "22:00",
    price: 95,
    availableSeats: 50,
  },
];

const tickets = [];
let ticket_id = 0;
 let action;

do {
  console.log("=== RAILWAY MANAGER ===");
  console.log("1. Afficher les trajets");
  console.log("2. Acheter un ticket");
  console.log("3. Afficher les tickets");
  console.log("4. Annuler un ticket");
  console.log("5. Rechercher un ticket");
  console.log("6. Filtrer les trajets");
  console.log("7. Trier les trajets");
  console.log("0. Quitter");
   action = Number(prompt("saisir votre choix"));
  if (action == 1) {
    afficherTrips();

  } else if (action == 2) {
    acheterTicket();

  } else if (action == 3) {
    afficherTickets();

  } else if (action == 4) {
    annuller_ticket();

  } else if (action == 5) {
    rechercherTicket();

  } else if (action == 6) {
    filtrerTrips();

  } else if (action == 7) {
    trierTrips();

  } else if (action == 0) {
  } else {
    console.log("Option invalide.");
  }

} while (action != 0);

function afficherTrips() {
  console.log("=== TRAJETS DISPONIBLES === ");
  for (let i = 0; i < trips.length; i++) {
    console.log(
      "#" +
        trips[i].id +
        " " +
        trips[i].departure +
        "  →  " +
        trips[i].destination,
    );
    console.log("depart :" + trips[i].departureTime);
    console.log("arrivee :" + trips[i].arrivalTime);
    console.log("prix :" + trips[i].price + "DH");
    console.log("places disponibles :" + trips[i].availableSeats);
    console.log();
  }
}

// afficherTrips()

function acheterTicket() {
  let nom_p = prompt("donner le nom de passager :");
  let id_trajet = Number(prompt("donner l id du trajet :"));

  let trouve = 0;

  for (let i = 0; i < trips.length; i++) {
    if (trips[i].id == id_trajet) {
      trouve = 1;

      if (trips[i].availableSeats > 0) {
        // chercher  place lowla khawya
        let place = 1;
        let ticket;

        for (let j = 0; j < 50; j++) {
          let ticket = tickets.find(function (t) {
            return t.tripId == id_trajet && t.seat_number == place;
          });

          if (ticket == undefined) {
            break;
          }

          place++;
        }

        // créer ticket
        ticket_id++;

        let nouveauTicket = {
          id: ticket_id,
          nom: nom_p,
          tripId: id_trajet,
          seat_number: place,
          price: trips[i].price,
        };
        //zid ticket
        tickets.push(nouveauTicket);
        // n9s place
        trips[i].availableSeats--;
        console.log('----------------------')
        console.log("Ticket acheté avec succès.");
        console.log("Ticket #" + nouveauTicket.id);
        console.log("Passager : " + nouveauTicket.nom);
        console.log(
          "Trajet : " + trips[i].departure + " → " + trips[i].destination,
        );
        console.log("Place : " + nouveauTicket.seat_number);
        console.log("Prix : " + nouveauTicket.price + " DH");
      } else {
        console.log('----------------------')
        console.log("Train complet");
      }

      break;
    }
  }

  if (trouve == 0) {
    console.log("Trajet introuvable.");
  }
}
// acheterTicket();

function afficherTickets() {
  if (tickets.length == 0) {
    console.log("Aucun ticket enregistré.");
  } else {
    console.log("=== TICKETS ===");
    for (let i = 0; i < tickets.length; i++) {
      console.log("id :" + tickets[i].id);
      console.log("passager :" + tickets[i].nom);
      console.log("trajet :" + tickets[i].tripId);
      console.log("place :" + tickets[i].seat_number);
      console.log("prix :" + tickets[i].price + "DH");
      console.log();
    }
  }
}
// afficherTickets();

function annuller_ticket() {
  let trouve = 0;
  let ticket_id = prompt("donner id de ticket");

  for (let i = 0; i < tickets.length; i++) {
    if (ticket_id == tickets[i].id) {
      for (let j = 0; j < trips.length; j++) {
        if (tickets[i].tripId == trips[j].id) {
          tickets.splice(i, 1);
          trips[j].availableSeats++;
          console.log('anuule avec succes')
          trouve = 1;
          return;
        }
      }
    }
  }

  if (trouve == 0) {
    console.log("ticket introuvable");
  }
}
// acheterTicket()
// annuller_ticket()
// afficherTickets()
// afficherTrips()

function rechercherTicket() {
  let nom = prompt("nom de passager :");
  let trouve = 0;
  console.log("=== TICKETS === ");
  for (let i = 0; i < tickets.length; i++) {
    if (tickets[i].nom == nom) {
      trouve = 1;
      console.log("Ticket #" + tickets[i].id);
      console.log("passager :" + tickets[i].nom);
      for (let j = 0; j < trips.length; j++) {
        if (trips[j].id == tickets[i].tripId) {
          console.log(
            "traget :" + trips[j].departure + " → " + trips[j].destination,
          );
        }
      }
      console.log("place :" + tickets[i].seat_number);
      for (let j = 0; j < trips.length; j++) {
        if (trips[j].id == tickets[i].tripId) {
          console.log("prix:" + trips[j].price);
        }
      }
    }
  }
  if (trouve == 0) {
    console.log('----------------------')
    console.log("Aucun ticket enregistré");
  }
}

// rechercherTicket()
function filtrerTrips() {
  let ville = prompt("saisir  ville de depart");
  let res = trips.filter(function (t) {
    return t.departure == ville;
  });
  if (res.length > 0) {
    for (let i = 0; i < res.length; i++) {
      console.log(
        res[i].departure +
          " → " +
          res[i].destination +
          " : " +
          res[i].price +
          " DH",
      );
    }
  } else {
    console.log("aucun traget dissponible");
  }
}
// filtrerTrips();

function trierTrips() {
  for (let i = 0; i < trips.length; i++) {
    for (let j = i + 1; j < trips.length; j++) {
      let res;
      if (trips[i].price > trips[j].price) {
        res = trips[i];
        trips[i] = trips[j];
        trips[j] = res;
      }
    }

    console.log(trips[i]);
  }
}
// trierTrips()
