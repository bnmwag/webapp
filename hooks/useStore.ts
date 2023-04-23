import { create } from 'zustand';

const useStore = create((set) => ({
	searchTerm: '',
	setSearchTerm: (searchTerm: string) => set({ searchTerm }),
}));

export default useStore;
