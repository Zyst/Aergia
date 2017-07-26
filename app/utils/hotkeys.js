// @flow
const hotkeys = {
  pomodoro: {
    add: {
      addButton: {
        callAdd: {
          key: "enter",
          description: 'Calls the "add" function, sending us into the input'
        }
      },
      addInput: {
        callCancel: {
          key: "escape",
          description:
            'Calls the "cancel" function, sending us back to the button'
        },
        incrementPomodoros: {
          key: "up",
          description: "Increments the number of pomodoros a task will require"
        },
        decrementPomodoros: {
          key: "down",
          description: "Decreases the number of pomodoros a task will require"
        }
      }
    },
    tasks: {}
  },
  options: {}
};

export default hotkeys;
