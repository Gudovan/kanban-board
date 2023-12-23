import create from 'zustand';

const useKanbanStore = create((set) => ({
  tickets: [],
  groupingOption: 'status',
  setGroupingOption: (option) => set({ groupingOption: option }),
  sortOption: 'priority',
  setSortOption: (option) => set({ sortOption: option }),
}));

export default useKanbanStore;