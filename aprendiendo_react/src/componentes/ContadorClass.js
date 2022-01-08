import React, { Component } from "react";

class Contador extends Component {

	constructor(props) {
		super(props);

		this.state = {
			contador: 0
		};
	}

	componentDidMount() {
		console.log("El componente se cargó en el DOM.");
	}

	componentDidUpdate(propiedadesAnteriores, estadoAnterior) {
		console.log("El componente se actualizó.");
		console.log("Propiedades anteriores del componente: ", propiedadesAnteriores);
		console.log("Estado anterior del componente: ", estadoAnterior);
	}

	componentWillUnmount() {
		console.log("El componente se ha desmontado.");

	}

	incrementar(aumento) {
		this.setState((estadoAnterior) => {
			estadoAnterior.contador += aumento;
			return estadoAnterior;
		});
	}

	disminuir(disminucion) {
		this.setState((estadoAnterior) => {
			estadoAnterior.contador -= disminucion;
			return estadoAnterior;
		});
	}

	render() {
		return (
			<div>
				<h1>Contador: {this.state.contador}</h1>
				<button onClick={() => this.incrementar(this.props.aumento)}>Incrementar</button>
				<button onClick={() => this.disminuir(this.props.disminucion)}>Disminuir</button>
			</div>
		);
	}
}

export default Contador;