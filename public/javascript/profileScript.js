let User = new Vue({
	el: "#app",
	data: () => ({
		name: "Vtrrix",
		userData: [],
	}),
	methods: {
		fetchData() {
			fetch(`https://api.github.com/users/${this.name}`)
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					this.userData = data;
				})
				.catch((err) => {
					console.log(err);
					alert("Sorry unable to get data");
				});
		},
	},
	created() {
		this.fetchData(this.name);
	},
});
