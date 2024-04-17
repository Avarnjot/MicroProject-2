// Create a new Vue instance
new Vue({
    // Mount the Vue instance to an HTML element with the id "app"
    el: '#app',

    // Data section where we define variables
    data: {
        // Variable to store the value of the input field
        newTask: '',

        // Array to store the list of tasks
        tasks: []
    },

    // Methods section where we define functions
    methods: {
        // Function to add a new task
        addTask() {
            // Check if the input field is not empty
            if (this.newTask.trim() !== '') {
                // Add a new task to the tasks array
                this.tasks.push({
                    // Set the task title to the value of the input field
                    title: this.newTask,

                    // Set the task completion status to false by default
                    completed: false
                });

                // Clear the input field after adding the task
                this.newTask = '';
            }
        },

        // Function to delete a task
        deleteTask(index) {
            // Remove the task at the specified index from the tasks array
            this.tasks.splice(index, 1);
        }
    }
});
