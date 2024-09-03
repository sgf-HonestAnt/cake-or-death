const cakes = [
  'angel',
  'apple',
  'bakewell tart',
  'battenberg',
  'black bun',
  'carrot',
  'cherry',
  'christmas',
  'dundee',
  'eccles',
  'frui',
  'gingerbread',
  'jelly',
  'lemon drizzle',
  'lardy',
  'parkin',
  'rock',
  'simnel',
  'sticky toffee pudding',
  'sponge',
  'tea loaf',
  'treacle tart',
  'victoria sponge',
  'welsh',
];

export const add = (a: number, b: number) => a + b;
export const isItCake = (val: string) => {
  if (val.toLowerCase().includes('cake')) return true;
  if (cakes.includes(val.trim().toLowerCase())) return true;
  if (cakes.includes(val.replace(/cake/i, '').trim().toLowerCase()))
    return true;

  return false;
};
