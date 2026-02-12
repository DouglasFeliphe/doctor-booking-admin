import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from 'react';

interface ConfirmOptions {
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void | Promise<void>;
}

interface ConfirmContextType {
  confirm: (options: ConfirmOptions) => void;
  close: () => void;
  state: ConfirmOptions & { isOpen: boolean };
}

const ConfirmContext = createContext<ConfirmContextType | undefined>(undefined);

export function ConfirmProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ConfirmOptions & { isOpen: boolean }>({
    isOpen: false,
    title: '',
    description: '',
    onConfirm: () => {},
  });

  const confirm = useCallback((options: ConfirmOptions) => {
    setState({ ...options, isOpen: true });
  }, []);

  const close = useCallback(() => {
    setState((prev) => ({ ...prev, isOpen: false }));
  }, []);

  return (
    <ConfirmContext.Provider value={{ confirm, close, state }}>
      {children}
    </ConfirmContext.Provider>
  );
}

export function useConfirm() {
  const context = useContext(ConfirmContext);
  if (!context) {
    throw new Error('useConfirm deve ser usado dentro de um ConfirmProvider');
  }
  return context;
}
