import create from 'zustand';
//used for state management
export const useAuthStore = create((set) => ({
    auth: {
        username: '',
        active: false
    },
    setUsername: (name) => set((state) => ({ auth: { ...state.auth, username: name } }))
}))