import Button from "../../components/Common/Button";

const PatientDetailsModal = ({ selectedPatient, setSelectedPatient }) => {
  if (!selectedPatient) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white p-8 shadow-2xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-blue-700">Patient Details</h2>

          <Button
            title="Close"
            onClick={() => setSelectedPatient(null)}
            className="bg-red-500 hover:bg-red-600"
          />
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* Patient ID */}
          <div className="rounded-xl bg-gray-100 p-4">
            <h3 className="text-sm text-gray-500">Patient ID</h3>

            <p className="text-lg font-semibold">{selectedPatient.patientId}</p>
          </div>

          {/* Patient Name */}
          <div className="rounded-xl bg-gray-100 p-4">
            <h3 className="text-sm text-gray-500">Patient Name</h3>

            <p className="text-lg font-semibold">{selectedPatient.name}</p>
          </div>

          {/* Age */}
          <div className="rounded-xl bg-gray-100 p-4">
            <h3 className="text-sm text-gray-500">Age</h3>

            <p className="text-lg font-semibold">{selectedPatient.age}</p>
          </div>

          {/* Gender */}
          <div className="rounded-xl bg-gray-100 p-4">
            <h3 className="text-sm text-gray-500">Gender</h3>

            <p className="text-lg font-semibold">{selectedPatient.gender}</p>
          </div>

          {/* Mobile */}
          <div className="rounded-xl bg-gray-100 p-4">
            <h3 className="text-sm text-gray-500">Mobile Number</h3>

            <p className="text-lg font-semibold">{selectedPatient.phone}</p>
          </div>

          {/* Email */}
          <div className="rounded-xl bg-gray-100 p-4">
            <h3 className="text-sm text-gray-500">Email</h3>

            <p className="text-lg font-semibold">
              {selectedPatient.email || "Not Available"}
            </p>
          </div>

          {/* Disease */}
          <div className="rounded-xl bg-gray-100 p-4">
            <h3 className="text-sm text-gray-500">Disease</h3>

            <p className="text-lg font-semibold">{selectedPatient.disease}</p>
          </div>

          {/* Doctor */}
          <div className="rounded-xl bg-gray-100 p-4">
            <h3 className="text-sm text-gray-500">Doctor</h3>

            <p className="text-lg font-semibold">{selectedPatient.doctor}</p>
          </div>

        

          {/* Room /ward Type*/}
          <div className="rounded-xl bg-gray-100 p-4">
            <h3 className="text-sm text-gray-500">Room Type</h3>

            <p className="text-lg font-semibold">{selectedPatient.room}</p>
          </div>

          {/* Bed */}
          <div className="rounded-xl bg-gray-100 p-4">
            <h3 className="text-sm text-gray-500">Bed Number</h3>

            <p className="text-lg font-semibold">{selectedPatient.bed}</p>
          </div>

          {/* Admission Date */}
          <div className="rounded-xl bg-gray-100 p-4">
            <h3 className="text-sm text-gray-500">Admission Date</h3>

            <p className="text-lg font-semibold">
              {selectedPatient.admissionDate}
            </p>
          </div>

          {/* Status */}
          <div className="rounded-xl bg-gray-100 p-4">
            <h3 className="text-sm text-gray-500">Status</h3>

            <p className="text-lg font-semibold text-green-600">
              {selectedPatient.status}
            </p>
          </div>
        </div>

        {/* Address */}
        <div className="mt-6 rounded-xl bg-gray-100 p-4">
          <h3 className="mb-2 text-sm text-gray-500">Address</h3>

          <p className="text-lg font-semibold">{selectedPatient.address}</p>
        </div>
      </div>
    </div>
  );
};

export default PatientDetailsModal;
