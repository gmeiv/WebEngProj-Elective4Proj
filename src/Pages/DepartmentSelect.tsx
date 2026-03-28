import { useNavigate } from "react-router-dom";
import {
  DEPARTMENT_CATALOG,
  DEPT_CODES,
  type DeptCode,
} from "../lib/departmentData";

const departments = DEPT_CODES.map((code: DeptCode) => ({
  code,
  name: DEPARTMENT_CATALOG[code].name,
}));

export default function DepartmentSelect() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8">
        BulSU College of EngineeringGGGGG
      </h1>

      <p className="text-gray-600 mb-10">
        Select a Department
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {departments.map((dept) => (
          <button
            key={dept.code}
            onClick={() => navigate(`/dept/${dept.code}`)}
            className="bg-white shadow-md rounded-xl px-6 py-5 hover:shadow-lg transition"
          >
            <h2 className="font-semibold">{dept.name}</h2>
            <p className="text-sm text-gray-500">{dept.code}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
