// ==========================
// src/data/wards.js
// ==========================

const wards = [
  {
    id: 1,
    name: "General Ward",
    totalBeds: 50,
    occupiedBeds: 35,
    availableBeds: 15,
    type: "General",
    charges: 1500,
    nurse: "Nurse Priya",
  },

  {
    id: 2,
    name: "ICU",
    totalBeds: 20,
    occupiedBeds: 18,
    availableBeds: 2,
    type: "Critical Care",
    charges: 5000,
    nurse: "Nurse Rahul",
  },

  {
    id: 3,
    name: "Private Room",
    totalBeds: 15,
    occupiedBeds: 10,
    availableBeds: 5,
    type: "Private",
    charges: 3000,
    nurse: "Nurse Kavya",
  },

  {
    id: 4,
    name: "Semi-Private",
    totalBeds: 25,
    occupiedBeds: 20,
    availableBeds: 5,
    type: "Semi Private",
    charges: 2200,
    nurse: "Nurse Meena",
  },
];

export default wards;
