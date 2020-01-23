export const addToCart = (cartItems, newCartItem) => {
  const existingItem = cartItems.find(
    cartItem => cartItem.id === newCartItem.id
  );
  if (existingItem) {
    return cartItems.map(cartItem =>
      cartItem.id === newCartItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...newCartItem, quantity: 1 }];
};
