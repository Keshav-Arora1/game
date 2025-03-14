import create from "zustand";

export const useStore = create((set) => ({
  moveSpeed: 5,
  jumpPower: 7,
  position: [0, 5, 0],
  powerUps: [],
  setPosition: (pos) => set({ position: pos }),
  addPowerUp: (powerUp) => set((state) => ({ powerUps: [...state.powerUps, powerUp] })),
}));

missions: [
    { id: 1, name: "Collect 5 crystals", completed: false },
  ],
  completeMission: (id) => set((state) => ({
    missions: state.missions.map(m =>
      m.id === id ? { ...m, completed: true } : m
    )
  })),