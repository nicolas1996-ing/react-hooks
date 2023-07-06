import React, { memo, useState } from "react";

// solo se re dibuja el componete cuando sus properties cambian
// de otra manera no se vuelve a redibujar


// export const Small = memo(({ value }) => {
export const Small = React.memo(({ value }) => {
  console.log("se volvio a renderizar el componente small");
  return <small>{value}</small>;
});
