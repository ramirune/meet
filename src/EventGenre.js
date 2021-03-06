import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const EventGenre = ({ events }) => {
	const [data, setData] = useState([]);
	// Creates a function to get genre data from events data
	useEffect(() => {
		const getData = () => {
			const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];

			const data = genres.map(genre => {
				const value = events.filter(({ summary }) =>
					summary.split(' ').includes(genre)
				).length;
				return { name: genre, value };
			});
			return data;
		};
		setData(() => getData());
	}, [events]);

	const COLORS = ['#febece', '#faf568', '#6fe490', '#d06666', '#fba93e'];

	return (
		<ResponsiveContainer height={400}>
			<PieChart height={400}>
				<Pie
					align="center"
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
							fill={COLORS[index % COLORS.length]}
							name={entry.name}
						/>
					))}
				</Pie>
				<Legend
					layout="horizontal"
					verticalAlign="top"
					align="center"
					height={45}
				/>
			</PieChart>
		</ResponsiveContainer>
	);
};

export default EventGenre;
