import { UserCard } from "./UserCard"

export const UserGrid = ({ users }) => {

	return (
		<div className="overflow-x-auto mt-5">
			<table className="w-full text-left rtl:text-right text-lg">
				<thead className="text-gray-500 font-light ">
					<tr>
						<th scope="col" className="px-6 py-3">Nombre</th>
						<th scope="col" className="px-6 py-3">Telefono</th>
						<th scope="col" className="px-6 py-3">Nombre de Usuario</th>
            <th scope="col" className="px-6 py-3">Habilitado</th>
            <th scope="col" className="px-6 py-3">Rol</th>
					</tr>
				</thead>
				<tbody>

					{
						users.map(user => <UserCard
							key={user.id}
							name={user.name}
							tel={user.tel}
							username={user.username}
						/>)
					}
				</tbody>
			</table>
		</div>
	)
}

