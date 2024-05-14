const Cliente = require("../models/Cliente");

exports.agregarClientes = async (req, res) => {
  try {
    const cliente = new Cliente(req.body);
    await cliente.save();
    res.json(cliente);
  } catch (error) {
    console.log(error);
    res.status(500).json("Hubo un error al agregar un cliente");
  }
};

exports.buscarClientes = async (req, res) => {
  try {
    const cliente = await Cliente.find();
    res.json(cliente);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al buscar los clientes");
  }
};

exports.buscarCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    if (!cliente) res.status(404).send("Cliente no encontrado");
    else res.json(cliente);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al buscar un cliente");
  }
};

exports.eliminarCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    if (!cliente) res.status(404).send("Cliente no encontrado");
    else {
      await Cliente.findOneAndDelete({ _id: req.params.id });
      res.json(cliente);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al eliminar el cliente");
  }
};

exports.actualizarCliente = async (req, res) => {
  try {
    if (req.params.id.length != 24)
      res.status(404).send("Cliente no encontrado (string muy corta)");

    const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!cliente) res.status(404).send("Cliente no encontrado");
    else res.json(cliente);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al actualizar el cliente");
  }
};
