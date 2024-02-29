const initialState = {
    deck: [
        { type: "cat", revealed: false },
        { type: "defuse", revealed: false },
        { type: "shuffle", revealed: false },
        { type: "boom", revealed: false },
    ],
};

export const gameReducer = (state = initialState, action: { type: string; payload: any }) => {
    switch (
        action.type
        // Complete
    ) {
    }
};
