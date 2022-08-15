const isLessOrMuch = (counter, queryLength) => {
  if (counter + 1 > queryLength) {
    counter = 0;
  } else if (counter < 0) {
    counter = queryLength - 1;
  }

  return counter;
};

export { isLessOrMuch };
