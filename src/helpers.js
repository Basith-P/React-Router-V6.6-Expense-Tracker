const generateRandomColor = () => {
  const existingBudgetLength = fetchData("budgets")?.length ?? 0;
  return `${existingBudgetLength * 34} 65% 50%`;
};

// Local storage
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const createBudget = (name, amount) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    amount: +amount,
    createdAt: Date.now(),
    color: generateRandomColor(),
    // color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  };

  const data = fetchData("budgets") ?? [];
  data.push(newItem);
  localStorage.setItem("budgets", JSON.stringify(data));
};

export const deleteItem = ({ key }) => {
  localStorage.removeItem(key);
};
