## To-Do List

**Requirements**
- Dynamically Render the content with React using components
- Use Local Storage to store all to-do list data in the browser
- Display all to-do list items
- Three "views" for the user: All, Completed, & To-Do (not completed)
- Display Prompting text to add item
- Cross out or check off one item as "completed"
- See a count of remaining items
- Remove one item (either hard delete or soft delete/archive)
- Check off or cross out all items in one click as a "completed all" function
- Remove all completed items (soft delete/archive)
- Ability to press a button and all checked off items become active again

---

### Ideas

- border color indication
- border radius buttons with background image or color
    - pesto icon
- completed items stay on page till clear completed, moves items to completed page
- set time out that moves items once completed to Completed page
- add clock to top of page
- card flip
- due date and time
- possibly add alarm

### Components
- title
- input -- dont use form tag, use input onchange
- list of todos
- delete function
- up next and completed page

### Breakdown
- pages / app


.find for deleting?

data: [] - stored in app 
<todoItem props = text/>
{
    text:
    time:
    date:
    active: t/f
    created at:
    id:
}