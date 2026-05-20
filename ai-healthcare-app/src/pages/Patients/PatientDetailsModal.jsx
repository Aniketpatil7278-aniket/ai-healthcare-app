import Button from "../../components/Common/Button";


const PatientDetailsModal = ({ selectedPatient, setSelectedPatient }) => {
  if (!selectedPatient) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl p-8 overflow-y-auto max-h-[90vh]">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-blue-700">Patient Details</h2>

          <Button
            title="Close"
            onClick={() => setSelectedPatient(null)}
            className="bg-red-500 hover:bg-red-600"
          />
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-gray-100 p-4 rounded-xl">
            <h3 className="text-sm text-gray-500">Patient ID</h3>
            <p className="text-lg font-semibold">{selectedPatient.id}</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-xl">
            <h3 className="text-sm text-gray-500">Patient Name</h3>
            <p className="text-lg font-semibold">{selectedPatient.name}</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-xl">
            <h3 className="text-sm text-gray-500">Age</h3>
            <p className="text-lg font-semibold">{selectedPatient.age}</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-xl">
            <h3 className="text-sm text-gray-500">Gender</h3>
            <p className="text-lg font-semibold">{selectedPatient.gender}</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-xl">
            <h3 className="text-sm text-gray-500">Mobile Number</h3>
            <p className="text-lg font-semibold">{selectedPatient.phone}</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-xl">
            <h3 className="text-sm text-gray-500">Email</h3>
            <p className="text-lg font-semibold">{selectedPatient.email}</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-xl">
            <h3 className="text-sm text-gray-500">Disease</h3>
            <p className="text-lg font-semibold">{selectedPatient.disease}</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-xl">
            <h3 className="text-sm text-gray-500">Doctor</h3>
            <p className="text-lg font-semibold">{selectedPatient.doctor}</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-xl">
            <h3 className="text-sm text-gray-500">Room Number</h3>
            <p className="text-lg font-semibold">{selectedPatient.room}</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-xl">
            <h3 className="text-sm text-gray-500">Bed Number</h3>
            <p className="text-lg font-semibold">{selectedPatient.bed}</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-xl">
            <h3 className="text-sm text-gray-500">Admission Date</h3>
            <p className="text-lg font-semibold">
              {selectedPatient.admissionDate}
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-xl">
            <h3 className="text-sm text-gray-500">Status</h3>
            <p className="text-lg font-semibold text-green-600">
              {selectedPatient.status}
            </p>
          </div>
        </div>

        {/* Address */}
        <div className="mt-6 bg-gray-100 p-4 rounded-xl">
          <h3 className="text-sm text-gray-500 mb-2">Address</h3>

          <p className="text-lg font-semibold">{selectedPatient.address}</p>
        </div>
      </div>
    </div>
  );
};

export default PatientDetailsModal;