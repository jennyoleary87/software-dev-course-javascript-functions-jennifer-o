/*
===========================================
🤝 Collaborative Coding Challenge: Event Helpers
===========================================

🎯 Objective:
Students will work in small teams to collaboratively design and implement
reusable functions that solve specific tasks. This activity encourages:

- Teamwork
- Critical thinking
- Knowledge sharing
*/

// ============================================
// 🎉 Scenario:
// Your bootcamp is organizing an event to showcase projects.
// Your team will write reusable JavaScript functions to help manage the event.
// Each function must:
// - Use parameters
// - Use return statements
// - Follow the single responsibility principle
// ============================================


// ============================================
// 🧩 Task 1: Generate Attendee Badge
// ============================================
// Create a function that:
// - Takes a name and a role (e.g., "Alice", "speaker")
// - Returns a string in the format: "Name: Alice, Role: Speaker"

// Steps:
// 1. Define the function with two parameters.
// 2. Format the output string properly.
// 3. Capitalize the role if needed.
// 4. Return the result.

function attendeeBadge(name, role) {
    // Format the role to be capitalized
    let formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    let formattedRole = role.charAt(0).toUpperCase() + role.slice(1).toLowerCase();
    console.log(`Name: ${formattedName}, Role: ${formattedRole}`);
}
attendeeBadge("Alice", "speaker");

// ============================================
// 🧩 Task 2: Calculate Event Cost
// ============================================
// Create a function that:
// - Takes number of attendees and cost per attendee.
// - Applies a 10% discount if attendees exceed 100.
// - Returns the total cost.

// function attendeeCost(numAttendees, costPerAttendee) {
//     let totalCost = numAttendees * costPerAttendee;
//     if (numAttendees > 100) {
//         let discountCost = totalCost * 0.9; // apply discount
//         return discountCost;
//     } else {
//         return totalCost; // no discount
//     }
// }
// attendeeCost(140, 30);
// console.log(`Total cost: ${attendeeCost(140, 30)}`);

function attendeeCost(attendees, costPerAttendee) {

    if (attendees > 100) {  // if attendees is 100 or more, 10% discount
        return attendees * costPerAttendee * .9
    } else {
        return attendees * costPerAttendee
    }
}
console.log(attendeeCost(110, 80));

// Steps:
// 1. Multiply attendees by cost.
// 2. Check if attendee count is over 100.
// 3. If so, apply a 10% discount.
// 4. Return the final total.

// ============================================
// 🧩 Task 3: Validate Email
// ============================================
// Create a function that:
// - Takes an email string as input.
// - Returns true if the email contains both "@" and "." characters.
// - Returns false otherwise.

function isEmailValid(email) {
    return email.includes("@") && email.includes(".")
}

console.log(isEmailValid('jenniferoleary@launchcode.com'));

// Steps:
// 1. Check if the string includes both "@" and ".".
// 2. Return true or false accordingly.

// ============================================
// 🧠 Collaborative Steps
// ============================================

// 📌 Design Phase:
// - Brainstorm function requirements: What inputs and outputs are needed?
// - Assign roles within your team:
//   ▸ Pseudocode Writer
//   ▸ Initial Coder
//   ▸ Testers / Debuggers

// 🛠️ Implementation Phase:
// - Write and refine your three functions as a team
// - Use return statements and ensure reusability

// 🧪 Testing Phase:
// - Each member writes test cases for each function
// - Use console.log() to test different inputs and edge cases

// 🎤 Presentation Phase:
// - Share your functions with the class
// - Explain how your team approached the design and testing process

// ✅ Bonus: Can you extend any of the functions to be more flexible or reusable?
