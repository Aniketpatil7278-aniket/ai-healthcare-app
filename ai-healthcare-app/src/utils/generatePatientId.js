// src/utils/generatePatientId.js


const generatePatientId = () => {
  // Current Year
  const currentYear = new Date().getFullYear();

  // Get Last Counter
  const lastId = localStorage.getItem("patientCounter") || 0;

  // Increment Counter
  const nextId = Number(lastId) + 1;

  // Save Updated Counter
  localStorage.setItem("patientCounter", nextId);

  // Format => P-2026-001
  return `P-${currentYear}-${String(nextId).padStart(3, "0")}`;
};

export default generatePatientId;
