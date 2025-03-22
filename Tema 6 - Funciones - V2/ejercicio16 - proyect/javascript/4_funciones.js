function numerosCapicua(limite) {
  const mensaje = [];

  // Generar capicúas de 1 a 5 dígitos
  // 1 dígito
  for (let i = 1; i <= 9; i++) {
    if (i <= limite) {
      mensaje.push(i);
    }
  }

  // 2 dígitos
  for (let i = 1; i <= 9; i++) {
    const capicua = parseInt(`${i}${i}`);
    if (capicua <= limite) {
      mensaje.push(capicua);
    }
  }

  // 3 dígitos
  for (let i = 1; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
      const capicua = parseInt(`${i}${j}${i}`);
      if (capicua <= limite) {
        mensaje.push(capicua);
      }
    }
  }

  // 4 dígitos
  for (let i = 1; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
      const capicua = parseInt(`${i}${j}${j}${i}`);
      if (capicua <= limite) {
        mensaje.push(capicua);
      }
    }
  }

  // 5 dígitos
  for (let i = 1; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
      for (let k = 0; k <= 9; k++) {
        const capicua = parseInt(`${i}${j}${k}${j}${i}`);
        if (capicua <= limite) {
          mensaje.push(capicua);
        }
      }
    }
  }

  return mensaje;
}
