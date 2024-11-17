import { OrdersCard } from "./OrdersCard"

export const OrdersGrid = ({ orders }) => {

	return (
		<div className="overflow-x-auto mt-5">
			<table className="w-full text-left rtl:text-right text-lg">
				<thead className="text-gray-500 font-light ">
					<tr>
						<th scope="col" className="px-6 py-3">Nombre del Cliente</th>
						<th scope="col" className="px-6 py-3">Nombre de la tienda</th>
						<th scope="col" className="px-6 py-3">Cupon de descuento</th>
						<th scope="col" className="px-6 py-3">Producto</th>
						<th scope="col" className="px-6 py-3">Fecha de Entrega</th>
					</tr>
				</thead>
				<tbody>

					{
						orders.map(order => <OrdersCard
							key={order.id}
							name_of_client={order.name_of_client}
							name_of_store={order.name_of_store}
							discount_coupon={order.discount_coupon}
							product={order.product}
							delivery_date={order.delivery_date}
						/>)
					}
				</tbody>
			</table>
		</div>
	)
}

