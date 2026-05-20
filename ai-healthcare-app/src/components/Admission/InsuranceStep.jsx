// ==========================
// src/components/Admission/InsuranceStep.jsx
// ==========================

const InsuranceStep = ({ formData, setFormData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div>
        <label className="block mb-2 font-medium">Insurance Provider</label>

        <input
          type="text"
          className="w-full border p-3 rounded-lg"
          onChange={(e) =>
            setFormData({
              ...formData,
              insuranceProvider: e.target.value,
            })
          }
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">Policy Number</label>

        <input
          type="text"
          className="w-full border p-3 rounded-lg"
          onChange={(e) =>
            setFormData({
              ...formData,
              policyNumber: e.target.value,
            })
          }
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">Coverage Type</label>

        <select
          className="w-full border p-3 rounded-lg"
          onChange={(e) =>
            setFormData({
              ...formData,
              coverageType: e.target.value,
            })
          }
        >
          <option>Select</option>
          <option>Full</option>
          <option>Partial</option>
        </select>
      </div>
    </div>
  );
};

export default InsuranceStep;
