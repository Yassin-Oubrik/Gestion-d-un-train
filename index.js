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

tickets = [];

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

let ticket_id = 0;

function acheterTicket() {
  let nom_p = prompt("donner le nom de passager :");
  let id_trajet = Number(prompt("donner l id du trajet :"));

  let trouve = 0;

  for (let i = 0; i < trips.length; i++) {
    if (trips[i].id == id_trajet) {
      trouve = 1;

      if (trips[i].availableSeats > 0) {
        ticket_id++;

        let ticket = {
          id: ticket_id,
          passengerName: nom_p,
          tripId: id_trajet,
          seat_number: 1,
          price: trips[i].price,
        };

        tickets.push(ticket);

        trips[i].availableSeats = trips[i].availableSeats - 1;
      } else {
        console.log("Train complet");
      }
    }
  }

  if (trouve == 0) {
    console.log("Trajet introuvable");
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
      console.log("passager :" + tickets[i].passengerName);
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
  let trouve =0;
  console.log("=== TICKETS === ");
  for (let i = 0; i < tickets.length; i++) {
    if (tickets[i].passengerName == nom) {
      trouve=1;
      console.log("Ticket #" + tickets[i].id);
      console.log("passager :" + tickets[i].passengerName);
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
    console.log("ticket introuvable");
  }
}
// rechercherTicket()
