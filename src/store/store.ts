type Listener<T> = (state: T) => void;

export class Store<T> {
    private state: T;

    private listeners = new Set<Listener<T>>();

    constructor(initialState: T) {
        this.state = initialState;
    }

    getState(): T {
        return this.state;
    }

    setState(partial: Partial<T>): void {
        this.state = {
        ...this.state,
        ...partial,
        };

        this.emit();
    }

    subscribe(listener: Listener<T>): () => void {
        this.listeners.add(listener);

        // immediate initial call
        listener(this.state);

        return () => {
        this.listeners.delete(listener);
        };
    }

    private emit(): void {
        for (const listener of this.listeners) {
        listener(this.state);
        }
    }
}