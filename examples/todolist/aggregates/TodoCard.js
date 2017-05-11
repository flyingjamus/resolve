import Immutable from 'seamless-immutable';

export default {
    name: 'TodoCard',
    initialState: () => null,

    eventHandlers: {
        TodoCardCreated: () => Immutable({ activated: true }),

        TodoCardRemoved: state => state.setIn(['activated'], false)
    },

    commands: {
        create: (state, args) => {
            if (!args.name) throw new Error('no-name');
            if (state && state.activated) throw new Error('already-exist');

            return {
                type: 'Created',
                payload: {
                    name: args.name
                }
            };
        },

        remove: (state) => {
            if (!state.activated) throw new Error('no-exist');

            return {
                type: 'Removed'
            };
        }
    }
};
