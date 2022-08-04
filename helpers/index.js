export const formatearDinero = (cantidad) => {
  return cantidad.toLocaleString("en", {
    style: "currency",
    currency: "BOB",
  });
};
