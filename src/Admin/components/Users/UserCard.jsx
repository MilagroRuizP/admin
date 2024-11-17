import { useState } from "react";

export const UserCard = ({ name, tel, username, status, lastActivity, role, onToggleStatus }) => {
  return (
    <tr className="bg-white border-b hover:bg-gray-50 fade-in">
      {/* Nombre */}
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap capitalize">
        {name}
      </th>

      {/* Teléfono */}
      <td className="px-6 py-4">{tel}</td>

      {/* Nombre de Usuario */}
      <td className="px-6 py-4">{username}</td>

      {/* Estado */}
      <td className="px-6 py-4">
        <button
          onClick={() => onToggleStatus(username)}  // Llamar a la función que cambia el estado
          className={`px-3 py-1 text-xs font-semibold rounded-full cursor-pointer ${
            status === "activo"
              ? "bg-green-100 text-green-800 hover:bg-green-200"
              : "bg-red-100 text-red-800 hover:bg-red-200"
          }`}
        >
          {status === "activo" ? "Deshabilitar" : "Habilitar"}
        </button>
      </td>

      {/* Última Actividad */}
      <td className="px-6 py-4">{lastActivity}</td>

      {/* Rol */}
      <td className="px-6 py-4 capitalize">
        <span
          className={`px-3 py-1 text-xs font-semibold rounded-full ${
            role === "cliente"
              ? "bg-blue-100 text-blue-800"
              : "bg-purple-100 text-purple-800"
          }`}
        >
          {role}
        </span>
      </td>
    </tr>
  );
};

export const UserGrid = ({ initialUsers }) => {
  // Estado que almacena la lista de usuarios
  const [users, setUsers] = useState(initialUsers);

  // Función que alterna el estado de un usuario entre "activo" e "inactivo"
  const handleToggleStatus = (username) => {
    // Actualizar el estado de los usuarios
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.username === username
          ? { ...user, status: user.status === "activo" ? "inactivo" : "activo" }
          : user
      )
    );
  };

  return (
    <div className="overflow-x-auto mt-5">
      <table className="w-full text-left rtl:text-right text-lg">
        <thead className="text-gray-500 font-light">
          <tr>
            <th scope="col" className="px-6 py-3">Nombre</th>
            <th scope="col" className="px-6 py-3">Teléfono</th>
            <th scope="col" className="px-6 py-3">Nombre de Usuario</th>
            <th scope="col" className="px-6 py-3">Estado</th>
            <th scope="col" className="px-6 py-3">Última Actividad</th>
            <th scope="col" className="px-6 py-3">Rol</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserCard
              key={user.username}
              name={user.name}
              tel={user.tel}
              username={user.username}
              status={user.status}
              lastActivity={user.lastActivity}
              role={user.role}
              onToggleStatus={handleToggleStatus}  // Pasamos la función para alternar el estado
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
