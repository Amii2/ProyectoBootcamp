const mongoose = require("mongoose");

const clienteSchema = mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    especie: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("empleados", clienteSchema);
