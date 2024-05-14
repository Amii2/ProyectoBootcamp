const Empleado = require("../models/Empleado");

exports.agregarEmpleados = async (req, res) => {
  try {
    const empleado = new Empleado(req.body);
    await empleado.save();
    res.json(empleado);
  } catch (error) {
    console.log(error);
    res.status(500).json("Hubo un error al agregar un empleado");
  }
};

exports.buscarEmpleados = async (req, res) => {
  try {
    const empleado = await Empleado.find();
    res.json(empleado);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al buscar los empleados");
  }
};

exports.buscarEmpleado = async (req, res) => {
  try {
    if (req.params.id.length != 24) {
      res.status(404).send("Id incorrecto");
      return;
    }

    const empleado = await Empleado.findById(req.params.id);

    if (!empleado) res.status(404).send("Empleado no encontrado");
    else res.json(empleado);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al buscar un empleado");
  }
};

exports.eliminarEmpleado = async (req, res) => {
  try {
    if (req.params.id.length != 24) {
      res.status(404).send("Id incorrecto");
      return;
    }

    const empleado = await Empleado.findById(req.params.id);

    if (!empleado) res.status(404).send("Empleado no encontrado");
    else {
      await Empleado.findOneAndDelete({ _id: req.params.id });
      res.json(empleado);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al eliminar el empleado");
  }
};

exports.actualizarEmpleado = async (req, res) => {
  try {
    if (req.params.id.length != 24) {
      res.status(404).send("Empleado no encontrado (string muy corta)");
      return;
    }

    const empleado = await Empleado.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!empleado) res.status(404).send("Empleado no encontrado");
    else res.json(empleado);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al actualizar el empleado");
  }
};
