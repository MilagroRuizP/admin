import { ReportsCard } from "./ReportsCard"


export const ReportsGrid = ({ reports }) => {

	return (
		<div className="overflow-x-auto mt-5">
			<table className="w-full text-left rtl:text-right text-lg">
				<thead className="text-gray-500 font-light ">
					<tr>
						<th scope="col" className="px-6 py-3">Nombre del Cliente</th>
						<th scope="col" className="px-6 py-3">Tipo de usuario</th>
						<th scope="col" className="px-6 py-3">Numero de telefono</th>
						<th scope="col" className="px-6 py-3">Tipo de queja</th>
						<th scope="col" className="px-6 py-3">Fecha de queja</th>
					</tr>
				</thead>
				<tbody>

					{
						reports.map(report => <ReportsCard
							key={report.id}
							name={report.name}
							rol={report.rol}
							tel={report.tel}
							type={report.type}
							date={report.date}
						/>)
					}
				</tbody>
			</table>
		</div>
	)
}

