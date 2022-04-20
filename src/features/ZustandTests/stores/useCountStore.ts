import create from "zustand";

interface CountStore { 
    count: number;
    increment: () => void;
    decrement: () => void;
}

const useCountStore = create<CountStore>((set) => ({
    count: 0,
    increment: () => set((state: CountStore) => ({ count: state.count + 1 })),
    decrement: () => set((state: CountStore) => ({ count: state.count - 1 })),
}));

export default useCountStore;
