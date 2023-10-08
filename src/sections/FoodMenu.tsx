const FoodMenu = () => {
	const MenuItems = [
		{
			type: "Drinks",
			items: [
				{
					image: "",
					name: "Pineapple Juice",
					price: "$17.50",
					description: "Far far away, behind the word mountains.",
				},
				{
					image: "",
					name: "Green Juice",
					price: "$17.50",
					description: "Far far away, behind the word mountains.",
				},
				{
					image: "",
					name: "Soft Drinks",
					price: "$17.50",
					description: "Far far away, behind the word mountains.",
				},
				{
					image: "",
					name: "Carlo Rosee Drinks",
					price: "$17.50",
					description: "Far far away, behind the word mountains.",
				},
			],
		},
		{
			type: "Steak",
			items: [
				{
					image: "",
					name: "Beef Steak",
					price: "$17.50",
					description: "Far far away, behind the word mountains.",
				},
				{
					image: "",
					name: "Tomato with Chicken",
					price: "$17.50",
					description: "Far far away, behind the word mountains.",
				},
				{
					image: "",
					name: "Sausages from Italy",
					price: "$17.50",
					description: "Far far away, behind the word mountains.",
				},
				{
					image: "",
					name: "Beef Grilled",
					price: "$17.50",
					description: "Far far away, behind the word mountains.",
				},
			],
		},
	];
	return (
		<div id="fh5co-menus" data-section="menu">
			<div className="container">
				<div className="section-title">
					<h2>Food Menu</h2>
					<p>
						Far far away, behind the word mountains, far from the countries
						Vokalia and Consonantia, there live the blind texts.
					</p>
				</div>
				<div className="row row-padded">
					{MenuItems.map((items, index) => (
						<div key={index} className="col-md-6">
							<div className="fh5co-food-menu to-animate-2">
								<h2 className="fh5co-drinks">{items.type}</h2>
								<ul>
									{items.items.map((item, index) => (
										<li key={index}>
											<div className="fh5co-food-desc">
												<figure>
													<img
														src={item.image}
														className="img-responsive"
														alt={item.name}
													/>
												</figure>
												<div>
													<h3>{item.name}</h3>
													<p>{item.description}</p>
												</div>
											</div>
											<div className="fh5co-food-pricing">{item.price}</div>
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>

				<div>
					<a href="#" className="btn btn-primary btn-outline">
						More Food Menu
					</a>
				</div>
			</div>
		</div>
	);
};

export default FoodMenu;
