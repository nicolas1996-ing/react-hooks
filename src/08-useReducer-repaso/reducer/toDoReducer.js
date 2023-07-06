export const todoReducer = (items = [], action) => {
  switch (action.type) {
    case "[TODO] add":
      items = [...items, action.payload];
      break;

    case "[TODO] remove":
      items = items.filter((item) => item.id !== action.payload.id);
      break;

    case "[TODO] change":
      items = items.map((item) => {
        if (item.id == action.payload.id) {
          return {
            ...item,
            done: !item.done
          }
        }
        return item
      });
      break;

    default:
      break;
  }

  return items;
};
