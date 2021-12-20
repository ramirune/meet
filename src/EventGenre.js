import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const EventGenre = ({ events }) => {
	const [data, setData] = useState([]);
	const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#d61a1f'];
	useEffect(() => {
		const getData = () => {
			const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
			const data = genres.map(genre => {
				const value = events.filter(event =>
					event.summary.split(' ').include(genre)
				).length;
				return { name: genre, value: value };
			});
			return data;
		};
		setData(() => getData());
	}, [events]);

	return (
		<ResponsiveContainer height={400}>
			<PieChart width={400} height={400}>
				<Pie
					data={data}
					cx={200}
					cy={200}
					labelLine={false}
					outerRadius={80}
					fill="#8884d8"
					dataKey="value"
					label={({ name, percent }) =>
						`${name} ${(percent * 100).toFixed(0)}%`
					}
				>
					{data.map((entry, index) => (
						<Cell
							key={`cell-${index}`}
							fill={colors[index % colors.length]}
							name={entry.name}
						/>
					))}
				</Pie>
			</PieChart>
		</ResponsiveContainer>
	);
};

export default EventGenre;
