
export const OrdersCard = ({ name_of_client, name_of_store, discount_coupon, product, delivery_date }) => {



	return (
		<tr className="bg-white border-b hover:bg-gray-50 fade-in">
			<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap capitalize">{name_of_client}</th>
			<td className="px-6 py-4">{name_of_store}</td>
			<td className="px-6 py-4">{discount_coupon}</td>
			<td className="px-6 py-4">{product}</td>
			<td className="px-6 py-4">{delivery_date}</td>
		</tr>
	)
}
